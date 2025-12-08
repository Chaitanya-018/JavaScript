let data = []; //array
let editIndex = -1;  // Create mode by default

function createData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (editIndex === -1) {
        // Create Mode
        data.push({ name, email });  //storing objects in array
    } else {
        // Update Mode
        data[editIndex].name = name; 
        data[editIndex].email = email;
        editIndex = -1;
    }

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    
    displayData();
}

function displayData() {
    let table = "";

    data.forEach((item, index) => {
        table += `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td><button onclick="editButton(${index})">Edit</button>
            <button onclick="deleteButton(${index})">Delete</button></td>
        </tr>
        `;
    });

    document.getElementById('tbody').innerHTML = table;
}


function deleteButton(i) {
    data.splice(i, 1);
    displayData();
}

function editButton(i) {
    document.getElementById('name').value = data[i].name;
    document.getElementById('email').value = data[i].email;
    editIndex = i;    // Switch to update mode
}


