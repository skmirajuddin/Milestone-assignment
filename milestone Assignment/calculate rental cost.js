function calculateRentalCost(days, carType) {
    let rentalCostPerDay = 0;
    

    switch (carType) {
      case 'Economy':
        rentalCostPerDay = 4000;
        break;
      case 'Midsized':
        rentalCostPerDay = 15000;
        break;
      case 'Luxury':
        rentalCostPerDay = 20000;
        break;
      default:
        console.log('Invalid car type.');
        return 0;
    }
    
    const totalRentalCost = rentalCostPerDay * days;
    
    return totalRentalCost;
  }
  
  const daysRented = 5;
const carType = 'Midsized';
const rentalCost = calculateRentalCost(daysRented, carType);
console.log(`Total rental cost: ${rentalCost}`);
