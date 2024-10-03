document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
const CONTRIBUTION = 95000;

function validateYear(input){
    // not allowing user to input anything other than numbers
    input.value = input.value.replace(/[^0-9]/g, '')

    // checking if user is entering year that is greater than 4 digits, won't allow
    if (input.value.length > 4){
        shortened = input.value.slice(0,4)
        input.value = shortened
    }
}

function validateNumber(input){
    const numericValue = parseFloat(input.value);

    // contribution cannot be greater than CONTRIBUTION value so limiting input
    if (numericValue > CONTRIBUTION){
        input.value = CONTRIBUTION;
    }

    if (input.value.includes('.')){
        validateDecimals(input);
    }
}

function validateDecimals(input){
    if (input.value.includes('.')){
        // splitting the whole number and the decimal part
        const numParts = input.value.split('.');

        // if the decimal is greater than 2
        if (numParts[1].length > 2){
            // only allowing the 2 decimal points
            input.value = numParts[0] + '.' + numParts[1].slice(0,2);
        }
    }
}

let birthYear;
let contributedAmount;
let amountWithdrawnPre;
let amountWithdrawnThisYear;

document.getElementById("form_submit").onclick = function(){
  birthYear = document.getElementById("birth_year").value;
  contributedAmount = document.getElementById("total_contribution").value;
  amountWithdrawnPre = document.getElementById("withdrawn_before").value;
  amountWithdrawnThisYear = document.getElementById("withdrawn_this_year").value;
}