---
title: "Campsis Suite"
summary: "Open-source R package suite for PK/PD simulation, Non-Compartmental Analysis (NCA), advanced post-processing, and clinical trial simulation."
date: "2026-11-03"
draft: false
tags:
  - R
  - JSON
  - Simulation
  - Open-source
repoUrl: "https://github.com/campsisverse"
demoUrl: "https://campsisverse.github.io/"
---

The **Campsis** ecosystem is an open-source suite of R packages designed to streamline Pharmacokinetic and Pharmacodynamic (PK/PD) simulation workflows.

#### Key Packages in the Suite

- **[campsis](https://github.com/campsisverse/campsis):** Core simulation engine wrapper using S4 object-oriented design and *tidyverse* principles.
- **[campsismod](https://github.com/campsisverse/campsismod):** Structural PK/PD model definition and manipulation framework.
- **[campsisnca](https://github.com/campsisverse/campsisnca):** Automated Non-Compartmental Analysis integration and reporting.
- **[campsismisc](https://github.com/campsisverse/campsismisc):** Forest plots, post-processing utilities, and sensitivity analyses (tornado plots).
- **[campsisqual](https://github.com/campsisverse/campsisqual):** Qualification engine that runs standardized test suites and generates qualification reports.
- **[campsistrans](https://github.com/campsisverse/campsistrans):** Model importer from external formats (NONMEM, Monolix, nlmixr2/rxode2).
- **[campsisverse](https://github.com/campsisverse/campsisverse):** Package manager and meta-package for installing and maintaining locked, specific versions of the Campsis suite.

#### Architecture & Quality Highlights

- **Quality Assurance & Qualification:** The `campsisqual` package enables rigorous qualification of the suite in your execution environment by running automated tests and issuing formal qualification reports for compliance.
- **Version Control & Reproducibility:** The `campsisverse` meta-package allows teams to install specific, version-locked releases of the entire suite to ensure complete reproducibility across environments and over time.
- **Language-Agnostic JSON API:** Native JSON serialization enables external languages (Python, web backends, and AI agent workflows) to interact directly with the Campsis simulation engine.
- **Backend Compatibility:** Seamlessly delegates core ODE solving to proven engines like `mrgsolve` and `rxode2`.
- **Pipeline Integration:** Built to integrate cleanly with the R `targets` pipeline manager for regulatory submission and clinical trial simulations.