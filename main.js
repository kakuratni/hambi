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

let temps = [-2, 0, 3, 11, 19, 25, 35]

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

