---
company: "Calvagone (via Lynxsoft SRL)"
role: "Senior Pharmacometrics Developer & IT Consultant"
dateStart: "2021-01-01"
dateEnd: "2026-10-29"
---

Independent consulting engagement delivering specialized software engineering, open-source tool development, and IT architecture in modelling and simulation.

#### Key Highlights & Technical Achievements

- **Campsis Suite Architecture:** Lead developer and architect of the open-source **Campsis** suite (*campsis*, *campsismod*, *campsisnca*, *campsismisc*) built using S4 object-oriented R design and *tidyverse* standards for PK/PD modeling and clinical trial simulation.
- **Interoperability & JSON Interface:** Engineered a language-agnostic JSON interface allowing external Python backends, desktop GUIs, and AI workflows to exchange structured simulation configurations seamlessly with the R engine.
- **e-Campsis Application:** Built a standalone application platform combining a **Shiny for Python** front-end with an R **Plumber** API backend communicating over JSON to configure, execute, and visualize complex simulations.
- **Tacrolimus MIPD & In-Silico Trial Simulations:** Reused and extended the open-source [tdmore](https://github.com/Calvagone/tdmore) platform to evaluate novel Model Predictive Control (MPC) techniques for tacrolimus dosing in lung, heart, and bone marrow transplantation. Executed *in-silico* clinical trial simulations driven by retrospective patient data to benchmark MPC against standard of care (*Transplantation*; DOI: [10.1097/01.tp.0001251300.05695.75](https://www.ovid.com/jnls/transplantjournal/pdf/10.1097/01.tp.0001251300.05695.75~3845-building-model-informed-precision-dosing-platforms-for)).
- **MIPD Application Development:** Developed the software platform for Model-Informed Precision Dosing (MIPD) to optimize factor IX (rFIX-FP) administration in hemophilia B surgical patients, supporting published clinical PK research (*Haemophilia*, 2026; PMID: [42227215](https://pubmed.ncbi.nlm.nih.gov/42227215/)).
- **Workflow Automation:** Migrated legacy simulation pipelines for pharmaceutical clients and established standardized, reproducible post-processing workflows using the R `targets` package.
- **Engine Integrations:** Maintained compatibility with core PK/PD simulation engines (*mrgsolve*, *rxode2*), automated Non-Compartmental Analysis (NCA), and reporting integrations (*gtsummary*, *gt*).