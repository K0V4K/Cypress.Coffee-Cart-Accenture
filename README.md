<div align="center">

  <img src="https://www.cypress.io/_astro/cypress-logo.D87396b0.svg" alt="Cypress Logo" width="450" style="display: block; margin-bottom: 20px;">

## CoffeeCart E2E Automation <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" width="40" style="vertical-align: middle; margin-left: 8px;">

  <h3>
    Accenture <img src="https://www.accenture.com/favicon.ico" width="16" style="vertical-align: middle; margin: 0 5px 4px 5px;"> Academy QE 2026
  </h3>

  <br>

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen?style=for-the-badge&logo=github)](https://github.com/K0V4K/Coffee-Cart-Accenture)
[![Node](https://img.shields.io/badge/node.js-20-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Cypress](https://img.shields.io/badge/cypress-13.6-darkblue?style=for-the-badge&logo=cypress)](https://www.cypress.io/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%20Flash-blue?style=for-the-badge&logo=googlebard)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <p align="center">
    <i>Automação de testes "God Tier" (UI + API) desenvolvida com Cypress, Cucumber BDD e Diagnóstico por IA.</i>
  </p>

</div>

---

## Arquitetura do Projeto

O projeto segue estritamente o padrão **Page Object Model (POM)** combinado com **BDD**, garantindo a separação entre a regra de negócio (Gherkin), a interação com elementos (Pages) e a inteligência de relatórios (IA).

```text
cypress
├── e2e
│   └── features
│       ├── api_health.feature   <- Smoke Test (Backend/API)
│       └── comprar_cafe.feature <- Fluxo Crítico de Negócio (E2E)
├── reports
│   └── html-report              <- Relatório Gerado com IA Injetada
├── support
│   ├── pages
│   │   ├── HomePage.js          <- Interações da Vitrine
│   │   └── CartPage.js          <- Interações do Carrinho/Checkout
│   └── step_definitions         <- A "Cola" entre Gherkin e JS
├── ai-analyst.js                <- Agente de IA (Gemini Flash)
└── cypress.config.js            <- Configurações Globais

```


# Automation | Cypress + AI

Este projeto transcende a automação tradicional ao integrar um Agente de IA (Google Gemini). Além de cobrir fluxos críticos de compra e saúde da API, o sistema intercepta falhas, analisa o erro técnico e injeta uma solução recomendada diretamente no relatório final.

## API utilizada

* *Bookstore demoqa swagger UI:* Plataforma REST para simulação de fluxos de livraria e validação de contratos de API.*

---

## Aplicação Alvo

* **Coffee Cart App: E-commerce simulado para validação de fluxos de carrinho, promoções e checkout.
* 
---
