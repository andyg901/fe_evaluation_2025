const searchQuery = "jmcunningham/AngularJS-Learning";

describe("Repository search", () => {
  it("should search by provided text in search input", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="search-input"]').should("be.visible");
    cy.get('[data-testid="search-input"]').type(searchQuery);

    cy.get('[data-testid="repositories-list:table:row"]')
      .first()
      .within(() => {
        cy.get('[data-testid="repositories-list:table:cell-name"]').should(
          "contain.text",
          searchQuery,
        );
      });
  });
});
