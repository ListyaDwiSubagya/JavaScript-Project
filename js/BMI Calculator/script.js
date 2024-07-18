window.onload = () => {

    let btn = document.getElementById("btn");

	// Function for calculating BMI
    btn.addEventListener("click", calculateBMI)
} 

function calculateBMI(){

    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document.querySelector("#height").value);
    
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);
    
    let result = document.getElementById("result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "isi height";

    else if(weight === "" || isNaN(weight))
        result.innerHTML = "isi weight";
    
    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
        // Dividing as per the bmi conditions
        if (bmi < 18.6 ) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9 ) result.innerHTML = `Normal : <span>${bmi}</span>`;
        else result.innerHTML = `Over Weight : <span>${bmi}</span>`;

    }
}


