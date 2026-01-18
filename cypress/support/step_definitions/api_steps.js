import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiEndpoint;
let apiResponse;

Given("que eu tenho o endpoint {string}", (endpoint) => {
    apiEndpoint = endpoint;
});

When("eu envio uma requisição do tipo {string}", (method) => {
    cy.request({
        method: method,
        url: apiEndpoint,
        failOnStatusCode: false 
    }).then((response) => {
        apiResponse = response;
        cy.log(`Response Time: ${response.duration}ms`); 
    });
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
    expect(apiResponse.status).to.eq(statusCode);
});

Then("o formato da resposta deve ser {string}", (contentType) => {
    expect(apiResponse.headers['content-type']).to.include(contentType);
});

Then("a lista de produtos não deve estar vazia", () => {
    expect(apiResponse.body).to. be.an('array');
    expect(apiResponse.body).to.have.length.greaterThan(0); 
});

Then("o produto {string} deve estar presente na lista", (coffeeName) => {
    const product = apiResponse.body.find(item => item.name === coffeeName);
    expect(product).to.not.be.undefined;
    expect(product.name).to.eq(coffeeName);
    
    cy.log(`✅ Produto validado: ${product.name} | Preço: $${product.price}`);
});