import { listTopics } from "../../../fixtures/homeTopics";

class LandingPage {
  get = {
    title: () => cy.get("h1"),
    topics: () => cy.get("ul li"),
  };

  validateTitle() {
    this.get.title().then((title) => {
      expect(title.text()).eq("Welcome to the-internet");
    });
  }

  validateTopics() {
    this.get.topics().then((topics) => {
      expect(topics.length).to.eq(44);
    });
    listTopics.forEach((topic) => {
      expect(listTopics).to.include(topic);
    });
  }

  clickFormAuthentication() {
    this.get.topics().then((topic) => {
      cy.wrap(topic).contains("Form Authentication").click();
    });
  }

  clickCheckboxes() {
    this.get.topics().then((checkboxes) => {
      cy.wrap(checkboxes).contains("Checkboxes").click();
    });
  }
}

export const landingPage = new LandingPage();
