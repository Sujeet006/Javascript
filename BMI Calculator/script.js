
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#heightInput").value);
    const weight = parseFloat(document.querySelector("#weightInput").value);

    const result = document.querySelector(".result");

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide valid height and weight.";
    } else {
        const bmi = ((weight*10000) / (height * height)).toFixed(2);
        if(bmi<18.5)
            result.innerHTML = `<span>Your BMI is: ${bmi} => Underweight </span>`;
        else if(bmi>24.9)
            result.innerHTML = `<span>Your BMI is: ${bmi} => Overweight </span>`;
        else 
            result.innerHTML = `<span>Your BMI is: ${bmi} => Normal weight </span>`;
    }
});


