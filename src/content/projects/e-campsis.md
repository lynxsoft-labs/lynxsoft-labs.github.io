---
title: "e-Campsis Platform"
summary: "Interactive simulation application combining Shiny for Python with an R Plumber API backend via JSON."
date: "2025-06-01"
draft: false
tags:
- Python
- R
- JSON
- Simulation
demoUrl: "https://www.e-campsis.com/"
repoUrl: "https://calvagone.github.io/ecampsis.doc/"
---

**e-Campsis** is a standalone web and desktop platform designed to provide a modern, interactive GUI for constructing, visualizing, and running complex PK/PD simulations without writing raw code.

#### Technical Stack & Design

- **Frontend UI:** Built with **Shiny for Python** for a responsive, reactive user interface.
- **Backend API:** Powered by an **R Plumber API** running the Campsis simulation engine.
- **Interoperability:** Uses a language-agnostic **JSON payload specification** for full bidirectional communication between Python and R.
- **Packaging:** Distributed as standalone executables for easy deployment across client workstations.