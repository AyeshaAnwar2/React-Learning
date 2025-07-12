Expense Calculator App

Created by: Ayesha Anwar

📝 About the Project:

This is a simple expense calculator app built using ReactJS and Tailwind CSS. It helps users keep track of their income and expenses. The user can enter an amount with a short description (like "Salary" or "Snacks"), and the app will update the total balance automatically.


💡 What I Did:

I created a form where the user can enter an amount and description.

Used React’s useState to manage the data (amount and description).

Added a history section that shows all transactions (income and expenses).

Income amounts are shown in green, and expenses in red for clarity.

I divided the project into small reusable components like:

Header.jsx – shows the app title

Balance.jsx – shows current total balance

IncomeExpense.jsx – shows separate totals

AddTransaction.jsx – form to add new entries

TransactionList.jsx – displays the transaction history

TransactionItem.jsx – shows each individual entry


⚙️ How It Works:

User enters a positive amount for income and a negative amount for expense.

A description is added for better understanding (e.g., "Rent", "Freelancing").

When submitted, the app adds the transaction to the list.

The total balance, income, and expense sections update automatically.
