import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";
import { faker } from '@faker-js/faker';

Given("que o usuário acessa a loja virtual", () => {
    homePage.visit();
});

When("ele adiciona os seguintes produtos ao carrinho:", (dataTable) => {
    dataTable.raw().forEach((row) => {
        homePage.addCoffeeToCart(row[0]);
    });
});

When("aceita a oferta promocional do item {string}", (promoItem) => {
    homePage.acceptPromo();
});

Then("o carrinho deve contabilizar {int} itens", (quantity) => {
    homePage.goToCart();
    cartPage.validateItemsCount(quantity);
});

When("ele remove o primeiro item da lista", () => {
    cartPage.removeFirstItem();
});

When("finaliza o pagamento com dados financeiros válidos", () => {
    const vipNames = ['Valter', 'Jadeilson', 'Renato', 'Manoela'];
    const firstName = faker.helpers.arrayElement(vipNames);
    const lastName = faker.person.lastName(); 
    const fullName = `${firstName} ${lastName}`;
    
    const email = faker.internet.email({
        firstName: firstName,
        lastName: 'Accenture', 
        provider: 'accenture.com'
    });

    cartPage.submitCheckout(fullName, email);
});

Then("deve visualizar a mensagem de confirmação {string}", (message) => {
    cartPage.validateSuccessMessage(message);
});