---
title: "Campsis Suite"
summary: "Open-source R package suite for PK/PD modeling, Non-Compartmental Analysis (NCA), and clinical trial simulation."
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

The **Campsis** ecosystem is an open-source suite of R packages designed to streamline Pharmacokinetic and Pharmacodynamic (PK/PD) modeling and simulation workflows.

#### Key Packages in the Suite

- **campsis:** Core simulation engine wrapper using S4 object-oriented design and *tidyverse* principles.
- **campsismod:** Structural PK/PD model definition and manipulation framework.
- **campsisnca:** Automated Non-Compartmental Analysis integration.
- **campsismisc:** Utility functions and post-processing helpers.

#### Architecture Highlights

- **Language-Agnostic JSON API:** Native JSON serialization enables external languages (Python, web backends, and AI agent workflows) to interact directly with the Campsis simulation engine.
- **Backend Compatibility:** Seamlessly delegates core ODE solving to proven engines like `mrgsolve` and `rxode2`.
- **Reproducible Workflows:** Built to integrate cleanly with the R `targets` pipeline manager for regulatory and clinical trial simulations.

---