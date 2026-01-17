<div align="center">

  <img src="https://www.cypress.io/_astro/cypress-logo.D87396b0.svg" alt="Cypress Logo" width="450" style="display: block; margin-bottom: 20px;">

## CoffeeCart E2E Automation <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" width="40" style="vertical-align: middle; margin-left: 8px;">

  <h3>
    Accenture <img src="https://www.accenture.com/favicon.ico" width="16" style="vertical-align: middle; margin: 0 5px 4px 5px;"> Academy QE 2026
  </h3>

  <br>

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen?style=for-the-badge&logo=github)](https://github.com/K0V4K/Coffee-Cart-Accenture)
[![Node](https://img.shields.io/badge/node.js-22-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Cypress](https://img.shields.io/badge/cypress-15.9-darkblue?style=for-the-badge&logo=cypress)](https://www.cypress.io/)
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

## Aplicação Alvo

* *Coffee Cart App: E-commerce simulado para validação de fluxos de carrinho, promoções e checkout.*

---

## Aplicação Alvo

* *Node.js (v22.19.0): Ambiente de execução bundled.*
* *Cypress (15.9.0): Framework de automação "Next Gen" para testes modernos.*
* *Cucumber Preprocessor (v24.0.0): Permite a escrita de testes em linguagem natural (Gherkin)..*
* *Google Generative AI SDK: Integração com o modelo Gemini Flash-Latest para análise de erros.*
* *Multiple Cucumber HTML Report: Geração de relatórios ricos e gráficos.*
* *GitHub Actions: Pipeline de CI/CD configurado como "Vigia Noturno" (Execução diária).*
---
## Ambiente de Desenvolvimento & Plugins
* **IDE**: [VScode](https://code.visualstudio.com/).
* **Plugins**:
* **Cucumber (Gherkin) Full Support: Para syntax highlight e navegação entre steps.*
* *ESLint: Para garantir a qualidade e padronização do código JS.*
* **Material Icon Theme: Para melhor visualização da estrutura de pastas.*
---
## Aplicação Alvo

* *Node.js (v22.19.0): Ambiente de execução bundled.*
* *Cypress (15.9.0): Framework de automação "Next Gen" para testes modernos.*
* *Cucumber Preprocessor (v24.0.0): Permite a escrita de testes em linguagem natural (Gherkin)..*
* *Google Generative AI SDK: Integração com o modelo Gemini Flash-Latest para análise de erros.*
* *Multiple Cucumber HTML Report: Geração de relatórios ricos e gráficos.*
* *GitHub Actions: Pipeline de CI/CD configurado como "Vigia Noturno" (Execução diária).*
---


## 🛠️ Tech Stack & Arquitetura

Este projeto foi construído sobre uma fundação robusta de tecnologias modernas, selecionadas para garantir performance, escalabilidade e inteligência.

### 🔹 Core & Engine
* **[Node.js](https://nodejs.org/)** (v22.19.0): Runtime JavaScript fundamental para execução do ambiente.
* **[Cypress](https://www.cypress.io/)** (v15.9.0): Framework de testes "Next Gen", responsável pela interação direta com o navegador e asserções.

### 🔹 BDD & Performance
* **[Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)** (v24.0.0): Habilita a escrita de testes em Gherkin, servindo como ponte entre requisitos de negócio e código.
* **[Esbuild](https://esbuild.github.io/)** (v2.2.0): Bundler e preprocessor de alta performance, reduzindo drasticamente o tempo de transpilação dos arquivos `.feature`.

### 🔹 Utilities & Data
* **[Faker.js](https://fakerjs.dev/)** (v8.4.0): Biblioteca utilizada para gerar massa de dados dinâmica e realista (User Data, PII) em tempo de execução.
* **[Dotenv](https://github.com/motdotla/dotenv)** (v16.4.0): Gerenciamento de segurança, garantindo que chaves de API (Gemini) e credenciais não sejam expostas no código fonte.

### 🔹 AI Intelligence & Reporting
* **[Google Generative AI SDK](https://ai.google.dev/)** (v0.24.1): Integração com o LLM **Gemini 1.5 Flash** para análise automática de falhas e sugestão de correções.
* **[Multiple Cucumber HTML Reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter)** (v3.6.0): Transformação dos dados de teste em dashboards visuais ricos com métricas de execução.
