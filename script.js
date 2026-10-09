
const totalBudget = 80000;

let expenses = [];

const expenseForm = document.querySelector("#expense-form");
const expenseName = document.querySelector("#expense-name");
const expenseAmount = document.querySelector("#expense-amount");
const expenseCategory = document.querySelector("#expense-category");

const totalSpentElement = document.querySelector("#total-spent");
const remainingBudgetElement = document.querySelector("#remaining-budget");
const budgetMessage = document.querySelector("#budget-message");
const expenseList = document.querySelector("#expense-list");
const expenseCount = document.querySelector("#expense-count");

const totalBudgetElement = document.querySelector("#total-budget");

totalBudgetElement.textContent = formatMoney(totalBudget);

function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate total expenses using a loop.
function calculateTotal() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Display expenses and update the dashboard.
function updateDashboard() {
    const totalSpent = calculateTotal();
    const remaining = totalBudget - totalSpent;

    totalSpentElement.textContent = formatMoney(totalSpent);
    remainingBudgetElement.textContent = formatMoney(remaining);

    // Use conditionals to evaluate the budget.
    if (totalSpent > totalBudget) {
        budgetMessage.textContent =
            "Warning: You have exceeded your budget!";
    } else if (totalSpent >= totalBudget * 0.8) {
        budgetMessage.textContent =
            "Caution: You have used at least 80% of your budget.";
    } else {
        budgetMessage.textContent =
            "Good job! Your spending is within your budget.";
    }

    // Clear the old rows before displaying updated records.
    expenseList.replaceChildren();

    // Loop through the array and display each expense.
    for (const expense of expenses) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        // Handle deleting an expense.
        deleteButton.addEventListener("click", function () {
            expenses = expenses.filter(
                item => item.id !== expense.id
            );

            updateDashboard();
        });

        actionCell.appendChild(deleteButton);

        row.append(
            nameCell,
            categoryCell,
            amountCell,
            actionCell
        );

        expenseList.appendChild(row);
    }

    if (expenses.length === 0) {
        expenseCount.textContent = "No expenses added yet.";
    } else {
        expenseCount.textContent =
            expenses.length + " expense(s) recorded.";
    }
}

// Handle form submission.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Validate the input using conditionals.
    if (name === "" || !Number.isFinite(amount) || amount <= 0 || category === "") {
        budgetMessage.textContent =
            "Please enter a valid name, positive amount, and category.";
        return;
    }

    // Store each expense as an object inside an array.
    expenses.push({
        id: Date.now() + Math.random(),
        name: name,
        amount: amount,
        category: category
    });

    updateDashboard();

    expenseForm.reset();
});

// Show the initial dashboard.
updateDashboard();
