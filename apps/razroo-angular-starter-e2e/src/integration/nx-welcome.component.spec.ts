describe('razroo-angular-starter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('razroo-angular-starter-nx-welcome').should('exist');
  });
});