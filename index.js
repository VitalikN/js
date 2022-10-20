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
