import { landingPage } from "../pages/landingPage";

describe("Giving a user in the landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("when he validates landing page title", () => {
    landingPage.validateTitle();
  });
  it("Then he will validate topics lists", () => {
    landingPage.validateTopics();
  });
});
