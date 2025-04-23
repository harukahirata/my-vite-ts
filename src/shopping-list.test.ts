import { describe, expect, test } from "vitest";
import { total } from './shopping-list';

describe("totalのテスト", () => {
test("合計が900である", () => {
expect(total).toBe(900);
})
});