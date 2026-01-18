import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";
import { faker } from '@faker-js/faker';

Given("que o usuário acessa a loja virtual", () => {
    homePage.visit();
});

When("ele adiciona os seguintes produtos ao carrinho:", (dataTable) => {
    dataTable.rawTable.forEach(row => {
        homePage.addCoffeeToCart(row[0]);
    });
});

When("aceita a oferta promocional do item {string}", (item) => {
    homePage.acceptPromo();
});

Then("o carrinho deve contabilizar {int} itens", (count) => {
    homePage.goToCart();
    cartPage.validateItemsCount(count);
});

When("ele remove o primeiro item da lista", () => {
    cartPage.removeFirstItem();
});

When("finaliza o pagamento com dados financeiros válidos", () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    
    cy.stepInfo(`Dados Faker Gerados: ${randomName} | ${randomEmail}`);
    cartPage.submitCheckout(randomName, randomEmail);
});

Then("deve visualizar a mensagem de confirmação {string}", (message) => {
    cartPage.validateSuccessMessage(message);
});