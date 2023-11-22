import { z } from "zod";

const SCHEMA = z.object({
  name: z.string(),
  age: z.number(),
});

export function greet(input: unknown): string {
  try {
    const value = SCHEMA.parse(input);
    return `Hello my guy ${value.name} of age ${value.age}!`;
  } catch (e) {
    return "Oh no";
  }
}

console.log("hi there");
