function conv_bin() {
    var num =(document.getElementById("num").value);
    var temp = num; 
    var bin = []; 

    if (num == null || num == "") {
      document.getElementById("message1").innerHTML ="No input";
      document.getElementById("message2").innerHTML ="";
      return false;
    }
    if (num < 0) {
      document.getElementById("message1").innerHTML ="Please input a positive integer";
      document.getElementById("message2").innerHTML ="";
      return false;
    }
    if (temp == 0) {
        document.getElementById("message1").innerHTML = "Integer <br></br> "+num+" <br></br> Binary <br></br>0";
        document.getElementById("message2").innerHTML = "";
        return false;
    }
    while (temp > 0) {
        bin.push(temp % 2);
        temp = Math.trunc(temp/2);  
    }
    document.getElementById("message1").innerHTML ="Integer <br></br> "+num+" <br></br> Binary";
   
    document.getElementById("message2").innerHTML = "";
    
    while (bin.length != 0) {
        document.getElementById("message2").innerHTML += ""+bin.pop()+"";
        
    }
    
    
  
}