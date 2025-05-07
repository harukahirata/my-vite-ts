import { describe, expect, test } from "vitest";
import { getAffordableTreats } from './treats-list';

describe("getAffordableTreats", () => {
  test("チョコレートを除いたものが出力される", () => {
    expect(getAffordableTreats()).toEqual([
      { name: 'ポテトチップス', price: 110, count: 1 },
      { name: 'ラムネ', price: 100, count: 1 }
    ])
  })
});