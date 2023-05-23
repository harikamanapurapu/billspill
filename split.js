
function calculationOfTip5(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn5").innerText)
        const tipValue=(totalBill*(tipPercentage/100)).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalpp
    }
    function calculationOfTip10(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn10").innerText)
        const tipValue=(totalBill*(tipPercentage/100)).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalpp

    }
function calculationOfTip15(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn15").innerText)
        const tipValue=((totalBill*(tipPercentage/100))).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalbillpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalbillpp

}
function calculationOfTip25(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn25").innerText)
        const tipValue=(totalBill*(tipPercentage/100)).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalbillpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalbillpp

    }
function calculationOfTip50(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn50").innerText)
        const tipValue=(totalBill*(tipPercentage/100)).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalbillpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalbillpp

}
function calculationOfTip75(){
        let totalBill=parseFloat(document.getElementById("inputnum").value)
        let peopleCount=parseFloat(document.getElementById("people").value)
        const tipPercentage=parseFloat(document.getElementById("btn75").innerText)
        const tipValue=(totalBill*(tipPercentage/100)).toFixed(2);
        const tipvaluepp=tipValue/peopleCount
        const billpp=totalBill/peopleCount
        const totalbillpp=billpp+tipvaluepp
        document.getElementById("amountip").textContent="₹"+tipvaluepp
        document.getElementById("totalamount").textContent="₹"+totalbillpp
}
function onincrement(){
    document.getElementById("people").stepUp(1);
}
function ondecrement(){
    document.getElementById("people").stepDown(1);
}
function zero(){
    document.getElementById("people").value= "0";
}
function Reset(){
    document.getElementById("inputnum").value=""
    document.getElementById("people").value=""
    document.getElementById("amountip").textContent="₹0.00"
    document.getElementById("totalamount").textContent="₹0.00"
 }


