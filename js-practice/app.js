let btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function() {
    let weight = document.getElementById("weightInput").value;
    weight = parseFloat(weight);
    let result = document.getElementById("result");
    if (isNaN(weight) || weight <= 0) {
        result.textContent = "Please enter a valid weight greater than 0.";
        return;
        }

    let rate;
    if (weight <= 100) {
        rate = 5;
    } else if (weight <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    let cost = weight * rate;
    
    result.textContent = `Shipping cost for ${weight}kg: $${cost.toFixed(2)}`;
});