import { describe, expect, test } from "vitest";
import { getAllNameArray } from './shopping-list';

// describe("getAllName", () => {
// test("出力は「Apple, Milk, Meat, Fish」", () => {
// expect(getAllName()).toBe("Apple, Milk, Meat, Fish");
// })
// });

describe("getAllNameArray", () => {
test("nameを配列に格納して返す"), () => {
  expect(getAllNameArray()).toEqual(["Apple", "Milk", "Meat", "Fish"]
  )};
});