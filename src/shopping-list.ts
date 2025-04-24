type shoppingItem = {
  id: number;
  name: string;
  price: number;
}

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
] satisfies shoppingItem[];

// export function getTotalPrice() {
//   return shoppingList.reduce((sum, item) => sum + item.price, 0);
// }
// const totalPrice = getTotalPrice();
// console.log(totalPrice);

// お題6
export function getAllName() {
  const names = shoppingList.map((item) => item.name);
  return names.join(", ");
};
const nameA = getAllName();
console.log(nameA);