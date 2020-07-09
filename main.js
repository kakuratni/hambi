function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    if(amountNumber > 10) {
        alert("You can order maximum 10 items");
    } else if (amountNumber < 1) {
        alert("You have to order minimum 1 item");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }







}