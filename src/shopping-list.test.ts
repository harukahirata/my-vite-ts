import { describe, expect, test } from "vitest";
import { getAllName } from './shopping-list';
import { getItemsByMoreThanPrice } from './shopping-list';
import { getItemByName } from './shopping-list';

describe.skip("getAllName", () => {
test("出力は「Apple, Milk, Meat, Fish」", () => {
expect(getAllName()).toBe("Apple, Milk, Meat, Fish");
})
});

describe.skip("getItemsByMoreThanPrice", () => {
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

describe("getItemByName", () => {
  test("nameがFishのとき、nameにFishを含んだオブジェクトを返す", () => {
    expect(getItemByName("Fish")).toStrictEqual({ id: 4, name: 'Fish', price: 100 });
  })
  test("nameが文字列以外のとき、エラーメッセージを返す", () => {
    expect(getItemByName(123 as unknown as string)).toBe("文字を入れてください");
  })
  test("nameに当てはまらない場合、undefinedを返す", () => {
    expect(getItemByName("あいう")).toBe(undefined);
  })
})