import { landingPage } from "../pages/landingPage";
import { formAuthentication } from "../pages/formAuthentication";
describe("Giving a user that logs into the app", () => {
  beforeEach("", () => {
    cy.visit("/");
    landingPage.clickFormAuthentication();
  });
  it("When he/she validates login page title", () => {});

  it("Then he/she will validate secure area", () => {
    formAuthentication.typeCredentials("tomsmith", "SuperSecretPassword!");
    formAuthentication.sendCredentials();
    formAuthentication.validateLogin();
  });
});
