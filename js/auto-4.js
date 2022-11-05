const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  const orderedItem = item => {
    totalPrice += item;
  };
  orderedItems.forEach(orderedItem);
  console.log(totalPrice);
  return totalPrice;
};
calculateTotalPrice([12, 85, 37, 4]);
