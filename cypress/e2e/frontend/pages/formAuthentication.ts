import { users } from "../../../fixtures/users";

class FormAuthentication {
  get = {
    userName: () => cy.get("#username"),
    password: () => cy.get("label").contains("Password"),
    buttonSend: () => cy.get("button").contains(" Login"),
    contentContainer: () => cy.get("#content"),
  };

  typeCredentials(username, password) {
    this.get.userName().then((user) => {
      cy.wrap(user).type(username);
    });
    this.get.password().then((pass) => {
      cy.wrap(pass).type(password);
    });
  }

  sendCredentials() {
    this.get.buttonSend().then((send) => {
      cy.wrap(send).click();
    });
  }
  validateLogin() {
    this.get.contentContainer().then((label) => {
      cy.wrap(label).find("h2").should("contain.text", "Secure Area");
    });
  }
}

export const formAuthentication = new FormAuthentication();
