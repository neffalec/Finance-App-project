document
  .getElementById("expense-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    // Get values from form
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    // Create an element to list the new expense
    const expenseItem = document.createElement("div");
    expenseItem.innerHTML = `Description: ${description}, Amount: $${amount}, Category: ${category}`;

    // Add the new expense to the list
    document.getElementById("expenses-list").appendChild(expenseItem);

    // Clear the form
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  });
