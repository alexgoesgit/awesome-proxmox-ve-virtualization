# List of awesome Proxmox VE tools

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A list of Proxmox VE related software, tools and documentation. This project is not affiliated with Proxmox.

# Contents

* [Proxmox VE](#proxmox-ve)
* [Management](#management)
* [VPS control panels](#vps-control-panels)
* [Monitoring](#monitoring)
* [Backup Tools](#backup-tools)
* [Storage](#storage)
* [API](#api)
* [Other Tools](#other-tools)
* [Mobile Apps](#mobile-apps)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [License](#license)
  
# Proxmox VE

- [Proxmox Virtual Environment](https://proxmox.com/en/products/proxmox-virtual-environment/overview) - Complete, open-source server management platform for enterprise virtualization. It tightly integrates the KVM hypervisor and Linux Containers (LXC), software-defined storage and networking functionality, on a single platform. [[download](https://proxmox.com/en/downloads/proxmox-virtual-environment/iso), [docs](https://pve.proxmox.com/pve-docs/chapter-pve-installation.html), [forum](https://forum.proxmox.com/)]

# Management

- [Convoy](https://convoypanel.com/) - Traditional server management platform for interacting with Proxmox-based virtual machines. [[docs](https://convoypanel.com/docs/project/introduction.html)]
- [CV4PVE-ADMIN](https://corsinvest.it/cv4pve-admin-proxmox/) - The easiest and most effective solution to monitor your multiple Proxmox VE cluster in a single web portal.
- [MultiPortal](https://multiportal.io/) - One platform to deploy, manage, and scale environments effortlessly, cut the complexity boost efficiency, and take control of your infrastructure.
- [Proxmox Datacenter Manager](https://forum.proxmox.com/threads/proxmox-datacenter-manager-first-alpha-release.159323/) - Server management software to provide a unified overview of all nodes and clusters that Proxmox VE users have in their virtualized environments. [[forum](https://forum.proxmox.com/threads/proxmox-datacenter-manager-first-alpha-release.159323/)] *Alpha-Release*

# VPS control panels
- [Proxmox VE VPS For WHMCS](https://www.modulesgarden.com/products/whmcs/proxmox-ve-vps) - High-powered module that automates every step of the virtual server provisioning process, from initial setup to ongoing management.
- [SolusVM](https://solusvm.com/) - Virtual infrastructure management solution to facilitate choice, simplicity, and performance for ISPs and enterprises. 
- [Virtualizor](https://www.virtualizor.com/) - Web based VPS Control Panel which a user can deploy and manage VPS on servers with a single click. Virtualizor supports KVM, Xen, OpenVZ, Proxmox, Virtuozzo, LXC, etc with an inbuilt hourly billing system. [[docs](https://www.virtualizor.com/docs/)]

# Monitoring

- [CheckMK](https://checkmk.com/blog/proxmox-monitoring) - Proxmox Monitoring: How to Do it Efficiently with Checkmk.
- [LPAR2RRD](https://lpar2rrd.com/Proxmox-monitoring.php) - Server Performance Monitoring Tool - agentless monitoring, all data is gathered from Proxmox API.
- [Netdata](https://www.netdata.cloud/integrations/data-collection/containers-and-vms/proxmox-ve/) - Netdata can be used to monitor all kinds of infrastructure, from tiny stand-alone IoT devices to complex hybrid setups combining on-premise and cloud infrastructure, mixing bare-metal servers, virtual machines and containers.
- [PandoraFMS](https://pandorafms.com/blog/proxmox-ve-monitoring/) - Proxmox VE monitoring with Pandora FMS.
- [Prometheus Proxmox VE Exporter](https://github.com/prometheus-pve/prometheus-pve-exporter) - This is an exporter that exposes information gathered from Proxmox VE node for use by the Prometheus monitoring system.
- [VictoriaMetrics](https://victoriametrics.com/blog/proxmox-monitoring-with-dbaas/) - The High-Performance, Open Source Time Series Database & Monitoring Solution.
- [Zabbix](https://www.zabbix.com/de/integrations/proxmox) - Template for monitoring Proxmox with Zabbix.

# Backup Tools

- [BACKUP EAGLE](https://www.backup-eagle.com/product/proxmox) - Backup Monitoring and Reporting. Centralised view of backups, backup system health and backup storage for on-prem and cloud backups.
- [Bacula Enterprise](https://www.baculasystems.com/corporate-data-backup-software-solutions/bacula-enterprise-data-backup-software/features/) - Bacula Enterprise is a subscription-based enterprise data backup solution. The Proxmox-Plugin is designed to work seamlessly with the latest releases of Proxmox VE.
- [BDRSuite](https://www.bdrsuite.com/proxmox-backup/) - Comprehensive Backup and Disaster Recovery solution for virtual, physical, cloud, and SaaS applications. Agentless Backup and Recovery for Proxmox Virtual Machines. [[docs](https://www.bdrsuite.com/technical-documents/)] [[download](https://www.bdrsuite.com/vembu-bdr-suite-download/)]
- [Catalogic DPX](https://www.catalogicsoftware.com/portfolio/proxmox/) - Integrates seamlessly with Proxmox Virtual Environment (VE). DPX vPlus enables agentless Proxmox backup and recovery.
- [Commvault Backup&Recovery](https://www.commvault.com/use-cases/backup-and-recovery) - Protects VMs that are hosted in the Proxmox Virtual Environment [[docs](https://documentation.commvault.com/11.38/essential/backups_for_proxmox_vms.html)]
- [NAKIVO Backup & Replication](https://www.nakivo.com/proxmox-backup/) - Offers backup, replication, failover, backup to cloud, backup to tape, backup copy, backup data reduction, instant verification, granular restore and disaster recovery orchestration for virtual, physical, cloud and SaaS environments. [[trial](https://www.nakivo.com/resources/download/trial-download/), [docs](https://helpcenter.nakivo.com/User-Guide/Content/Home.htm)]
- [Proxmox Backup Server](https://proxmox.com/en/products/proxmox-backup-server/overview) - Enterprise backup solution, for backing up and restoring VMs, containers, and physical hosts. [[download](https://proxmox.com/en/downloads/proxmox-backup-server), [docs](https://pbs.proxmox.com/docs/installation.html)]
- [SEP sesam for Proxmox Virtual Environment](https://www.sep.de/solutions/proxmox-hypervisor/) - SEP sesam provides efficient data protection for virtual machines (VMs) running on Proxmox VE
- [Storware Backup&Recovery](https://storware.eu/solutions/virtual-machine-backup-and-recovery/proxmox-ve-backup-and-recovery/) - Storware Backup and Recovery for Proxmox VE provides comprehensive data protection for virtual machines, containers, and files.
- [Veeam Backup for Proxmox](https://www.veeam.com/blog/veeam-backup-for-proxmox.html) - Well-known Enterprise backup solution.
- [Vinchin Backup & Recovery](https://www.vinchin.com/proxmox-backup.html) - Ease-of-use, secure and reliable data protection and disaster recovery solution designed to support protecting virtual machines (VM), cloud instances, databases, Exchange (on-premise and online) and unstructured data (file server and NAS server). [[trial](https://www.vinchin.com/vinchin-software-documentation-downloads.html), [docs](https://helpcenter.vinchin.com/)]

# Storage

- [Netapp: Proxmox VE with ONTAP](https://docs.netapp.com/us-en/netapp-solutions/proxmox/proxmox-ontap.html) - Netapp ONTAP storage can serve the needs of Proxmox VE host environments as well as for guest file, block and object storage demands.
- [Proxmox VE Plugin for Pure Storage as Multipath iSCSI Source](https://github.com/kolesa-team/pve-purestorage-plugin) - Integration of Pure Storage arrays with Proxmox Virtual Environment (VE) using multipath iSCSI or Fibre Channel (FC).

# API

- [Proxmox API documentation](https://pve.proxmox.com/pve-docs/api-viewer/index.html) - Explore the official API documentation.
- Go
  - [Proxmox API Go](https://github.com/Telmate/proxmox-api-go) - Proxmox API in golang. For /api2/json.
- Java
  - [Proxmox VE Client API Java](https://github.com/Corsinvest/cv4pve-api-java) - Java API client Libraries.
- Perl
  - [Proxmox Perl API client](https://git.proxmox.com/?p=pve-apiclient.git;a=summary) - Official Proxmox Maintained Perl API.
- Powershell
  - [PowerShell for Proxmox VE](https://www.powershellgallery.com/packages/Corsinvest.ProxmoxVE.Api/) - CmdLet for PowerShell to manage Proxmox VE.
- Python
  - [proxmoxer](https://pypi.org/project/proxmoxer) - Proxmoxer is a python wrapper around the Proxmox REST API v2.

# Documentation

- [Thomas Krenn Proxmox Wiki](https://www.thomas-krenn.com/de/wiki/Kategorie:Proxmox) - Several articles and howtos related to Proxmox VE.
- [Promxox VE Wiki](https://pve.proxmox.com/wiki/Main_Page) - Official Proxmox VE Wiki.
- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) - Official Proxmox VE Documentation.
  
# Other Tools

- [Ansible Module - Proxmox VE Cluster](https://docs.ansible.com/ansible/latest/collections/community/general/proxmox_module.html) - Management of instances in Proxmox VE cluster.
- [Cluster API Provider for Proxmox VE (CAPMOX)](https://github.com/ionos-cloud/cluster-api-provider-proxmox) - The Cluster API brings declarative, Kubernetes-style APIs to cluster creation, configuration and management. Cluster API Provider for Proxmox VE is a concrete implementation of Cluster API for Proxmox VE.
- [LXC AutoScale](https://github.com/fabriziosalmi/proxmox-lxc-autoscale) - Resource management daemon specifically designed for Proxmox environments. It automatically adjusts CPU and memory allocations with no downtime and can clone LXC containers based on real-time usage metrics and predefined thresholds.
- [Proxmox VM Autoscale](https://github.com/fabriziosalmi/proxmox-vm-autoscale) - Service that dynamically adjusts your Proxmox virtual machine (VM) resources (CPU cores, RAM) based on real-time metrics and user-defined thresholds.
- [ProxLB](https://github.com/gyptazy/ProxLB) - Application created to optimize the distribution of virtual machines (VMs) across Proxmox cluster nodes for significantly enhancing efficiency and performance.
- [Proxmox VE Helper-Scripts](https://github.com/community-scripts/ProxmoxVE) - Community-driven initiative that simplifies the setup of Proxmox Virtual Environment (VE).
- [PVE-mods](https://github.com/Meliox/PVE-mods) - A small collection of scripts and mods for Proxmox Virtual Environment (PVE).
- [Terraform Provider for Proxmox](https://github.com/bpg/terraform-provider-proxmox) - A Terraform / OpenTofu Provider which adds support for Proxmox solutions.

# Mobile Apps

## Android
- [Proxmox VE Android App](https://play.google.com/store/apps/details?id=com.proxmox.app.pve_flutter_frontend&pcampaignid=web_share) - Manage virtual machines, containers, hosts, and clusters. 
- [ProxMon - A Proxmox VE client](https://play.google.com/store/apps/details?id=dev.reimu.proxmon&pcampaignid=web_share) -  View Proxmox nodes, storage pools, VMs, and containers' statuses.
  
## iOS
- [ProxMate iOS](https://apps.apple.com/de/app/proxmate/id6470526961?platform=iphone) - Manage your Proxmox Server.
- [ProxMobo: Proxmox VE & PBS Management](https://proxmobo.app/) - Powerful monitoring and management app for Proxmox VE and Proxmox Backup Server.
- [ProxMate Backup](https://apps.apple.com/de/app/proxmate-backup/id6618157722) - Manage Proxmox Backup Servers.

# Contributing

Contributing guidelines can be found [here](https://github.com/alexgoesgit/awesome-proxmox-ve-virtualization/blob/main/contributing.md).

# License

This list is under the Creative Commons Attribution-ShareAlike 1.0 Generic License.
Terms of the license are summarized [https://creativecommons.org/licenses/by-sa/1.0/](https://creativecommons.org/licenses/by-sa/1.0/).
