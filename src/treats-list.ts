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

export function getAffordableTreats(): Treat[] | void {
  const total = treats.reduce((sum, item) => sum + item.price, 0);
  if (total <= limitPrice) {
    console.log("合計金額は" + limitPrice + "円以下です。");
    return;
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
    return newTreats;
  }
}
const shoppingBasket = getAffordableTreats();
console.log(shoppingBasket);