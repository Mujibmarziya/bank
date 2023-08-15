document.getElementById("loginbutton").addEventListener("click",function(){
    const emailfield =document.getElementById("email");
    const emailvalue = emailfield.value;
     
    const passfield =document.getElementById("userpass");
    const passvalue =passfield.value;
    //console.log(emailvalue,passvalue);

    if(emailvalue ==="soytan@gmail.com" && passvalue ==="secret"){
       window.location.href ="bank.html"
       
    }
    else{
        console.log("invalid")
    }
})


