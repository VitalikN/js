// let productName = 'Droid';
// let pricePerItem = 2000;

// // Change code below this line
// productName = 'Repair droid';
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   const available = 10;
//   const ordered = 5;

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   const checkStorage =
//     ordered > available
//       ? 'The order is accepted, our manager will contact you'
//       : 'Not enough goods in stock!';

//   // Change code above this line
//   return message;
// }

// for (let i = 100; i > 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 0; i < 100; i += 10) {
//   console.log(i);
// }
// =================== задачя==============
// вибрати всі парні і не парні числа від мін до макс

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('не парні:', i);
//     continue;
//   }
//   console.log('парні:', i);
//   total = +i;
// }
// console.log('total:', total);

// ==================ЗАДАЧА==========
// let balanc = 20000;
// let payment = 10000;

// console.log(`Загальна вартість ${payment}. Провірка чи є досить коштів на балансі!`);

// if (balanc >= payment) {
//   balanc -= payment;
//   console.log(`Дякую за покупку!`);
//   console.log(`залишок на рахунку ${balanc}`);
// } else {
//   console.log('На балансі не достатньо коштів !!');
// }

// =====================ЗАДАЧА 33 атоперевірка ==========

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   // 1 спосіб
// //   if (message.length <= maxLength) {
// //     result = message;
// //   } else {
// //     result = message.slice(0, maxLength) + '...';
// //   }

//   // 2 спосіб
//     result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
// //    Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));

// ====================задача 35 автопер=======
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));

// ===============36 автоперевірка
// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   // let message;
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
//   // return message;
//   // Change code above this line
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('jqueryismyjam'));

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line

//   splitMessage.split(' ');
//   // Change code above this line
//   return words;
// }

// // console.log(splitMessage.split('Mango', ''));

//
//
// .......................................................

// .......................................................

// ===========================11 авто 2 модуль
// ====================

// .......................................................

// .......................................................

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   return message.split(' ').length * pricePerWord;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice('JavaScript is in avto in my blood', 10));

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase.split(' ');
//   title.join('-');

//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));
// 13
// 13
// 13 авотпровірка
// 13
// 13
// function slugify(title) {
//   // Change code below this line

//   let slug = title.toLowerCase().split(' ').join('-');
//   //   slug.join('-');

//   return slug;
//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));
// 16
// 16
// 16
// 16
// 16
// 16
// 16

// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// /

// //
// // 25
// function getCommonElements(array1, array2) {
//   newArray = [];

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// .......................................................

// .......................................................

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

// .......................................................

// автоперевірка 3 модуль
//

// .......................................................
// .......................................................

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

//
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];
// // Change code below this line
// for (const keys in apartment) {
//   console.log(keys);
// }
// for (let values in apartment) {
//   console.log(apartment[values]);
// }

//
//
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key in keys) {
//     if (keys.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// // console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));

//
//
//
//

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key in keys) {
//     if (keys.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: 'Mango', age: 2 }));

// .......................................................
// ......................................................
//                .........16...автоперевірка
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// .......................................................

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// .........................................................

// ..........................................................
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(rgbColors);

// console.log(hexColors);

// .............................................
// 18 автопровірка 3 модуль
// ......................................................
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let newName of products) {
//     //
//     console.log(newName);
//     //
//     if (productName === newName.name) {
//       return newName.price;
//     }
//   }

//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice('Radar'));
//
//
// ..............................................

// 19
// .................................................

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   result = [];
//   for (let product of products) {
//     if (Object.keys(product).includes(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('sdasd'));
//
//
//
// ..................................
// // 20 avto
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// ...................................
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (let newName of products) {
//     // console.log(names);
//     if (productName === newName.name) {
//       result = newName.price * newName.quantity;
//       return result;
//     }
//   }

//   return null;

//   // Change code above this line
// }
// console.log(calculateTotalPrice('Radar'));
