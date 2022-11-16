// 1 урок з ментором
//

// .......................................................

// .......................................................

// Напишіть 3 цикла:
// // 1й цикл: выводить в консоль числа від max до min по зменшеню (убыванию).
// // 2й цикл: виводить в консоль усі парні (четные) числа від min до max.
// // 3й цикл: виводить в консоль суму усіх парних (четных) чисел від min до max
// const max = 50;
// const min = 23;

// const max = 50;
// const min = 23;
// let total = 0;
// // for (let i = min; i <= max; i += 1) {
// //   if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }
// for (let i = 0; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

//
// .................Д/з
// .......................................................

// Замовлення турів:
// ++ Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
//

// const countries = ['Ukraine', 'Poland', 'Croatia', 'Montenegro', 'France', 'USA'];
// const countriesPrice = [100, 200, 300, 400, 500, 600];

// // ...................
// // Авторизация.....
// // // //..............
// let userName = prompt('your username');
// console.log('your username is', userName);
// //
// let userPass = prompt('your userpass ');
// console.log('your userpass is', userPass);

// // // ...........................логін

// while (userName !== prompt('login')) {
//   console.log(`Try again!`);
// }
// console.log(`login success!`);
// //
// while (userPass !== prompt('your userpass')) {
//   console.log(`Try again!`);
// }
// console.log(`login success!`);

// // ....................... скільки в нас є грошей для подорожі

// let maxPrice = prompt('maxPrice');
// // // maxPrice = Number(maxPrice);
// console.log(maxPrice);

// // let maxPrice = 1500;
// let newCountries = countries.slice(', ');
// // console.log(newCountries);
// let newPrice = countriesPrice.slice(', ');
// // console.log(newPrice);
// let newCountriesPrice = [];
// let userCredits = 0;
// let userCountry;
// for (let countrie of newCountries) {
//   const index = newCountries.indexOf(countrie);
//   //   console.log(countrie, newPrice[index]);
//   if (maxPrice >= newPrice[index]) {
//     newCountriesPrice.push(countrie);
//   }
// }

// alert(newCountriesPrice.join(',  '));
// // console.log('Available Countries are ', newCountriesPrice);
// userCountry = prompt('userCountry');
// console.log('you have successful', userCountry);
// // ..

// for (let price of newPrice) {
//   const index = newPrice.indexOf(price);
//   //   console.log('ціна краіни ', newCountriesPrice[index], price);
//   if (userCountry === newCountriesPrice[index]) {
//     userCredits = maxPrice - price;
//   }
// }

// console.log('the balance of the users credits', userCredits);
// alert(`'you have successful', ${userCountry} , the balance of the users credits, ${userCredits}`);

// // Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;
// const d = [...b].slice(1);
// let result = [...a, c, ...d];
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]
//................................
//................................
// // // Реалізуйте result
// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// const a1 = [];
// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];
// const foo = arr => {
//   let newArry = [];
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       newArry.push(...el);
//     } else {
//       newArry.push(el);
//     }
//     // console.log(el);
//   }
//   return newArry;
// };

// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]
//
//
//
//
// 2 Д/З
//
//
// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
  {
    order: [],
    brand: 'KFC',
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: 'Burger King',
    menu: {
      burgerXXL: 170,
      burger: 70,
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
//   getAvailableRestaurants() {},
//   chooseRestaurant() {},
//   chooseDishes() {},
// };
// torpedaDelivery.chooseRestaurant();
