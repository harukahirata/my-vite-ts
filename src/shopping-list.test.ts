import { describe, expect, test } from "vitest";
import { getItemsByMoreThanPrice } from './shopping-list';

// describe("getItemsByMoreThanPrice", () => {
// test("出力は「Apple, Milk, Meat, Fish」", () => {
// expect(getAllName()).toBe("Apple, Milk, Meat, Fish");
// })
// });

describe("getItemsByMoreThanPrice", () => {
  test("priceが0以下のときは空の配列を返す", () => {
    expect(getItemsByMoreThanPrice(0)).toEqual([]);
  })
  test("priceが200のとき、200円以上の商品（オブジェクト）を返す", () => {
    expect(getItemsByMoreThanPrice(200)).toEqual([
      { id: 1, name: 'Apple', price: 200 },
      { id: 2, name: 'Milk', price: 200 },
      { id: 3, name: 'Meat', price: 400 }
    ])
  })
  test("priceが-1のとき、空の配列を返す", () => {
    expect(getItemsByMoreThanPrice(-1)).toEqual([]);
  })
  test("priceがNaNのとき、空の配列を返す", () => {
    expect(getItemsByMoreThanPrice(NaN)).toEqual([]);
  })
});