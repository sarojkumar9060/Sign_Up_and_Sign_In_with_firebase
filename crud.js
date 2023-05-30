// Function to create a new row in the table
function createRow(name, email,gender) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var actionsCell = row.insertCell(2);
    // var actionsCell = row.insertCell(2);
    var genderCell = row.insertCell(2);
    // var actionsCell = row.insertCell(3);
    
    nameCell.innerHTML = name;
    genderCell.innerHTML = gender;
    emailCell.innerHTML = email;
    actionsCell.innerHTML = '<div class="actions"><button onclick="editRow(this)"   >Edit</button><button onclick="deleteRow(this)">Delete</button></div>';
    // genderCell.innerHTML = '<div class="actions"><button onclick="editRow(this)">Edit</button><button onclick="deleteRow(this)">Delete</button></div>';
    // ActionsCell.innerHTML = '<div class="actions"><button onclick="editRow(this)">Edit</button><button onclick="deleteRow(this)">Delete</button></div>';
  }
  
  // Function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var gender = document.getElementById("genderInput").value;
    
    createRow(name, email ,gender);
    
    document.getElementById("myForm").reset();
  }
  
  // Function to edit a row
  function editRow(button) {
    var row = button.parentNode.parentNode.parentNode;
    var nameCell = row.cells[0];
    var emailCell = row.cells[1];
    var genderCell = row.cells[2];
    
    var newName = prompt("Enter the new name", nameCell.innerHTML);
    var newEmail = prompt("Enter the new email", emailCell.innerHTML);
    var newEmail = prompt("Enter the new gender", genderCell.innerHTML);
    
    nameCell.innerHTML = newName;
    emailCell.innerHTML = newEmail;
    genderCell.innerHTML = newGender;
  }
  
  // Function to delete a row
  function deleteRow(button) {
    var row = button.parentNode.parentNode.parentNode;
    row.remove();
  }
  
  document.getElementById("myForm").addEventListener("submit", handleSubmit);
  // Function to load existing data (optional)
function loadExistingData() {
    // You can fetch data from a server or load it from storage if needed
    // For example:
    var existingData = [

      // { name: "John Doe", email: "john@example.com", gender: "Male" },
      // { name: "Jane Smith", email: "jane@example.com" ,gender: "Female", }
    //   {name: "Jane Smith", email: "jane@example.com" , gender }
    ];
    
    for (var i = 0; i < existingData.length; i++) {
      var data = existingData[i];
      createRow(data.name, data.email,data.gender);
    }
  }
  
  // Load existing data (optional)
  loadExistingData();
  