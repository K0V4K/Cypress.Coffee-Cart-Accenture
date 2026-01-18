import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que o sistema possui o endpoint {string}", (endpoint) => {
    cy.wrap(endpoint).as('endpoint');
});

When("uma requisição {string} é enviada", (method) => {
    cy.get('@endpoint').then((endpoint) => {
        cy.request({
            method: method,
            url: endpoint,
            failOnStatusCode: false
        }).then((res) => {
            response = res;
        });
    });
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
    expect(response.status).to.eq(statusCode);
});

Then("o formato da resposta deve ser {string}", (contentType) => {
    expect(response.headers['content-type']).to.include(contentType);
});

Then("a lista de produtos não deve estar vazia", () => {
    expect(response.body).to.not.be.empty;
});

Then("o produto {string} deve estar presente na lista", (productName) => {
    const item = response.body.find(i => i.name === productName);
    expect(item).to.exist;
});