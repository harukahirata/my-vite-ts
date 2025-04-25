import { describe, expect, test } from "vitest";
import { getAllName } from './shopping-list';

describe("getAllName", () => {
test("出力は「Apple, Milk, Meat, Fish」", () => {
expect(getAllName()).toBe("Apple, Milk, Meat, Fish");
})
});