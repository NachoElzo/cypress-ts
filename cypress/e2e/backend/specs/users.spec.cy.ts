import { createUser } from "../resources/postCreateUser";

describe("Giving a user that logs into the app via API", () => {
  let token: string;

  beforeEach(() => {
    // Return the promise from postUser
    createUser.postUser().then((returnedToken) => {
      token = returnedToken; // Assign the returned token
    });
  });

  it("When he/she save credentials to local storage", () => {
    // Now use the token correctly
    cy.visit("https://conduit.bondaracademy.com/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("jwtToken", token);
      },
    });

    // Add additional assertions or actions here
  });
});
