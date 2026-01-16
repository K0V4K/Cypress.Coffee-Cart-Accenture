import { faker } from '@faker-js/faker';

class CartPage {
    elements = {
        deleteButtons: () => cy.get('.delete'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
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

    submitCheckout() {
        this.elements.checkoutBtn().click();        
        const vipNames = ['Valter', 'Jadeilson', 'Renato', 'Manoela'];
        const firstName = faker.helpers.arrayElement(vipNames);
        const lastName = faker.person.lastName(); 
        const fullName = `${firstName} ${lastName}`;
        const email = faker.internet.email({
            firstName: firstName,
            lastName: 'Accenture', 
            provider: 'accenture.com'
        });
        cy.log(`👑 Dados Gerados: ${fullName} | ${email}`);
        this.elements.nameInput().should('be.visible').type(fullName);
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