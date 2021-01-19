function GetInput() {
    var amountBill = document.getElementById("amount").value;

    var serviceRating = document.getElementById("performance").value;

    var numPeople = document.getElementById("people").value;
    
    Validation(amountBill, serviceRating, numPeople);
}

function Validation(amountBill, serviceRating, numPeople) {
    
    
    if (amountBill === "" || !(amountBill > 0 && amountBill <= Math.abs(Number.MAX_VALUE)) ) {
        
        window.alert("Invalid Input!");
        return;
    }
    
    if (serviceRating === "0")
        {
            window.alert("Invalid Input!");
            return;
        }
    
    if (numPeople === "")
        {
            numPeople = 1;
        }
    
    if ( !(numPeople > 0 && amountBill <= Math.abs(Number.MAX_VALUE)) )
        {
            window.alert("Invalid Input!");
            return;
        }
        
        TipCalculation(amountBill, serviceRating, numPeople);
}

function TipCalculation(amountBill, serviceRating, numPeople) {
    
    var bill = (amountBill * (serviceRating / 100.0) ) / numPeople;
    
    ShowOutput(bill, numPeople);
}

function ShowOutput(bill, numPeople) {
    
    if (numPeople == 1)
        {
            if (document.getElementById("footer").style.display === "none")
                {
                    document.getElementById("footer").style.display = "block";
                }
            if (document.getElementById("footer").style.marginBottom != "17px")
                {
                    document.getElementById("footer").style.marginBottom = "17px";
                }
            
            if (document.getElementById("small-value").style.display = "block")
                {
                   document.getElementById("small-value").style.display = "none"; 
                }
            
        }
    
    else
        {
            if (document.getElementById("footer").style.display === "none")
                {
                   document.getElementById("footer").style.display = "block"; 
                }
            if (document.getElementById("footer").style.marginBottom != "0px")
                {
                    document.getElementById("footer").style.marginBottom = "0px";
                }
            if (document.getElementById("small-value").style.display === "none")
                {
                    document.getElementById("small-value").style.display = "block";
                }
        }
    
    document.getElementById("form").style.marginBottom = "0px";
    document.getElementById("form").style.borderBottom = "solid 1px darkslateblue";
    
    bill = Math.round(bill * 100) / 100;
    bill = bill.toFixed(2);
    document.getElementById("tip").innerHTML = bill;
}


document.getElementById("footer").style.display = "none";

document.getElementById("form").style.marginBottom = "86.51px";


document.getElementById("button").onclick = function() { GetInput(); return false; };