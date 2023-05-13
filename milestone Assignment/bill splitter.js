function calculateBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }

  const costPerDish = 20; 
const numPeople = 4; 

const result = calculateBill(costPerDish, numPeople);

console.log(result); 
