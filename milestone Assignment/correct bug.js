function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  const cart = [1, 2, 3, 4];
  const newCart = doubleCartQuantities(cart);
  console.log(newCart);
  