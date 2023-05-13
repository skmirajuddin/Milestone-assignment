function removeDuplicates(cart) {
    let uniqueCart = [];
  
    for (let i = 0; i < cart.length; i++) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
  
    return uniqueCart;
  }
  
  let cart = ['item1', 'item2', 'item3', 'item2', 'item4', 'item1'];
  
  console.log(removeDuplicates(cart)); 
  