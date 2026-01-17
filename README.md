<div align="center">

  <img src="https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png" alt="Cypress Logo" width="400" style="display: block; margin-bottom: 20px;">

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

* *WEB [CoffeCart](https://coffee-cart.app/): E-commerce simulado para validação de fluxos de carrinho, promoções e checkout.*

---

## Ambiente de Desenvolvimento & Plugins

* *IDE [VScode](https://code.visualstudio.com/)*
* *Cucumber (Gherkin) Full Support: Para syntax highlight e navegação entre steps.*
* *ESLint: Para garantir a qualidade e padronização do código JS*
* *Material Icon Theme: Para melhor visualização da estrutura de pastas.*
* *Multiple Cucumber HTML Report: Geração de relatórios ricos e gráficos.*
---

## Tech Stack & Arquitetura

Este projeto foi construído sobre uma fundação robusta de tecnologias modernas, selecionadas para garantir performance, escalabilidade e inteligência.

### Core & Engine
* **[Node.js](https://nodejs.org/)** (v22.19.0): Runtime JavaScript fundamental para execução do ambiente.
* **[Cypress](https://www.cypress.io/)** (v15.9.0): Framework de testes "Next Gen", responsável pela interação direta com o navegador e asserções.

### BDD & Performance
* **[Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)** (v24.0.0): Habilita a escrita de testes em Gherkin, servindo como ponte entre requisitos de negócio e código.
* **[Esbuild](https://esbuild.github.io/)** (v2.2.0): Bundler e preprocessor de alta performance, reduzindo drasticamente o tempo de transpilação dos arquivos `.feature`.

### Utilities & Data
* **[Faker.js](https://fakerjs.dev/)** (v8.4.0): Biblioteca utilizada para gerar massa de dados dinâmica e realista (User Data, PII) em tempo de execução.
* **[Dotenv](https://github.com/motdotla/dotenv)** (v16.4.0): Gerenciamento de segurança, garantindo que chaves de API (Gemini) e credenciais não sejam expostas no código fonte.

### AI Intelligence & Reporting
* **[Google Generative AI SDK](https://ai.google.dev/)** (v0.24.1): Integração com o LLM **Gemini 1.5 Flash** para análise automática de falhas e sugestão de correções.
* **[Multiple Cucumber HTML Reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter)** (v3.6.0): Transformação dos dados de teste em dashboards visuais ricos com métricas de execução.

### CI/CD & Orchestration
* **[GitHub Actions](https://github.com/features/actions)**: Pipeline de integração contínua configurado como "Vigia Noturno". Executa a bateria de testes automaticamente todos os dias às 06:00 UTC (Nightly Build) para garantir a estabilidade contínua do projeto.
---
# Automation | Cypress + AI

O projeto entrega 100% dos requisitos do desafio, somados a diferenciais de arquitetura avançada:

## Backend Health Check (api_health.feature)
* *Validação de Contrato: Verifica se o endpoint /list.json retorna status 200 e formato JSON.*
* *Validação de Conteúdo: Garante que produtos essenciais ("Espresso") estejam presentes na resposta da API antes de iniciar os testes de UI.*
* *Tagging: Uso de @api e @smoke para execuções rápidas.*
---
## Fluxo de Compra E2E (comprar_cafe.feature)
* *Page Object Model (POM): Classes HomePage e CartPage encapsulam seletores e métodos, facilitando a manutenção.*
* *Seletores Resilientes: Prioridade absoluta para data-test e data-cy, evitando quebras por mudanças de CSS.*
* *Zero cy.wait Fixo: Utilização de cy.intercept para aguardar requisições reais de rede, tornando o teste mais rápido e confiável.*
* *Massa Dinâmica: Uso do Faker.js para preencher formulários com dados únicos a cada execução.*
---
## O Grande Diferencial: Agente de IA (ai-analyst.js)
* *Auto-Diagnóstico: Se um teste falha, o script:*
* *Lê o erro técnico do JSON.*
* *Consulta a API do Google Gemini.*
* *Recebe a causa raiz e a solução técnica.*
* *Injeta essa consultoria no relatório HTML com print e dicas de correção*
---
Limpeza Inteligente: Mecanismos anti-duplicação garantem que a análise da IA não polua o relatório em execuções sucessivas.

## Decisões Técnicas
* *Hybrid Testing: Combinamos validação de API (rápida) com validação de UI (visual) no mesmo pipeline para garantir a saúde total da aplicação.*
* *Bundling com Esbuild: Substituição do bundler padrão do Cypress pelo Esbuild para reduzir drasticamente o tempo de pré-processamento dos arquivos .feature.*
* *Zero cy.wait Fixo: Utilização de cy.intercept para aguardar requisições reais de rede, tornando o teste mais rápido e confiável.*
* *Custom Commands: Implementação de cy.getDataCy() e cy.stepInfo() para abstrair complexidade e melhorar os logs do Cypress Runner.*


## Como Executar o Projeto: Pré-requisitos
* *Node.js instalado.*
* *Arquivo .env configurado com GEMINI_API_KEY*


### Execução Completa (Testes + Relatório + Ping + IA)
```bash

npm run test:god-tier

```

### Abrir Interface Visual (Cypress Open)
```bash

npm run cy:open

```
### Apenas Rodar os Testes (Headless)
```bash

npm run cy:run

```
### Apenas Gerar Relatório HTML e Ver Ping
```bash

npm run report

```



<div align="center"> <img src="docs/ai-analysis.png" alt="Relatório com IA" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);"> <p><i>Diagnóstico automático do Gemini injetado diretamente no erro do teste.</i></p> </div>

<div align="center"> <img src="docs/dashboard.png" alt="Dashboard Geral" width="100%" style="border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);"> <p><i>Dashboard customizado com métricas de API Latency.</i></p> </div>

<div align="center">

"Quality is not an act, it is a habit."

<p> Made with 💻 & ☕ by <b>Valter Pereira da Silva Filho</b>


<b>Accenture Academy QE 2026</b> </p>

<a href="https://www.linkedin.com/in/valterpereirafilho/" target="_blank"> <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"> </a> <a href="https://github.com/K0V4K" target="_blank"> <img src="https://www.google.com/search?q=https://img.shields.io/badge/-GitHub-181717%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26logoColor%3Dwhite" alt="GitHub"> </a>

</div>
