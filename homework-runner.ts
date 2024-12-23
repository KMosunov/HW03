import {Calculator} from "./Calculator";
import {Product} from "./Product";
import {BankAccount} from "./BankAccount";

const cal1 = new Calculator();
const product1 = new Product("Bed", 1000, 56);
const account = new BankAccount("765", 500);

console.log("Результат сложения: " + cal1.addition (5, 7));
console.log("Число 1 больше числа 2: " + cal1.isGreater(8, 12));

console.log ("Общая стоимость всех товаров: " + product1.getTotalValue());
console.log("Товар есть на складе: " + product1.isInStock());

console.log("Баланс: " + account.balance);
account.deposit(100);
console.log("Баланс с пополнением: " + account.balance);
account.withdraw(200);
console.log("Баланс после снятия: " + account.balance);
