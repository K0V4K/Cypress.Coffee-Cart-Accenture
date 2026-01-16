Cypress.Commands.add('getDataCy', (value) => {
    return cy.get(`[data-cy="${value}"]`);
});

Cypress.Commands.add('getDataTest', (value) => {
    return cy.get(`[data-test="${value}"]`);
});
Cypress.Commands.add('stepInfo', (message) => {
    Cypress.log({
        name: 'STEP INFO',
        message: message,
        consoleProps: () => { return { message } }
    });
});