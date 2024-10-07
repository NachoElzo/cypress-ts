export class Checkboxes {
  get = {
    divContent: () => cy.get("#content"),
    checkboxes: () => cy.get("#checkboxes input"),
  };

  validateTitle() {
    this.get.divContent().then((title) => {
      cy.wrap(title).find("h3");
    });
  }
  checkbox1() {
    this.get.checkboxes().then((check1) => {
      cy.wrap(check1).eq(0).check();
      cy.wrap(check1).eq(0).should("be.checked");
    });
  }
  checkbox2() {
    this.get.checkboxes().then((check2) => {
      cy.wrap(check2).eq(1).uncheck();
      cy.wrap(check2).eq(1).should("not.be.checked");
    });
  }
}

export const checkboxes = new Checkboxes();
