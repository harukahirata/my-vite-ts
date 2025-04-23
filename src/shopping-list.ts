const shoppingList = [
  {
    id: 1,
    name: "Apple",
    price: 200
  },
  {
    id: 2,
    name: "Milk",
    price: 200
  },
  {
    id: 3,
    name: "Meat",
    price: 400
  },
  {
    id: 4,
    name: "Fish",
    price: 100
  }
];

const shoppingListPrices = shoppingList.map((item) => item.price);
export const total = shoppingListPrices.reduce((sum, price) => sum + price, 0);
console.log(total);