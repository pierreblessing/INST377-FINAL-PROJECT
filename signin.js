const host = window.location.origin;

async function createAccount() {
  await fetch(`${host}/377customertable`, {
    method: 'POST',
    body: JSON.stringify({
      firstName: `${document.getElementById('username').value}`,
      lastName: `${document.getElementById('password').value}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  await loadCustomerData();
}

async function loadCustomerData() {
  await fetch(`${host}/377customertable`)
    .then((res) => res.json())
    .then((resJson) => {
      const table = document.createElement('table');
      table.setAttribute('id', 'customerInfo');

      const tableRow = document.createElement('tr');

      const tableHeading1 = document.createElement('th');
      tableHeading1.innerHTML = 'username';
      tableRow.appendChild(tableHeading1);

      const tableHeading2 = document.createElement('th');
      tableHeading2.innerHTML = 'password';
      tableRow.appendChild(tableHeading2);

      table.appendChild(tableRow);

      resJson.forEach((customer) => {
        const customerTableRow = document.createElement('tr');
        const customerTableFirstName = document.createElement('td');
        const customerTableLastName = document.createElement('td');

        customerTableFirstName.innerHTML = customer.customer_first_name;
        customerTableLastName.innerHTML = customer.customer_last_name;

        customerTableRow.appendChild(customerTableFirstName);
        customerTableRow.appendChild(customerTableLastName);

        table.appendChild(customerTableRow);
      });

      const preExistingTable = document.getElementById('customerInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadCustomerData;