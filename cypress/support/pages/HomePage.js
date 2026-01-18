class HomePage {
    elements = {
        coffeeItem: (name) => cy.getDataCy(name),
        promoModalText: () => cy.contains("It's your lucky day!", { timeout: 10000 }),
        promoButtonYes: () => cy.contains('button', 'Yes, of course!'),
        cartMenuLink: () => cy.contains('a', 'cart')
    }

    visit() {
        cy.stepInfo('Acessando a Home Page e validando renderização via UI'); 
        
        cy.intercept('GET', '/list.json').as('getMenu');

        cy.visit('/');

        this.elements.coffeeItem('Espresso').should('be.visible');
    }

    /**
     * 
     * @param {string} coffeeName 
     */
    addCoffeeToCart(coffeeName) {
        this.elements.coffeeItem(coffeeName)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    acceptPromo() {
        this.elements.promoModalText().should('be.visible');
        this.elements.promoButtonYes().click();
    }

    goToCart() {
        this.elements.cartMenuLink().should('not.contain', '(0)').click();
    }
}

export const homePage = new HomePage();