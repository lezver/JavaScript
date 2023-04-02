import transactions from "./transactions.js";

const makeTransactionsTable = (transactions) =>
	transactions
		.map(
			({ account, amount, bussiness, date, id, name, type }) =>
				`
	<tr>
		<td>${id}</td>
		<td>${amount}</td>
		<td>${date}</td>
		<td>${name}</td>
		<td>${type}</td>
		<td>${bussiness}</td>
		<td>${account}</td>
	</tr>
`
		)
		.join("");

console.log(makeTransactionsTable(transactions));
console.log(transactions);

const tableRef = document.querySelector(".table");
console.log(tableRef);
tableRef.insertAdjacentHTML("beforeend", makeTransactionsTable(transactions));
