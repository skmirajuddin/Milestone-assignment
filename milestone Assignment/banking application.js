
function deposit(customer, amount) {
    customer.balance += amount;
    return `Deposited ${amount} into ${customer.name}'s account. New balance is ${customer.balance}.`;
  }
  

  function withdraw(customer, amount) {
    if (amount > customer.balance) {
      return `Error: Insufficient funds. Current balance is ${customer.balance}.`;
    } else {
      customer.balance -= amount;
      return `Withdrew ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`;
    }
  }
  