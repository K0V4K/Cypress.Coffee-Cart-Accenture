class CartPage {
    elements = {
        deleteButtons: () => cy.get('.delete'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        //checkoutBtn: () => cy.get('[data-test="checkout-QUEBRADO"]'), <-- Tire o comentário para TESTAR IA e comente o código acima: checkoutBtn: () => cy.get('[data-test="checkout"]'),
        nameInput: () => cy.get('#name'),
        emailInput: () => cy.get('#email'),
        submitBtn: () => cy.get('#submit-payment'),
        successMsg: () => cy.get('.snackbar')
    }

    validateItemsCount(count) {
        this.elements.deleteButtons().should('have.length', count);
    }

    removeFirstItem() {
        this.elements.deleteButtons().first().click();
    }

    /**
     * 
     * 
     * @param {string} name 
     * @param {string} email 
     */
    submitCheckout(name, email) {
        this.elements.checkoutBtn().click();        
        
        cy.stepInfo(`📝 Preenchendo Checkout com: ${name} | ${email}`);
        this.elements.nameInput().should('be.visible').type(name);
        this.elements.emailInput().type(email);
        
        this.elements.submitBtn().click();
    }

    validateSuccessMessage(message) {
        this.elements.successMsg()
            .should('be.visible')
            .and('contain.text', message);
    }
}

export const cartPage = new CartPage();