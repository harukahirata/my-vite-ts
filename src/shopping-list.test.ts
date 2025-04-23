import { describe, expect, test } from "vitest";
import { getTotalPrice } from './shopping-list';

describe("totalのテスト", () => {
test("合計が900である", () => {
expect(getTotalPrice).toBe(900);
})
});