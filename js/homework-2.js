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
      burger: 70,
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

// доступні ресторани
const getAvailableRestaurants = restaurants.map(restaurant => restaurant.brand).join(',  ');
// console.log(getAvailableRestaurants);
// обираємо ресторан
const chosenRestaurant = prompt(`Оберіть ресторан:  ${getAvailableRestaurants}`);
// let chosenRestaurant = 'Burger King';

// меню вибраного ресторану
const showMenu = restaurants
  .filter(restaurant => restaurant.brand === chosenRestaurant)
  .map(menuB => menuB.menu);
// console.log(...showMenu);

//  список меню проблема
const keys = Object.entries(...showMenu);
const yourOrder = [];
const orderPrice = [];
const finalcost = [];
for (const [product, price] of keys) {
  console.log(`${product} ціна : ${price} `);
  yourOrder.push(product);
  orderPrice.push(price);
}

let confirmOrder = prompt(`що бажаєте:  ${yourOrder.join(',  ')}`);
// console.log(`ваше замовлення ${confirmOrder}`);
// console.log(orderPrice);

for (const price of orderPrice) {
  const index = orderPrice.indexOf(price);

  if (confirmOrder === yourOrder[index]) {
    finalcost.push(price);
  }
}
// час очікування доставки
const newDeliveryTime = restaurants
  .filter(restaurant => restaurant.brand === chosenRestaurant)
  .map(time => time.deliveryTime);
const newTime = Object.values(newDeliveryTime);

alert(
  `ваше замовлення '${confirmOrder}' вартість до сплати ${finalcost}грн час очікування доставки ${newTime}хв ${chosenRestaurant}`
);

console.log(
  `ваше замовлення "${confirmOrder}" вартість до сплати ${finalcost}грн час очікування доставки ${newTime}хв  ${chosenRestaurant}`
);
