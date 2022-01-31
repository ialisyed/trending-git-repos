/// <reference types="cypress" />

context("Repo List", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/repositories*", {
      fixture: "repo-response.json",
    }).as("getUsers");
    cy.visit("http://localhost:3000");
    cy.wait("@getUsers");
  });

  describe("When user visits the page", () => {
    it("renders recipe List", () => {
      cy.get("[data-cy=repo-list]").children().should("have.length.above", 2);
    });
  });

  describe("A repo is starred", () => {
    describe("when user stars a repo", () => {
      it("stars repo", () => {
        cy.get("[data-cy=star-btn]")
          .eq(0)
          .click()
          .then(() => {
            cy.get("[data-cy=star-btn]")
              .eq(0)
              .should("have.data", "starred", true);
            expect(localStorage.getItem("452081015")).to.eq("1");
            cy.saveLocalStorage();
          });
      });
    });

    describe("when page is reloaded with a repo starred", () => {
      it("renders repo as starred", () => {
        cy.reload();
        cy.restoreLocalStorage();
        cy.get("[data-cy=star-btn]").eq(0).should("have.data", "starred", true);
      });
    });
  });
});
