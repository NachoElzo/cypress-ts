import { randomString, randomEmail } from "../support/random";

export let users = {
  user1: {
    userName: randomString(),
    userEmail: `${randomString()}ops${randomEmail()}`,
    password: "SuperSecretPassword!",
  },

  user2: {
    userName: `${randomString()}dev`, // Asigna un nombre de usuario
    userEmail: `${randomString()}${randomEmail()}`,
    password: "SuperSecretPassword!",
  },
};
