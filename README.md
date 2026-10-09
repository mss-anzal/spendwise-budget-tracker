# SpendWise Budget Tracker

## Project Description
SpendWise is a personal budgeting dashboard designed to help users record expenses, monitor their spending, and understand their remaining budget.

## Improvements Made This Week
- Added an expense entry form.
- Added a transaction table that displays recorded expenses.
- Implemented automatic calculation of total spending and remaining budget.
- Added budget warnings using conditional statements.
- Implemented expense deletion.
- Updated the dashboard dynamically using JavaScript DOM manipulation.

## JavaScript Concepts Used

### 1. Decision Making
`if`, `else if`, and `else` statements check spending against the budget and display appropriate feedback.

### 2. Arrays
An array named `expenses` stores multiple expense objects. Each object contains an ID, name, amount, and category.

### 3. Loops
A `for...of` loop processes expense records to calculate total spending and display transactions.

### 4. DOM Manipulation
JavaScript selects HTML elements and updates their text. It creates table rows and cells dynamically to display expense records.

### 5. Event Listeners
The form's submit event records new expenses. Each Delete button has a click event that removes the selected expense and refreshes the dashboard.

## Challenges and Solutions
One challenge was connecting JavaScript to the correct HTML elements. I addressed this by using element IDs and selecting them with `document.querySelector()`.

Another challenge was keeping the displayed totals accurate when expenses were added or deleted. I addressed this by recalculating totals and refreshing the dashboard after each change.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Git and GitHub

## Future Improvements
- Save expenses using localStorage.
- Update category cards and progress bars automatically.
- Add monthly expense reports and budget editing.

## How to Run
Open `index.html` using Visual Studio Code with the Live Server extension.