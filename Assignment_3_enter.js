"use strict";
class employee{
    static count = 1;
    constructor(empName, empAddress, empDesignation){
        this.empName = empName;
        this.empAddress = empAddress;
        this.empDesignation = empDesignation;
        this.empID = employee.count++; 
    };
}

let empArray = [];

function data_entry(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let designation = document.getElementById("designation").value;

    if(name.length == 0 || address.length==0 || designation.length==0){
        alert("Enter Values");
        return false;
    }
    
    let emp = new employee(name, address, designation);
    console.log(emp);
    empArray.push(emp);
    console.log(typeof empArray[employee.count -2].empID);
    console.log(empArray);
    localStorage.setItem("myArray", JSON.stringify(empArray));
    let my_array = JSON.parse(localStorage.getItem("myArray"));
    console.log(typeof my_array);
    console.log(my_array);

    for(let emp of my_array){
        console.log(emp.empName)
    }

    document.getElementById("eid").textContent = `Remember This: ` + empArray[employee.count - 2].empName + `'s ID is ` + empArray[employee.count - 2].empID;
    document.getElementById("eid").style.display = "block";
    return true;   
}
