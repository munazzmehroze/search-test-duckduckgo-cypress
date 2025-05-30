import 'cypress-mochawesome-reporter/register';

describe('DuckDuckGo Search Engine - Football API Tests', () => {
  const searchTerm = 'The dev-friendly football API';
  const expectedUrl = 'https://www.football-data.org/';

  beforeEach(() => {
    cy.visit('/');
    cy.get('input[name="q"]').type(`${searchTerm}{enter}`);
  });

  it('Positive: should click first result and verify the URL', () => {
    cy.get('#r1-0 a').first().should('exist').then(($link) => {
      const href = $link.prop('href');
      expect(href).to.eq(expectedUrl);
      cy.wrap($link).invoke('removeAttr', 'target').click();
    });

    cy.origin('https://www.football-data.org', () => {
      cy.url().should('eq', 'https://www.football-data.org/');
      cy.screenshot('successful-navigation');
    });
  });

  it('Negative: should NOT match an incorrect URL', () => {
    cy.get('#r1-0 a').first().should('exist').then(($link) => {
      const href = $link.prop('href');
      expect(href).to.not.eq(expectedUrl);
      cy.screenshot('negative-check');
    });
  });

  it('Edge Case: Fail gracefully if no results found', () => {
    cy.visit('/');
    cy.get('input[name="q"]').type('asdlkjadsfoijqweoruweqrkasjd{enter}');

    cy.get('#r1-0 a', { timeout: 5000 }).should('not.exist');
    cy.screenshot('no-results-found');
  });
});