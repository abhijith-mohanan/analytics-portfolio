let weight = 150;
let distance = 'domestic';

console.log(weight);
console.log(distance);

let cargoWeight = 250;
let isInternational = true;

console.log(cargoWeight);
console.log(isInternational);

if (cargoWeight <= 100) {
    console.log("Light cargo - rate is 5");
} else if (cargoWeight <= 300) {
    console.log("Medium cargo - rate is 4");
} else {
    console.log("Heavy cargo - rate is 3");
}


function calculateRate(weight) {
    if (weight <= 100) {
        return 5;
    } else if (weight <= 300) {
        return 4;
    } else {
        return 3;
    }               
}

console.log(calculateRate(80));
console.log(calculateRate(250));
console.log(calculateRate(500));




function calculateShippingCost(weight, distance) {
    let rate = calculateRate(weight);
    let cost = weight * rate;

    if (distance === 'international'){
        cost *= 1.2;
    }
    return `Shipping cost for ${weight}kg (${distance}): $${cost.toFixed(2)}`;
}
console.log(calculateShippingCost(80, 'domestic'));
console.log(calculateShippingCost(250, 'international'));
console.log(calculateShippingCost(500, 'domestic'));


let shipments = ["Innsbruck", "Vienna", "Salzburg", "Graz"];

console.log(shipments[0]);
console.log(shipments.length);


// for (let i = 0;i < shipments.length; i++){
//     console.log(`Shipment to: ${shipments[i]}`);
// }   



shipments.forEach(function(city){
    console.log(`Shipment to: ${city}`);
});



// let shipment = {
//     id: 1,
//     origin:"Vienna",
//     destination: "Innsbruck",
//     weight: 250,
//     isInternational: false
//     };

// console.log(shipment.id);
// console.log(shipment.origin);
// console.log(shipment.destination);
// console.log(shipment.weight);
// console.log(shipment.isInternational);


let shipment = [
    {id: 1, origin:"Innsbruck", weight: 80, isInternational: false},
    {id: 2, origin:"Vienna" , weight: 250, isInternational: false},
    {id: 3, origin:"Graz", weight: 500, isInternational: true}
]

shipment.forEach(function(shipment){
    console.log(`ID: ${shipment.id} | From: ${shipment.origin} | Weight: ${shipment.weight}kg`);
});