import { landingPage } from "../pages/landingPage";
import { checkboxes } from "../pages/checkboxes";
describe("Given a user that interacts with the checkboxes", () => {
  beforeEach("Giving a user in the landing page", () => {
    cy.visit("/");
    landingPage.clickCheckboxes();
  });
  it("When he/she validates title", () => {
    checkboxes.validateTitle();
  });

  it("Then the user interacts with checkboxes", () => {
    checkboxes.checkbox1();
    checkboxes.checkbox2();
  });
});
