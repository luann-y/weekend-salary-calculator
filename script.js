console.log('hello world');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    // assigning my employeeData Input in HTML to my variable element
    const element = document.querySelector('#employeeDataInput');

    // assigning my input data to variables
    const firstNameElement = element.querySelector('#firstNameInput');
    const lastNameElement = element.querySelector('#lastNameInput');
    const idElement = element.querySelector('#idInput');
    const titleElement = element.querySelector('#titleInput');
    const annualSalaryElement = element.querySelector('#annualSalaryInput');

    // assigning my input values to variables
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const id = idElement.value;
    const title = titleElement.value;
    const salary = annualSalaryElement.value;

    //Calling my updateTotalMonthlySalary function which updates the total
    updateTotalMonthlySalary();

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('ID:', id);
    console.log('Title:', title);
    console.log('Annual Salary:', salary);

    //Selecting employeeData element in HTML and assigning it to a variable, then putting innerHTML into that element. I'm putting my new row.
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="deleteRow(event)">Delete</button></td>
        </tr>
    `;

    // Clearing out my data input
    firstNameElement.value = '';
    lastNameElement.value = '';
    idElement.value = '';
    titleElement.value = '';
    annualSalaryElement.value = '';

    updateTotalMonthlySalary();
}

// function to delete each row when the targeted event (button) is clicked.
// Target is the delete button so will need to delete 2 parent elements (td and tr) to remove the row.
function deleteRow(event) {
    console.log('deleteRow', event.target);
    event.target.parentElement.parentElement.remove();

    updateTotalMonthlySalary();
}

function updateTotalMonthlySalary() {
    // Selects child 5 which is the column
    const salaryColumn = document.querySelectorAll('#employeeData td:nth-child(5)');

    // Calculate the total monthly salary by looping through each employee salary 
    // and adding them and divide by 12 to get monthly
    let totalMonthlySalary = 0;

    //looping through the column data to get the annual salary then 
    // dividing it by 12 to get the monthly salary.
    for (let i = 0; i < salaryColumn.length; i++) {
        let annualSalary = (salaryColumn[i].textContent); //use textContent to get the text in each block
        let monthlySalary = annualSalary / 12;
        totalMonthlySalary += monthlySalary;
    }

    console.log('Total Monthly Salary:', totalMonthlySalary);

    // Update the content of the 'totalMonthly' div
    let totalMonthlyTable = document.getElementById('totalMonthly');
    totalMonthlyTable.innerHTML = totalMonthlySalary.toFixed(2); //Makes sure to move over 2 digits after decimal point. Number gets converted to a string.


    // Check if the total monthly salary exceeds $20,000 and apply the 'over-budget' class to the footer
let footer = document.querySelector('footer');

if (totalMonthlySalary > 20000) {
    footer.classList.add('over-budget');
} else {
    footer.classList.remove('over-budget');
}

}
