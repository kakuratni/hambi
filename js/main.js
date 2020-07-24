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

let weatherData = {
    "weathers": [
        {
            "daynumber": 1, // Monday
            "temperature": -10
        },
        {
            "daynumber": 0, // Sunday
            "temperature": -20
        },
        {
            "daynumber": 2, // Tuesday
            "temperature": 3
        },
        {
            "daynumber": 3, // Wednesday
            "temperature": 11
        },
        {
            "daynumber": 5, // Friday
            "temperature": 26
        },
        {
            "daynumber": 4, // Thursday
            "temperature": 39
        },
        {
            "daynumber": 6, // Saturday
            "temperature": 12
        }
    ],
    "offers": [
        {
            "upperLimit": 0,
            "offerMessage": "Today we offer hot chocolate"
        },
        {
            "upperLimit": 7,
            "offerMessage": "Today we offer mint tea"
        },
        {
            "upperLimit": 15,
            "offerMessage": "Today we offer carrot cake"
        },
        {
            "upperLimit": 20,
            "offerMessage": "Today's special is lemon ice cream"
        },
        {
            "upperLimit": 1000,
            "offerMessage": "Today's offer is yummy strawberry ice cream"
        }
    ]
};

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function(event) {
        if (!confirm("sure u want to delete " + this.title)) {
            event.preventDefault();
        }
    });
}

function weatherWidget() {
    let day = document.querySelector("#day").value;
    let tempDiv = document.querySelector("#temp");
    let offer = document.querySelector("#offer");
    let temp = weatherData.weathers[weatherData.weathers[day].daynumber].temperature;
    let offerMessage = showOffer(temp).offerMessage;
    tempDiv.innerHTML = temp + "&degC";
    offer.innerHTML = offerMessage;
}

function showOffer(temp) {
    for (let offer of weatherData.offers) {
        if (temp <= offer.upperLimit)
            return offer;
    }

}

let minTemp = weatherData.weathers[0].temperature;
let maxTemp = weatherData.weathers[0].temperature;
let avgTemp = 0;
let tempsSum = 0;

function setMinTemp() {
    for (i = 0; i < Object(weatherData).weathers.length; i++) {
        if (weatherData.weathers[i].temperature < minTemp) {
            minTemp = weatherData.weathers[i].temperature;
        }
    }
}
setMinTemp();
document.querySelector("#minimumtemperature").innerHTML = "Minimum temperature this week: " + minTemp + "&degC";

function setMaxTemp() {
    for (i = 0; i < Object(weatherData).weathers.length; i++) {
        if (weatherData.weathers[i].temperature > maxTemp) {
            maxTemp = weatherData.weathers[i].temperature;
        }
    }
}
setMaxTemp();
document.querySelector("#maximumtemperature").innerHTML = "Maximum temperature this week: " + maxTemp + "&degC";

function setAvgTemp() {
    for (i = 0; i < Object(weatherData).weathers.length; i++) {
        tempsSum += weatherData.weathers[i].temperature;
    }
    avgTemp = Math.round(tempsSum / Object(weatherData).weathers.length);
}
setAvgTemp();
document.querySelector("#averagetemperature").innerHTML = "Average temperature this week: " + avgTemp + "&degC";
