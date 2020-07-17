function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber)
}

function showSumPrice(price = 1000, amountNumber = 1) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("You can order maximum 10 items");
    } else if (amountNumber < 1) {
        alert("You have to order minimum 1 item");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}

let temps = [25, 35, 0, 3, 85, 19, -2];

/* function populateDay() {
    let dateFunc = new Date().getDay;
    let day = document.querySelector("#day").value;
    day.innerHTML.value = dateFunc;
} */

function weatherWidget() {
    let day = document.querySelector("#day").value;
    let tempDiv = document.querySelector("#temp");
    tempDiv.innerHTML = temps[day] + "&degC";
}

let minTemp = temps[0];
let maxTemp = temps[0];
let avgTemp = 0;
let daysCount = 0;
let tempsSum = 0;

function setMinTemp() {
    for (i = 0; i < temps.length; i++) {
        if (temps[i] < minTemp) {
            minTemp = temps[i];
        }
    }
} 
setMinTemp();
document.querySelector("#minimumtemperature").innerHTML = "Minimum temperature this week: " + minTemp + "&degC";

function setMaxTemp() {
    for (i = 0; i < temps.length; i++) {
        if (temps[i] > maxTemp) {
            maxTemp = temps[i];
        }
    }
} 
setMaxTemp();
document.querySelector("#maximumtemperature").innerHTML = "Maximum temperature this week: " + maxTemp + "&degC";

function setAvgTemp() {
    for (i = 0; i < temps.length; i++) {
        tempsSum += temps[i];
        daysCount ++;
    }
    avgTemp = Math.round(tempsSum / daysCount);
}
setAvgTemp();
document.querySelector("#averagetemperature").innerHTML = "Average temperature this week: " + avgTemp + "&degC";