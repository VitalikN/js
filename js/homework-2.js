// 2 Д/З

// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
  {
    order: [],
    brand: 'KFC',
    menu: {
      chicken: 100,
      burger: 65,
      cola: 15,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      burger: 30,
      frenchfries: 40,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: 'Burger King',
    menu: {
      burgerXXL: 170,
      burgerXL: 120,
      burger: 70,
      cola: 35,
    },
    deliveryTime: 20,
  },
];
// const services = {
//   showMenu() {},
//   getMenu() {},
//   addOrder() {},
//   confirmOrder() {},
// };
// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "", обрати ресторан
//   getAvailableRestaurants() {}, доступні ресторани
//   chooseRestaurant() {},
//   chooseDishes() {},
// };
// torpedaDelivery.chooseRestaurant();
//  chosenRestaurant = '';

console.log();
// доступні ресторани
const getAvailableRestaurants = restaurants.map(branD => branD.brand).join(',  ');
console.log(getAvailableRestaurants);
// обираємо ресторан
const chosenRestaurant = prompt(`Оберіть ресторан:  ${getAvailableRestaurants}`);
// let chosenRestaurant = 'Burger King';

// меню вибраного ресторану
const showMenu = restaurants
  .filter(brendN => brendN.brand === chosenRestaurant)
  .map(menuB => menuB.menu);
// console.log(...showMenu);

//  список меню проблема

const keys = Object.entries(...showMenu);
const newOrder = [];
const orderPrice = [];
for (const [product, price] of keys) {
  newOrder.push(product);
  orderPrice.push(price);
  console.log(`${product} ціна : ${price} `);
}

let confirmOrder = prompt(`що бажаєте:  ${newOrder.join(',  ')}`);
console.log(`ваше замовлення ${confirmOrder}`);
// console.log(orderPrice);

const finalcost = [];

for (const price of orderPrice) {
  const index = orderPrice.indexOf(price);

  if (confirmOrder === newOrder[index]) {
    finalcost.push(price);
  }
}

// час очікування доставки
const newDeliveryTime = restaurants
  .filter(brendN => brendN.brand === chosenRestaurant)
  .map(time => time.deliveryTime);
const newTime = Object.values(newDeliveryTime);

alert(
  `ваше замовлення '${confirmOrder}' вартість до сплати ${finalcost}грн час очікування доставки ${newTime}хв`
);

console.log(
  `ваше замовлення "${confirmOrder}" вартість до сплати ${finalcost}грн час очікування доставки ${newTime}хв`
);
