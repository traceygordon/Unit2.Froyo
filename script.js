const userFlavors = prompt("Enter your order");

function getFroyoOrder(order) {
  const flavorsArray = order.split(",");

  const userOrder = {};

  for (let i = 0; i < flavorsArray.length; i++) {
    const currentFlavor = flavorsArray[i];
    if (!userOrder[currentFlavor]) {
      userOrder[currentFlavor] = 1;
    } else {
      userOrder[currentFlavor] += 1;
    }
  }
  return userOrder;
}

console.table(getFroyoOrder(userFlavors));
