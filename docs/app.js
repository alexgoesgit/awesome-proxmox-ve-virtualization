(() => {
  const catalogEl = document.getElementById("catalog");
  const chipsEl = document.getElementById("category-chips");
  const metaEl = document.getElementById("result-meta");
  const emptyEl = document.getElementById("empty");
  const searchEl = document.getElementById("search");
  const backToTopEl = document.getElementById("back-to-top");

  // Back-to-top button
  if (backToTopEl) {
    backToTopEl.hidden = false;
    const onScroll = () => {
      backToTopEl.classList.toggle("is-visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    backToTopEl.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  let data = null;
  let activeCategory = "all";
  let query = "";

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const highlight = (text, q) => {
    const safe = escapeHtml(text);
    if (!q) return safe;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${escaped})`, "ig"), "<mark>$1</mark>");
  };

  const itemMatches = (item, q, extraHay = "") => {
    if (!q) return true;
    const hay = `${item.name} ${item.description} ${extraHay}`.toLowerCase();
    return hay.includes(q);
  };

  const countVisible = (section, q) => {
    // A query that matches the section name itself shows all items in it.
    const sectionHay = section.name.toLowerCase();
    if (q && sectionHay.includes(q)) {
      return section.items.length +
        section.subgroups.reduce((n, sg) => n + sg.items.length, 0);
    }
    let count = section.items.filter((item) => itemMatches(item, q, section.name)).length;
    for (const subgroup of section.subgroups) {
      // Subgroup-name match shows all items in that subgroup.
      if (q && subgroup.name.toLowerCase().includes(q)) {
        count += subgroup.items.length;
      } else {
        count += subgroup.items.filter((item) =>
          itemMatches(item, q, `${section.name} ${subgroup.name}`)
        ).length;
      }
    }
    return count;
  };

  const renderItems = (items, q, extraHay = "") => {
    const filtered = items.filter((item) => itemMatches(item, q, extraHay));
    if (!filtered.length) return "";
    return `<ul class="item-list">${filtered
      .map(
        (item) => `
      <li class="item">
        <a href="${escapeHtml(item.url)}" rel="noopener noreferrer" target="_blank">
          ${item.favicon ? `<img class="item-favicon" src="${escapeHtml(item.favicon)}" alt="" width="16" height="16" loading="lazy" onerror="this.style.display='none'">` : ""}
          ${highlight(item.name, q)}
        </a>
        ${item.description ? `<p>${highlight(item.description, q)}</p>` : ""}
        ${item.links && item.links.length ? `<div class="item-links" aria-label="Additional links">${item.links.map((l) => `<a class="item-link-tag" href="${escapeHtml(l.url)}" rel="noopener noreferrer" target="_blank">${escapeHtml(l.label)}</a>`).join("")}</div>` : ""}
      </li>`
      )
      .join("")}</ul>`;
  };

  const render = () => {
    if (!data) return;
    const q = query.trim().toLowerCase();
    let shownItems = 0;
    let shownSections = 0;

    const sectionsHtml = data.sections
      .map((section, index) => {
        if (activeCategory !== "all" && section.id !== activeCategory) {
          return "";
        }
        const visible = countVisible(section, q);
        if (!visible) return "";

        shownSections += 1;
        shownItems += visible;

        const sectionMatch = q && section.name.toLowerCase().includes(q);
        const top = sectionMatch
          ? renderItems(section.items, "")
          : renderItems(section.items, q, section.name);
        const subgroups = section.subgroups
          .map((subgroup) => {
            const sgMatch = sectionMatch || (q && subgroup.name.toLowerCase().includes(q));
            const list = sgMatch
              ? renderItems(subgroup.items, "")
              : renderItems(subgroup.items, q, `${section.name} ${subgroup.name}`);
            if (!list) return "";
            return `<div class="subgroup"><h3>${escapeHtml(subgroup.name)}</h3>${list}</div>`;
          })
          .join("");

        return `
          <section class="section" id="${escapeHtml(section.id)}" style="animation-delay:${Math.min(index, 8) * 0.04}s">
            <div class="section-head">
              <h2>${escapeHtml(section.name)}</h2>
              <div class="section-count">${visible} resource${visible === 1 ? "" : "s"}</div>
            </div>
            ${top}
            ${subgroups}
          </section>`;
      })
      .join("");

    catalogEl.innerHTML = sectionsHtml;
    emptyEl.classList.toggle("is-visible", shownItems === 0);

    const categoryLabel =
      activeCategory === "all"
        ? "all categories"
        : data.sections.find((s) => s.id === activeCategory)?.name || "category";

    metaEl.textContent =
      shownItems === 0
        ? `No matches in ${categoryLabel}`
        : `Showing ${shownItems} of ${data.itemCount} resources across ${shownSections} categor${shownSections === 1 ? "y" : "ies"}`;
  };

  const renderChips = () => {
    const chips = [
      `<button type="button" class="chip${activeCategory === "all" ? " is-active" : ""}" data-category="all">All</button>`,
      ...data.sections.map((section) => {
        const count = countVisible(section, "");
        return `<button type="button" class="chip${activeCategory === section.id ? " is-active" : ""}" data-category="${escapeHtml(section.id)}">${escapeHtml(section.name)} <span aria-hidden="true">(${count})</span></button>`;
      }),
    ];
    chipsEl.innerHTML = chips.join("");
  };

  chipsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    // Clear search when switching category
    query = "";
    searchEl.value = "";
    window.clearTimeout(searchTimer);
    renderChips();
    render();
  });

  let searchTimer = 0;
  searchEl.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      query = searchEl.value;
      render();
    }, 120);
  });

  fetch("./data.json", { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load data.json (${response.status})`);
      return response.json();
    })
    .then((json) => {
      data = json;
      document.title = json.title;
      renderChips();
      render();

      if (json.lastCommit) {
        const c = json.lastCommit;
        const date = new Date(c.date).toLocaleDateString(undefined, {
          year: "numeric", month: "short", day: "numeric",
        });
        const el = document.getElementById("last-commit");
        if (el) {
          el.innerHTML = `Last updated ${escapeHtml(date)} · <a href="${escapeHtml(c.url)}" rel="noopener noreferrer" target="_blank"><code>${escapeHtml(c.short_sha)}</code></a>`;
          el.hidden = false;
        }
      }
    })
    .catch((error) => {
      metaEl.textContent = "Could not load catalog data.";
      emptyEl.textContent = String(error.message || error);
      emptyEl.classList.add("is-visible");
    });
})();
