import { describe, expect, test } from "vitest";
import { getAffordableTreats } from './treats-list';
import { validateTreat } from './treats-list';

describe("validateTreat", () => {
  test("priceとcountが両方とも正のためtrueを返す", () => {
    expect(validateTreat({ name: "チョコレート", price: 120, count: 1 })).toBe(true);
  });
  test("countが0のためfalseを返す", () => {
    expect(validateTreat({ name: "クッキー", price: 100, count: 0})).toBe(false);
  });
  test("countが-1のためfalseを返す", () => {
    expect(validateTreat({ name: "クッキー", price: 100, count: -1})).toBe(false);
  });
  test("priceが0のためfalseを返す", () => {
    expect(validateTreat({ name: "ガム", price: 0, count: 1})).toBe(false);
  });
  test("priceが-1のためfalseを返す", () => {
    expect(validateTreat({ name: "ガム", price: -1, count: 1})).toBe(false);
  });
});

describe("getAffordableTreats", () => {
  test("チョコレートを除いたものが出力される", () => {
    expect(getAffordableTreats()).toEqual([
      { name: 'ポテトチップス', price: 110, count: 1 },
      { name: 'ラムネ', price: 100, count: 1 }
    ])
  })
});