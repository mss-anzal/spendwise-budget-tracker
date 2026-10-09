
"use strict";

// 1. Variables to store budget information
let monthlyBudget = 0;
let expenses = [];

// 2. Function to collect the user's budget
function getBudget() {
    let input = prompt("Enter your monthly budget in KSh:");

    if (input === null || input.trim() === "") {
        console.log("Budget entry cancelled or left empty.");
        return null;
    }

    let budget = Number(input);

    if (!Number.isFinite(budget) || budget < 0) {
        console.log("Please enter a valid, non-negative budget.");
        return null;
    }

    return budget;
}

// 3. Function to collect expense information
function getExpenses() {
    let categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Savings",
        "Utilities"
    ];

    let expenseList = [];

    for (let category of categories) {
        let input = prompt(
            "Enter your " + category + " amount in KSh:"
        );

        if (input === null || input.trim() === "") {
            console.log("Expense entry cancelled or left empty.");
            return null;
        }

        let amount = Number(input);

        if (!Number.isFinite(amount) || amount < 0) {
            console.log("Invalid amount for " + category + ".");
            return null;
        }

        expenseList.push({
            category: category,
            amount: amount
        });
    }

    return expenseList;
}

// 4. Function to calculate total expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}

// 5. Function to calculate the remaining balance
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// 6. Function to display the results
function displayResults(budget, expenseList) {
    let totalExpenses = calculateTotalExpenses(expenseList);
    let remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );

    console.log("===== SPENDWISE BUDGET REPORT =====");
    console.log("Monthly Budget: KSh " + budget.toFixed(2));

    console.log("--- Expense Breakdown ---");

    for (let expense of expenseList) {
        console.log(
            expense.category + ": KSh " + expense.amount.toFixed(2)
        );
    }

    console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
    console.log(
        "Remaining Balance: KSh " + remainingBalance.toFixed(2)
    );

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget!");
    } else {
        console.log("Good job! You are within your budget.");
    }
}

// 7. Run the application
monthlyBudget = getBudget();

if (monthlyBudget !== null) {
    expenses = getExpenses();

    if (expenses !== null) {
        displayResults(monthlyBudget, expenses);
    }
}
