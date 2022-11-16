// const age = 5;
// const totalPrice = 200;
// const message = 'привіт';
// const userName = 'Vitalik';
// const isOpen = true;
// const shouldConfirm = false;
// console.log('ціна:', totalPrice);

// function checkStorage(available, ordered) {
//   // Change code below this line
//   const message =
//     available >= ordered
//       ? 'Not enough goods in stock!'
//       : 'Order is processed, our manager will contact you.';

//   if (available >= ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line
//   return message;
// }

// //
///////////////////////////////////////

// відео репети 1:33хв задача
// //
// //
// const cart = {
//   items: [],
//   getItems() {
//     // return this.items;
//   },
//   add(product) {
//     // console.table(this.items);
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         // return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(newName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       //   console.log(item);
//       if (newName === name) {
//         console.log(`знайшли і'мя:`, newName);
//         console.log(`індекс елемента `, i);
//         //`вирізає елемент `splice
//         items.splice(i, 1);
//       }
//     }
//     // for (const item of this.items) {
//     //   console.log(item);
//     //   if (newName === item.name) {
//     //     console.log(`знайшли і'мя:`, newName);
//     //   }
//   },
//   clear() {
//     this.items = [];
//   },
//   //
//   //   загальна вартість
//   //
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (let { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
// };

// cart.add({ name: 'Radar', price: 1300 });
// cart.add({ name: 'Scanner', price: 2700 });
// cart.add({ name: 'Droid', price: 400 });
// cart.add({ name: 'Grip', price: 1200 });
// cart.add({ name: 'Grip', price: 1200 });
// //

// cart.add({ name: 'Radar', price: 1300 });
// cart.add({ name: 'Scanner', price: 2700 });
// cart.add({ name: 'Droid', price: 400 });
// // cart.add({ name: 'Grip', price: 1200 });
// // cart.add({ name: 'Grip', price: 1200 });
// //............................................

// // console.table(cart.getItems());

// // загальна вартість

// cart.countTotalPrice();
// console.log('total:', cart.countTotalPrice());
// // .......
// //видаляє елемент remove
// cart.remove('Scanner');
// console.table(cart.getItems());
// //

// // ......очистка корзини
// cart.clear();
// console.log(cart.getItems());
// //............................................
// //..........................................
