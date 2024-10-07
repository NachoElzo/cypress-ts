import { users } from "../../../fixtures/users";

export class CreateUser {
  // Ensure that the method returns a Promise<string>
  postUser(): Cypress.Chainable<string> {
    return cy
      .request("POST", "https://conduit-api.bondaracademy.com/api/users", {
        user: {
          username: users.user1.userName,
          email: users.user1.userEmail,
          password: users.user1.password,
        },
      })
      .its("body")
      .then((body) => {
        const token = body.user.token;
        return token; // Return the token
      });
  }
}

export const createUser = new CreateUser();
