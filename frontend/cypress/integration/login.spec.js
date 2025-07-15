describe('Login Page', () => {
  it('shows login form', () => {
    cy.visit('/login');
    cy.contains('Login');
  });
});