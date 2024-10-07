import { randomBytes } from "crypto";

export function randomString(): string {
  return randomBytes(7).toString("hex");
}

export function randomEmail(): string {
  return `${randomString()}@yopmail.com`;
}
