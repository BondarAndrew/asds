//ex1
const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true
  };
  
  user.mood = 'happy';
  
  user.hobby = 'skydiving';
  user.premium = false;
  
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
  
  //ex2
  function countProps(obj) {
    const propCount = Object.keys(obj).length;
    return propCount;
  }
  
  const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true
  };
  
  const numberOfProps = countProps(user);
  console.log(`Кількість властивостей у об'єкта: ${numberOfProps}`);

  //ex3
  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  const employees = {
    john: 10,
    ann: 15,
    mike: 8,
    liz: 12
  };
  
  const bestEmployeeName = findBestEmployee(employees);
  console.log(`Найпродуктивніший співробітник: ${bestEmployeeName}`);

  //ex4
  function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const employee in employees) {
      totalSalary += employees[employee];
    }
  
    return totalSalary;
  }
  

  const salaries = {
    john: 1000,
    ann: 1500,
    mike: 800,
    liz: 1200
  };
  
  const totalSalary = countTotalSalary(salaries);
  console.log(`Загальна сума зарплати: ${totalSalary}`);

  //ex5
  function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  
  const products = [
    { name: 'apple', price: 1 },
    { name: 'banana', price: 0.5 },
    { name: 'orange', price: 0.8 }
  ];
  
  const prices = getAllPropValues(products, 'price');
  console.log(`Масив цін продуктів:`, prices);


//ex6
function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  

  const productss = [
    { name: 'apple', price: 1, quantity: 5 },
    { name: 'banana', price: 0.5, quantity: 3 },
    { name: 'orange', price: 0.8, quantity: 2 }
  ];
  
  const productName = 'banana';
  const totalCost = calculateTotalPrice(productss, productName);
  console.log(`Загальна вартість продукту ${productName}: ${totalCost}`);

  //ex7
  const account = {
    balance: 0,
    transactions: [],
    
   
    deposit(amount) {
      if (amount <= 0) {
        return 'Сума повинна бути більше нуля';
      }
  
      this.balance += amount;
      this.addTransaction('deposit', amount);
      return `Успішний депозит на суму ${amount}`;
    },
    

    withdraw(amount) {
      if (amount > this.balance) {
        return 'Недостатньо коштів на рахунку';
      }
  
      this.balance -= amount;
      this.addTransaction('withdraw', amount);
      return `Успішний зняття на суму ${amount}`;
    },
    

    addTransaction(type, amount) {
      this.transactions.push({ type, amount, date: new Date().toISOString() });
    },
    
 
    getBalance() {
      return `Поточний баланс: ${this.balance}`;
    },
    

    getTransactionHistory() {
      return this.transactions;
    }
  };
  
  
  console.log(account.deposit(1000)); 
  console.log(account.withdraw(500)); 
  console.log(account.getBalance()); 
  console.log(account.getTransactionHistory()); 