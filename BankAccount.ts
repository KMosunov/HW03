export class BankAccount {
    accountNumber: string;
    balance: number;

    constructor (accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit (amount: number): void {
        this.balance = this.balance + amount;
    }
    withdraw (amount: number): void {
        this.balance = this.balance - amount;
    }
}