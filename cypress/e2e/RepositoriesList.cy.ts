describe("Repository list", () => {
  it("should display list of repositories for topic:react", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="repositories-list:table"]').should("exist");

    cy.get('[data-testid="table:loader"]').should("not.exist");

    cy.get('[data-testid="repositories-list:table:row"]').should(
      "have.length",
      10,
    );

    // row should not be empty (testing on live data, so the values might differ)
    cy.get('[data-testid="repositories-list:table:row"]')
      .first()
      .should("not.be.empty");
  });
});
