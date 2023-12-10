console.log('hello world');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    const element = document.querySelector('#employeeDataInput');

    const firstNameElement = element.querySelector('#firstNameInput');
    const lastNameElement = element.querySelector('#lastNameInput');
    const idElement = element.querySelector('#idInput');
    const titleElement = element.querySelector('#titleInput');
    const annualSalaryElement = element.querySelector('#annualSalaryInput');

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const id = idElement.value;
    const title = titleElement.value;
    const salary = annualSalaryElement.value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('ID:', id);
    console.log('Title:', title);
    console.log('Annual Salary:', salary);

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


firstNameElement.value = '';
lastNameElement.value = '';
idElement.value = '';
titleElement.value = '';
annualSalaryElement.value = '';

}

function deleteRow(event) {
    console.log('deleteRow', event.target);
    event.target.parentElement.parentElement.remove();
}
