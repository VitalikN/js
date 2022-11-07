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

// // let userName;
// // let userPass;
// // let userCredits;
// // let userCountry;
// // let maxPrice;
// //...................
// // Авторизация.....
// // //..............
// let userName = prompt('your username');
// console.log('your username is', userName);
// //
// let userPass = prompt('your userpass ');
// console.log('your userpass is', userPass);

// // // // ...........................логін

// while (userName !== prompt('login')) {
//   console.log(`Try again!`);
// }
// console.log(`login success!`);
// //
// while (userPass !== prompt('your userpass')) {
//   console.log(`Try again!`);
// }
// console.log(`login success!`);

// //....................... скільки в нас є грошей для подорожі
// //

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
