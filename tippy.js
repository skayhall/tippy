/*let tip10 = 0.10 ;
let tip15 = 0.15;
let tip20 = 0.20;*/



/*function to calculate tip amount */
function calcTip () {

    /*grab bill amount */
    let cost = document.querySelector('#tip-input').value;
    /*convert cost to number from string */
    let finalCost = Number(cost);
    /*display cost */
    document.querySelector("#cost-label").innerHTML=`Cost: $ ${finalCost}`;
    /*console.log("Number variable is" + typeof finalCost);*/

    /*grab cost and multiply by tip amount, then display display tip amount*/
    let tipAmount = document.querySelector('#tip-input').value * tip10;
    document.querySelector("#tip-label").innerHTML=`Tip Amount: $ ${tipAmount}`;
    /*console.log(typeof tipAmount);*/

    /*add cost and tip amount to get total cost */
    let ttlCost = finalCost + tipAmount;
    let ttlCostconv = Number(ttlCost);
    let finalttlCost = ttlCost + tipAmount;

    /*display final cost */
    document.querySelector("#total-label").innerHTML= "Final Cost: " + ttlCost;
    
    /*console.log(typeof finalttlCost);*/

    /*grab selected tip amount*/
    let sel = document.getElementById('tip-amount');
    /* print tip amount to console */
    console.log( sel.value );

    /*check value chosen and assign ti[p ammouny */
    if (sel.value === "10ten") {

        let tipValue = 0.10;
        console.log(tipValue);

    } else if (sel.value === "15fifteen") {

        let tipValue = 0.15;
        console.log(tipValue);

    }

        else if (sel.value === "20twenty") {

            let tipValue = 0.20;
            console.log(tipValue);

    }
   
    /*return tip amount */
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


