function data_entry() {
    
    var Lname = document.getElementById("input1").value;
    var Fname = document.getElementById("input2").value;
    var Gender = document.getElementById("input3").value;
    var Email = [] = document.getElementById("input4").value;
    var Origin = document.getElementById("input5").value;
    var Destination = document.getElementById("input6").value;
    var Ddate = [] = document.getElementById("input7").value;
    var Rdate = [] = document.getElementById("input8").value; 
    
    
    
   
    
    if (Lname == null || Lname == "") {
        alert("Input All Required Information");
        return false;
    } else if (Fname == null || Fname == "") {
        alert("Input All Required Information");
        return false;
    } else if (Email == null || Email == "") {
        alert("Input All Required Information");
        return false;
    } else if (Gender == "Enter Gender") {
        alert("Input All Required Information");
        return false;
    } else if (Origin == null || Origin == "") {
        alert("Input All Required Information");
        return false;
    } else if (Destination == null || Destination == "") {
        alert("Input All Required Information");
        return false;
    } else if (Ddate == "") {
        alert("Input All Required Information");
        return false;
    } else if (Rdate == "") {
        alert("Input All Required Information");
        return false;
    } else if (!Email.includes('@')) {
        alert("Email should have an @");
        return false;
    } else if (Ddate > Rdate) {
        alert("Departure Date should be earlier than the Return Date");
        return false;
    }
    
    
   
    
    
    
    document.getElementById("LN").innerHTML = " Last Name: "+Lname+""; 
     
    document.getElementById("FN").innerHTML = " First Name: "+Fname+""; 
    
    document.getElementById("G").innerHTML = " Gender: "+Gender+""; 
    
    document.getElementById("EA").innerHTML = " Email Address: "+Email+""; 
    
    document.getElementById("O").innerHTML = " Origin: "+Origin+""; 
    
    document.getElementById("D").innerHTML = " Destination: "+Destination+""; 

    document.getElementById("DD").innerHTML = "Departure Date: "+Ddate+""; 

    document.getElementById("RD").innerHTML = "Return Date: "+Rdate+""; 

    
   
}