//getting value from input field 
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    inputField.value = '';
    return inputAmount;
}

//getting value from elements 
function previousElementFieldValue(elementId){
    const previousElementField = document.getElementById(elementId);
    const previousElementString = previousElementField.innerText;
    const previousElement = parseFloat(previousElementString);
    return previousElement;
}

//setting value in elements
function setAmount(setId, setCurrentAmount){
    const currentAmount = document.getElementById(setId);
    currentAmount.innerText = setCurrentAmount;
}


document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = getInputFieldValueById('deposit-input');
    const previousDepositAmount = previousElementFieldValue('deposit');
    const currentDepositAmount = previousDepositAmount + depositAmount;
    setAmount('deposit', currentDepositAmount);

    const previousBalanceAmount = previousElementFieldValue('balance');
    const currentBalanceAmount = previousBalanceAmount + depositAmount;
    setAmount('balance', currentBalanceAmount)
})