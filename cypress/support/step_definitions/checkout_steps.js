import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";

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
    cartPage.submitCheckout();
});

Then("deve visualizar a mensagem de confirmação {string}", (message) => {
    cartPage.validateSuccessMessage(message);
});