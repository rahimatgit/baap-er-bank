document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const previousWithdrawField = document.getElementById('withdraw');
    const previousWithdrawAmountString = previousWithdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


    const currentWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    previousWithdrawField.innerText = currentWithdrawAmount;
    withdrawField.value = '';

    const balanceField = document.getElementById('balance');
    const previousBalanceAmountString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const currentTotalBalance = previousBalanceAmount - currentWithdrawAmount;
    balanceField.innerText = currentTotalBalance;

})