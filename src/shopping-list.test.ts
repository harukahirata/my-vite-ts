import { describe, expect, test } from "vitest";
import { getAllNames } from './shopping-list';

// describe("getAllName", () => {
// test("出力は「Apple, Milk, Meat, Fish」", () => {
// expect(getAllName()).toBe("Apple, Milk, Meat, Fish");
// })
// });

describe("getAllNames", () => {
test("nameを配列に格納して返す"), () => {
  expect(getAllNames()).toEqual(["Apple", "Milk", "Meat", "Fish"]
  )};
});