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

// // console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// // console.log(getAllPropValues('quantity'));
// // console.log(getAllPropValues('sdasd'));
//
//........................................................
//........................................................
//
//

//
//...............................................................
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
