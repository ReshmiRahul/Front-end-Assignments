//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
const bankCustomer = {
    //2. Add the required properties to your object.
    lastName: "Rahul",
    branchNumber: 4549375084,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,

    //3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit : function(amount)
    {
        this.accountBalance += amount;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    },

    //4. Add your second method and test it.
    makeWithdrawal : function(amount) 
    {
        this.accountBalance -= amount;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    },

    // Stretch Goal: Add Interest method
    addInterest: function() {
        let tempInterestRate = this.interestRate;
        if (this.multipleAccounts) {
            tempInterestRate += 0.005; 
        }
        this.accountBalance *= tempInterestRate;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    }
};

//5. Create the required output to complete steps 6-10 of the lab.

//Output the account starting balance to the console.
console.log("Starting balance: $" + bankCustomer.accountBalance.toFixed(2));

//Deposit $200
console.log(bankCustomer.makeDeposit(200));

//Withdraw $75
console.log(bankCustomer.makeWithdrawal(75));

//6. Once everything is working, tackle the Stretch Goal!

// Output the new balance to the console.
console.log(bankCustomer.addInterest());


