# Awesome Proxmox VE Virtualization [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A list of Proxmox VE related software, tools and documentation. This project is not affiliated with Proxmox.

## Contents

* [AI](#ai)
* [API](#api)
* [Autoscaling](#autoscaling)
* [Backup Tools](#backup-tools)
* [CLI & Community Tools](#cli--community-tools)
* [Cluster Tools](#cluster-tools)
* [Desktop Apps](#desktop-apps)
* [Documentation](#documentation)
* [Forums](#forums)
* [Guest Automation](#guest-automation)
* [Infrastructure as Code](#infrastructure-as-code)
* [Inventory](#inventory)
* [Management](#management)
* [Migration](#migration)
* [Mobile Apps](#mobile-apps)
* [Monitoring](#monitoring)
* [Proxmox VE](#proxmox-ve)
* [Reporting](#reporting)
* [Security](#security)
* [Storage](#storage)
* [VDI](#vdi)
* [VPS control panels](#vps-control-panels)

## AI

* [Proximo](https://github.com/john-broadway/proximo) - MCP server for Proxmox VE, Backup Server, Mail Gateway, and Datacenter Manager with audited trust core (plan, prove, undo, diagnose). MCP + A2A.
* [ProxmoxMCP](https://github.com/canvrno/proxmoxmcp) - Python-based MCP server for interacting with Proxmox hypervisors, providing a clean interface for managing nodes, VMs, and containers.
* [ProxmoxMCP-Plus](https://github.com/RekklesNA/ProxmoxMCP-Plus) - MCP and OpenAPI integration to safely control Proxmox VE VMs, LXCs, backups, and snapshots from LLMs and AI agents.

## API

* [Proxmox API documentation](https://pve.proxmox.com/pve-docs/api-viewer/index.html) - Explore the official API documentation.
* Go
  * [Proxmox API Go](https://github.com/Telmate/proxmox-api-go) - Proxmox API in golang. For /api2/json.
* Java
  * [Proxmox VE Client API Java](https://github.com/Corsinvest/cv4pve-api-java) - Java API client Libraries.
* Perl
  * [Proxmox Perl API client](https://git.proxmox.com/?p=pve-apiclient.git;a=summary) - Official Proxmox Maintained Perl API.
* Powershell
  * [PowerShell for Proxmox VE](https://www.powershellgallery.com/packages/Corsinvest.ProxmoxVE.Api/) - CmdLet for PowerShell to manage Proxmox VE.
* Python
  * [proxmoxer](https://pypi.org/project/proxmoxer) - Python wrapper around the Proxmox REST API v2.

## Autoscaling

* [LXC AutoScale](https://github.com/fabriziosalmi/proxmox-lxc-autoscale) - Resource management daemon specifically designed for Proxmox environments. It automatically adjusts CPU and memory allocations with no downtime and can clone LXC containers based on real-time usage metrics and predefined thresholds.
* [Proxmox VM Autoscale](https://github.com/fabriziosalmi/proxmox-vm-autoscale) - Service that dynamically adjusts your Proxmox virtual machine (VM) resources (CPU cores, RAM) based on real-time metrics and user-defined thresholds.

## Backup Tools

* [BACKUP EAGLE](https://www.backup-eagle.com/product/proxmox) - Backup Monitoring and Reporting. Centralised view of backups, backup system health and backup storage for on-prem and cloud backups.
* [Bacula Enterprise](https://www.baculasystems.com/corporate-data-backup-software-solutions/bacula-enterprise-data-backup-software/features/) - Subscription-based enterprise data backup solution with a Proxmox plugin for the latest PVE releases.
* [BDRSuite](https://www.bdrsuite.com/proxmox-backup/) - Comprehensive backup and disaster recovery solution for virtual, physical, cloud, and SaaS applications with agentless backup for Proxmox VMs ([docs](https://www.bdrsuite.com/technical-documents/), [download](https://www.bdrsuite.com/vembu-bdr-suite-download/)).
* [Catalogic DPX](https://www.catalogicsoftware.com/portfolio/proxmox/) - Integrates seamlessly with Proxmox Virtual Environment (VE). DPX vPlus enables agentless Proxmox backup and recovery.
* [Commvault Backup&Recovery](https://www.commvault.com/use-cases/backup-and-recovery) - Protects VMs hosted in Proxmox Virtual Environment ([docs](https://documentation.commvault.com/11.38/essential/backups_for_proxmox_vms.html)).
* [NAKIVO Backup & Replication](https://www.nakivo.com/proxmox-backup/) - Backup, replication, failover, cloud/tape backup, granular restore, and disaster recovery orchestration for virtual, physical, cloud, and SaaS environments ([trial](https://www.nakivo.com/resources/download/trial-download/), [docs](https://helpcenter.nakivo.com/User-Guide/Content/Home.htm)).
* [Proxmox Backup Server](https://proxmox.com/en/products/proxmox-backup-server/overview) - Enterprise backup solution for backing up and restoring VMs, containers, and physical hosts ([download](https://proxmox.com/en/downloads/proxmox-backup-server), [docs](https://pbs.proxmox.com/docs/installation.html)).
* [proxmox-backup](https://github.com/tis24dev/proxmox-backup) - Backup tool for Proxmox PBS & PVE System Files with advanced features and notifications.
* [ProxSave](https://proxsave.dev/) - Proxmox PBS & PVE system files backup. Save your entire environment and restore it at any time.
* [ProxSnap](https://github.com/gyptazy/ProxSnap) - Lightweight CLI tool for auditing and cleaning up snapshots across Proxmox VE clusters.
* [pve-bindsnap](https://github.com/bitranox/pve-bindsnap) - Snapshot LXC containers that have bind/device mounts, which stock Proxmox greys out, via a small AGPL overlay. Can also exclude specific volumes from a snapshot; works with the GUI, API, pct and cv4pve-autosnap.
* [SEP sesam for Proxmox Virtual Environment](https://www.sep.de/solutions/proxmox-hypervisor/) - Efficient data protection for virtual machines running on Proxmox VE.
* [Storware Backup&Recovery](https://storware.eu/solutions/virtual-machine-backup-and-recovery/proxmox-ve-backup-and-recovery/) - Comprehensive data protection for virtual machines, containers, and files on Proxmox VE.
* [Veeam Backup for Proxmox](https://www.veeam.com/blog/veeam-backup-for-proxmox.html) - Well-known Enterprise backup solution.
* [Vinchin Backup & Recovery](https://www.vinchin.com/proxmox-backup.html) - Secure data protection and disaster recovery for VMs, cloud instances, databases, Exchange, and unstructured data ([trial](https://www.vinchin.com/vinchin-software-documentation-downloads.html), [docs](https://helpcenter.vinchin.com/)).

## CLI & Community Tools

* [Proxmox Manager](https://github.com/TimInTech/proxmox-manager) - Single-file Bash tool for managing Proxmox VMs and containers.
* [Proxmox VE Helper-Scripts](https://github.com/community-scripts/ProxmoxVE) - Community-driven initiative that simplifies the setup of Proxmox Virtual Environment (VE).
* [Proxmox-Enhanced-Configuration-Utility (PECU)](https://github.com/Danilop95/Proxmox-Enhanced-Configuration-Utility) - Versatile Bash script to simplify and optimize configuration and management of Proxmox VE systems.
* [ProxMenux](https://github.com/MacRimi/ProxMenux) - Management tool for Proxmox VE that simplifies system administration through an interactive menu.
* [proxtagger](https://github.com/reginleif88/proxtagger) - Lightweight, open-source web interface to bulk manage Proxmox VM and container tags.
* [PVE-mods](https://github.com/Meliox/PVE-mods) - Small collection of scripts and mods for Proxmox Virtual Environment (PVE).
* [pvetui](https://github.com/devnullvoid/pvetui) - Terminal User Interface for Proxmox Virtual Environment.

## Cluster Tools

* [ProxCLMC](https://github.com/gyptazy/ProxCLMC) - Lightweight tool to determine the maximum CPU compatibility level supported across all nodes in a Proxmox VE cluster for live migration.
* [ProxLB](https://github.com/gyptazy/ProxLB) - Application to optimize the distribution of virtual machines across Proxmox cluster nodes for enhanced efficiency and performance.

## Desktop Apps

### macOS

* [ProxmoxBar](https://github.com/ryzenixx/proxmoxbar-macos) - Native macOS menu bar app for monitoring and controlling Proxmox VE resources.

## Documentation

* [10 Ways to Ruin Your Proxmox Setup - And How Not To](https://github.com/SwamiRama/10-ways-to-ruin-proxmox) - Book about 10 common mistakes and how to avoid them.
* [free-pmx](https://free-pmx.pages.dev/) - Insights and guides on Proxmox VE.
* [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) - Official Proxmox VE Documentation.
* [Proxmox VE Wiki](https://pve.proxmox.com/wiki/Main_Page) - Official Proxmox VE Wiki.
* [Thomas Krenn Proxmox Wiki](https://www.thomas-krenn.com/de/wiki/Kategorie:Proxmox) - Several articles and howtos related to Proxmox VE.

## Forums

* [Proxmox Support Forum](https://forum.proxmox.com/) - Proxmox Community Forum.
* [Reddit: Proxmox](https://www.reddit.com/r/Proxmox/) - Main subreddit regarding the Proxmox hypervisor.

## Guest Automation

* [osx-proxmox](https://github.com/lucid-fabrics/osx-proxmox-next) - One-command macOS VM automation for Proxmox 9 with TUI wizard, recovery image auto-download, and AMD/Intel CPU support for Sonoma, Sequoia, and Tahoe.
* [pve-microvm](https://github.com/rcarmo/pve-microvm) - Firecracker-like microVMs for Proxmox VE — KVM isolation, under 200ms boot.

## Infrastructure as Code

* [Ansible Module - Proxmox VE Cluster](https://docs.ansible.com/ansible/latest/collections/community/general/proxmox_module.html) - Management of instances in Proxmox VE cluster.
* [Cluster API Provider for Proxmox VE (CAPMOX)](https://github.com/ionos-cloud/cluster-api-provider-proxmox) - Kubernetes-style declarative APIs for cluster creation, configuration, and management on Proxmox VE.
* [packer-plugin-proxmox](https://github.com/natrontech/packer-plugin-proxmox) - Packer plugin for Proxmox Builder.
* [Proxmox-GitOps](https://github.com/stevius10/Proxmox-GitOps) - Self-contained GitOps environment for provisioning and orchestrating Linux Containers (LXC) on Proxmox VE.
* [Terraform Provider for Proxmox](https://github.com/bpg/terraform-provider-proxmox) - Terraform / OpenTofu provider which adds support for Proxmox solutions.

## Inventory

* [iTop CMDB: Data collector for Proxmox](https://www.itophub.io/wiki/page?id=extensions:combodo-proxmox-data-collector) - Synchronize Proxmox managed devices into iTop.
* [netbox Enterprise Proxmox VE Integration](https://netboxlabs.com/docs/integrations/platform-integrations/proxmox-ve/) - Synchronization of Proxmox Virtual Environment (Proxmox VE) infrastructure into NetBox.
* [netbox-proxbox](https://www.emersonfelipesp.com/netbox-proxbox) - Netbox Plugin for integration between Proxmox and Netbox.
* [Proxmox Virtual Environment CMDB importer](https://www.versio.io/en/import-proxmox-cmdb-configuration-item.html) - Import, historize and process virtualized infrastructure configuration items into Versio.io.

## Management

* [Convoy](https://convoypanel.com/) - Traditional server management platform for interacting with Proxmox-based virtual machines ([docs](https://convoypanel.com/docs/project/introduction.html)).
* [CV4PVE-ADMIN](https://corsinvest.it/cv4pve-admin-proxmox/) - The easiest and most effective solution to monitor your multiple Proxmox VE cluster in a single web portal.
* [MultiPortal](https://multiportal.io/) - One platform to deploy, manage, and scale environments effortlessly, cut the complexity boost efficiency, and take control of your infrastructure.
* [PegaProx](https://pegaprox.com/) - Powerful datacenter management UI for Proxmox VE environments. Unified multi-cluster control, intelligent load balancing, and seamless cross-cluster migrations – all in one beautiful interface.
* [ProxCenter](https://www.proxcenter.io/) - Modern web interface for monitoring, managing, and optimizing Proxmox VE infrastructure. Multi-cluster management, cross-hypervisor migration, workload balancing, and more — from a single pane of glass.
* [Proxmox Datacenter Manager](https://www.proxmox.com/en/downloads/proxmox-datacenter-manager) - Server management software to provide a unified overview of all nodes and clusters that Proxmox VE users have in their virtualized environments.
* [Tainer](https://tainer.sh/) - A cloud dashboard for Proxmox VE. Deploy, manage, and monitor LXC containers and VMs from anywhere — no ports to open. Free tier available.

## Migration

* [ProxMigrate](https://github.com/AthenaNetworks/ProxMigrate) - Powerful, user-friendly command-line tool for migrating virtual machines between Proxmox VE servers.

## Mobile Apps

### Android

* [Proxmox VE Android App](https://play.google.com/store/apps/details?id=com.proxmox.app.pve_flutter_frontend&hl=en) - Official native mobile app for managing Proxmox VE.
* [ProxMan](https://play.google.com/store/apps/details?id=com.windium.proxman&hl=en) - Lightweight Proxmox VE & Backup Server Management in Your Pocket.
* [ProxMate Backup for Proxmox](https://play.google.com/store/apps/details?id=com.itss.proxmatebackup&hl=en) - Get a quick and easy overview of your Proxmox Backup Server.
* [ProxMon - A Proxmox VE client](https://play.google.com/store/apps/details?id=dev.reimu.proxmon&pcampaignid=web_share) - View Proxmox nodes, storage pools, VMs, and containers' statuses.

### iOS

* [Proxmox VE Companion](https://apps.apple.com/de/app/proxmox-ve-companion/id6748314140) - Official native mobile app for managing Proxmox VE.
* [ProxMan](https://proxman.app) - Application designed for managing Proxmox VE virtualization infrastructure and Proxmox Backup Server environments.
* [ProxMate Backup](https://apps.apple.com/de/app/proxmate-backup/id6618157722) - Manage Proxmox Backup Servers.
* [ProxMate iOS](https://apps.apple.com/de/app/proxmate/id6470526961?platform=iphone) - Manage your Proxmox Server.
* [ProxMobo: Proxmox VE & PBS Management](https://proxmobo.app/) - Powerful monitoring and management app for Proxmox VE and Proxmox Backup Server.

## Monitoring

* [CheckMK](https://checkmk.com/blog/proxmox-monitoring) - Proxmox Monitoring: How to Do it Efficiently with Checkmk.
* [check_pve](https://github.com/nbuchwitz/check_pve) - Icinga check command for Proxmox VE via API.
* [LPAR2RRD](https://lpar2rrd.com/Proxmox-monitoring.php) - Server Performance Monitoring Tool - agentless monitoring, all data is gathered from Proxmox API.
* [Netdata](https://www.netdata.cloud/integrations/data-collection/containers-and-vms/proxmox-ve/) - Real-time monitoring for infrastructure ranging from IoT devices to hybrid cloud environments with Proxmox VE support.
* [PandoraFMS](https://pandorafms.com/blog/proxmox-ve-monitoring/) - Proxmox VE monitoring with Pandora FMS.
* [Prometheus Proxmox VE Exporter](https://github.com/prometheus-pve/prometheus-pve-exporter) - Exporter that exposes information gathered from Proxmox VE nodes for use by the Prometheus monitoring system.
* [Proxmox Atlas](https://proxmox-atlas.net/) - One dashboard. Every cluster. Real-time metrics, anomaly detection, and capacity planning.
* [Pulse](https://github.com/rcourtman/Pulse) - Real-time monitoring for Proxmox VE, Proxmox Mail Gateway, PBS, and Docker infrastructure with alerts and webhooks.
* [VictoriaMetrics](https://victoriametrics.com/blog/proxmox-monitoring-with-dbaas/) - The High-Performance, Open Source Time Series Database & Monitoring Solution.
* [Zabbix](https://www.zabbix.com/de/integrations/proxmox) - Template for monitoring Proxmox with Zabbix.

## Proxmox VE

* [Proxmox Virtual Environment](https://proxmox.com/en/products/proxmox-virtual-environment/overview) - Complete, open-source server management platform for enterprise virtualization. It tightly integrates the KVM hypervisor and Linux Containers (LXC), software-defined storage and networking functionality, on a single platform ([download](https://proxmox.com/en/downloads/proxmox-virtual-environment/iso), [docs](https://pve.proxmox.com/pve-docs/chapter-pve-installation.html), [forum](https://forum.proxmox.com/)).

## Reporting

* [cv4pve-report](https://github.com/Corsinvest/cv4pve-report) - Export Proxmox VE infrastructure to a navigable Excel, HTML or JSON report - like RVTools for Proxmox.
* [Proxmox Report Generator](https://github.com/AungThuMyint/ProxmoxReportGenerator) - Report PDF Generator For Your Proxmox Virtual Environment.

## Security

* [Proxmox Hardening Guide](https://github.com/HomeSecExplorer/Proxmox-Hardening-Guide) - Security hardening guides for PVE and PBS, built on CIS Debian Benchmark with Proxmox specific best practices.
* [proxmox-ftagent](https://github.com/Flowtriq/proxmox-ftagent) - One-command LXC deployment of the Flowtriq DDoS detection agent on Proxmox VE, with automatic dependency and systemd service setup.
* [Proxmox VE Security Advisories](https://forum.proxmox.com/threads/proxmox-virtual-environment-security-advisories.149331/) - List of security advisories since 2024-01-01 for the Proxmox Virtual Environment.
* [Proxmox VE Security Reporting](https://pve.proxmox.com/wiki/Security_Reporting) - How to report security issues to the Proxmox security team.

## Storage

* [Dell PowerStore: Deploying Proxmox Virtual Environment](https://infohub.delltechnologies.com/en-us/t/dell-powerstore-deploying-proxmox-virtual-environment-white-paper/) - White paper on deploying and configuring Proxmox Virtual Environment on Dell PowerStore with shared storage.
* [Everpure: Technology Integrations - Proxmox](https://support.everpuredata.com/access?dita:id=m_proxmox) - Guidance on how to leverage Everpure FlashArray with iSCSI, FC or NFS.
* [Setting Up Highly Available Storage for Proxmox Using LINSTOR](https://linbit.com/blog/setting-up-highly-available-storage-for-proxmox-using-linstor-the-linbit-gui/) - Guide to DRBD-based highly available storage for Proxmox using LINSTOR and the LINBIT GUI.
* [Netapp: Proxmox VE with ONTAP](https://docs.netapp.com/us-en/netapp-solutions/proxmox/proxmox-ontap.html) - Netapp ONTAP storage can serve the needs of Proxmox VE host environments as well as for guest file, block and object storage demands.
* [Proxmox VE Plugin for HPE Nimble Storage (iSCSI)](https://github.com/brngates98/pve-nimble-plugin) - Integration of HPE Nimble Storage arrays with Proxmox Virtual Environment (VE) over iSCSI. It uses the Nimble REST API to create and manage volumes and presents them as VM disks with optional multipath.
* [Proxmox VE Plugin for Pure Storage as Multipath iSCSI Source](https://github.com/kolesa-team/pve-purestorage-plugin) - Integration of Pure Storage arrays with Proxmox Virtual Environment (VE) using multipath iSCSI or Fibre Channel (FC).
* [StorPool Storage Powering Proxmox Virtual Environments](https://storpool.com/proxmox-virtual-environment) - Ultra-Fast, Reliable, and Scalable Block Storage as a Service for Proxmox Environments.
* [TrueNAS Proxmox VE Storage Plugin](https://github.com/WarlockSyno/TrueNAS-Proxmox-VE-Storage-Plugin) - High-performance storage plugin for Proxmox VE that integrates TrueNAS SCALE via iSCSI, featuring live snapshots, ZFS integration, and cluster compatibility.

## VDI

* [Kasm Workspaces](https://docs.kasm.com/docs/latest/how-to/autoscale/autoscale_providers/proxmox) - Configuring autoscaling for Kasm Workspaces on Proxmox.
* [PVE-VDIClient](https://github.com/joshpatten/PVE-VDIClient) - Proxmox based VDI client.

## VPS control panels

* [Proxmox VE VPS For WHMCS](https://www.modulesgarden.com/products/whmcs/proxmox-ve-vps) - High-powered module that automates every step of the virtual server provisioning process, from initial setup to ongoing management.
* [SolusVM](https://solusvm.com/) - Virtual infrastructure management solution to facilitate choice, simplicity, and performance for ISPs and enterprises.
* [Virtualizor](https://www.virtualizor.com/) - Web based VPS Control Panel to deploy and manage VPS on servers with a single click. Supports KVM, Xen, OpenVZ, Proxmox, Virtuozzo, LXC, and more ([docs](https://www.virtualizor.com/docs/)).

## Contributing

Contributing guidelines can be found [here](https://github.com/alexgoesgit/awesome-proxmox-ve-virtualization/blob/main/contributing.md).
