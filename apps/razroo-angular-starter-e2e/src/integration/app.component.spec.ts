describe('razroo-angular-starter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('razroo-angular-starter-root').should('exist');
  });
});