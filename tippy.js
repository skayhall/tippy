let tip10 = 0.10 ;
let tip15 = 0.15;
let tip20 = 0.20;

function calcTip () {

    let cost = document.querySelector('#tip-input').value;
    let finalCost = Number(cost);
    document.querySelector("#cost-label").innerHTML=`Cost: $ ${finalCost}`;
    console.log("Number variable is" + typeof finalCost);

    let tipAmount = document.querySelector('#tip-input').value * tip10;
    document.querySelector("#tip-label").innerHTML=`Tip Amount: $ ${tipAmount}`;
    console.log(typeof tipAmount);


    let ttlCost = finalCost + tipAmount;
    let ttlCostconv = Number(ttlCost);
    let finalttlCost = ttlCost + tipAmount;

    document.querySelector("#total-label").innerHTML= "Final Cost: " + ttlCost;
    
    console.log(typeof finalttlCost);


    return tipAmount;

}

/*
function getInput () {

    let personName = document.querySelector('#name-input').value;
    console.log(`${personName}`)

    if (personName === "Shanakay" || personName === "Kay") {

        console.log(`Correct + ${personName}`)
        document.querySelector("#name-label").innerHTML="Correct";


    } else {

        console.log("Wrong")
        document.querySelector("#name-label").innerHTML="Wrong";

    }

}

*/


