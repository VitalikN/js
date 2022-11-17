// 1 урок з ментором
// //

// // .......................................................
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

// .......................................................

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
