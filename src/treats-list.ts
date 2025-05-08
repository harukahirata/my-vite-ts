type treat = {
  name: string;
  price: number;
  count: number;
};

const treats = [
  { name: "チョコレート", price: 120, count: 1 },
  { name: "ポテトチップス", price: 110, count: 1 },
  { name: "ラムネ", price: 100, count: 1 },
] satisfies treat[];

const limitPrice = 300;

export function getAffordableTreats() {
  const total = treats.reduce((sum, item) => sum + item.price, 0);
  if (total <= limitPrice) {
    return console.log("合計金額は" + limitPrice + "円以下です。");
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