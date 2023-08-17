document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    const previousDepositField = document.getElementById('deposit');
    const previousDepositAmountString = previousDepositField.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    if (depositAmount >= 0) {
        const currentDepositAmount = previousDepositAmount + depositAmount;
        previousDepositField.innerText = currentDepositAmount;
        depositField.value = '';

        const balanceField = document.getElementById('balance');
        const previousBalanceAmountString = balanceField.innerText;
        const previousBalanceAmount = parseFloat(previousBalanceAmountString);

        const currentTotalBalance = previousBalanceAmount + currentDepositAmount;
        balanceField.innerText = currentTotalBalance;
    }
    else {
        depositField.value = '';
        return alert('Please provide a valid amount');
    }

})