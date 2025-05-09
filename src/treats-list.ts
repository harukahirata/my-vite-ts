type Treat = {
  name: string;
  price: number;
  count: number;
};

export function validateTreat(treat: Treat): boolean {
  return treat.price > 0 && treat.count > 0;
}

const treats = [
  { name: "チョコレート", price: 120, count: 1 },
  { name: "ポテトチップス", price: 110, count: 1 },
  { name: "ラムネ", price: 100, count: 1 },
  { name: "クッキー", price: 100, count: 0}
].filter(validateTreat) satisfies Treat[];

const limitPrice = 300;

export function getAffordableTreats(treats: Treat[]): Treat[] | string {
  if (treats.length === 0) {
    return "カゴの中身が空です。";
  }

  const total = treats.reduce((sum, item) => sum + item.price, 0);
  if (total <= limitPrice) {
    return "合計金額は" + limitPrice + "円以下です。";
  }
  if (total > limitPrice) {
    // 配列treatsの中からpriceの最大値を求める
    const maxPrice = Math.max(...treats.map(item => item.price));
    // 配列treatsの中からpriceの最大値maxPriceに一致する一番目のオブジェクトのインデックスを求める
    const removeIndex = treats.findIndex(item => item.price === maxPrice);
    // 対象のインデックスのみを除いた配列を作る
    const newTreats = treats.filter((_, i) => i !== removeIndex);
    // ↓書き換え前
    // const newTreats = [
    //   ...treats.slice(0, index),
    //   ...treats.slice(index + 1),
    // ];

    // newTreatsを作成しなくてもreturnでそのまま返すこともできる
    // return treats.filter((_, i) => i !== removeIndex);

    return newTreats;
  }
  return "エラーです";
}
const shoppingBasket = getAffordableTreats(treats);
console.log(shoppingBasket);