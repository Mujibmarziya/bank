document.getElementById("depositbtn").addEventListener("click",function(){
    const clientdeposit =document.getElementById("clientdepo");
    const clientdepositvaluestring =clientdeposit.value;
    const clientdepo =parseFloat(clientdepositvaluestring);
    

    const depositfield = document.getElementById("spandepo");
    const depositvaluestring = depositfield.innerText;
    const depositvalue =parseFloat(depositvaluestring);
    
    
    const currentdeposit = clientdepo + depositvalue;
    depositfield.innerText= currentdeposit;

    const totalbalance =document.getElementById("spanbal");
    const balancevaluestring =totalbalance.innerText;
    const balancevalue= parseFloat(balancevaluestring);

    const currentbal =clientdepo + balancevalue;
    totalbalance.innerText= currentbal;

    clientdeposit.value="";


})

document.getElementById("withbtn").addEventListener("click",function(){
    const clientwith = document.getElementById("withamount");
    const clientwithstring =clientwith.value;
    const clientwithint = parseFloat(clientwithstring);

    const totalwith =document.getElementById("spanwith");
    const totalwithstring =totalwith.innerText;
    const totalwithint =parseFloat(totalwithstring);

    const withdraw = totalwithint + clientwithint;
    totalwith.innerText= withdraw;

    const prebalance =document.getElementById("spanbal");
    const prebalancestring =prebalance.innerText;
    const prebalanceint =parseFloat(prebalancestring);

    const totalbalance =prebalanceint -clientwithint;
    prebalance.innerText=totalbalance;
    

    clientwith.value="";



})