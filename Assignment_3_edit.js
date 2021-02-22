function searchArray(){
    inputID = Number.parseInt(document.getElementById("edEmpId").value);

    let flag = 0;
    let empEdit;
    let my_array = JSON.parse(localStorage.getItem("myArray"));
    console.log(my_array.length)
    for(let emp of my_array){
        if (emp.empID === inputID){
            empEdit = emp;
            flag = 1;
            break; 
        }
    }
    if(flag===0){
        document.getElementById("searchResult").style.display = "block";
        document.getElementById("searchResult").textContent = "Entered Id not found";
    }else{
        document.getElementById("searchResult").style.display = "block";
        document.getElementById("searchResult").textContent = "ID found";
        document.getElementById("idForm").style.display="none";

        console.log(empEdit.empName)
        console.log(empEdit.empDesignation)
        document.getElementById("edForm").style.display = "block";
        document.getElementById("edName").value=empEdit.empName;
        document.getElementById("edAddress").innerHTML=empEdit.empAddress;
        document.getElementById("edDesignation").value=empEdit.empDesignation;

    }
}

function editInfo(){

    let entered_id = Number.parseInt(document.getElementById("edEmpId").value);
    let edited_name = document.getElementById("edName").value;
    let edited_address = document.getElementById("edAddress").value;
    let edited_designation = document.getElementById("edDesignation").value;

    if(edited_name.length==0 || edited_address.length==0 || edited_designation==0){
        alert("enter proper value");
        return false;
    }
    
    let all_emp = JSON.parse(localStorage.getItem("myArray"));
    console.log(all_emp.length)

    for(let emp of all_emp){
        if (emp.empID === entered_id){
            emp.empName = edited_name;
            emp.empAddress = edited_address;
            emp.empDesignation = edited_designation;
        }
    }

    localStorage.setItem("myArray", JSON.stringify(all_emp));
    console.log(all_emp);

    document.getElementById("idForm").style.display="block";
    document.getElementById("edForm").style.display = "none";
    document.getElementById("edited").style.display = "block";
    document.getElementById("edited").textContent = `Employee with id ${entered_id} updated.`; 
    return true;

}

