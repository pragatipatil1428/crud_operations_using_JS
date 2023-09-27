var selectedRow=null;

function onFormSubmit(e) 
{
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow===null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}

//retrieve the data
function readFormData()
{
    var formData={};
    //inserting data into array
    formData["id"]=document.getElementById("id").value;
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    formData["age"]=document.getElementById("age").value;
    formData["phone"]=document.getElementById("phone").value;
    formData["address"]=document.getElementById("address").value;

    return formData;
}

// insert the data
function insertNewRecord(data)
{
    var table = document.getElementById("storedlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.age;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.phone;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.address;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button> 
                           <button onClick='onDelete(this)'>Delete</button>`;
}

// For Edit operation
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[4].innerHTML;
    document.getElementById('address').value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.phone;
    selectedRow.cells[5].innerHTML = formData.address;
}

function onDelete(td){
    if(confirm('Are you sure you want to delete this record?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById('storedlist').deleteRow(row.rowIndex);
    } 
    resetForm();   
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    selectedRow = null;
}