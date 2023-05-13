const calculateTotalCost = (cart) => {
    let totalCost = 0;
    for (let item of cart) {
      totalCost += item.unitPrice * item.quantity;
    }
    return totalCost;
  };

  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 1 },
    { unitPrice: 5, quantity: 4 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); // Output: 60
  