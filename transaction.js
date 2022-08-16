//Deposit amount to the bank and calculate current balance and deposit total
//Add Event handler to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    //Get the deposit input field
    const depositField = document.getElementById('deposit-field');
    //Get the Deposit value from the deposit input field
    const newDeposit = depositField.value;
    //Make new deposit amount string to float
    const newDepositAmount = parseFloat(newDeposit);

    //Get the current deposit amount placeholder and it's inner text
    const depositPlaceholder = document.getElementById('deposit-amount');
    const previousDeposit = depositPlaceholder.innerText;
    //Make previous deposit amount string to float
    const previousDepositAmount = parseFloat(previousDeposit);

    //Sum the total deposit amount to get current amount
    const currentDepositAmount = previousDepositAmount + newDepositAmount;

    //Updated Deposit Balance
    depositPlaceholder.innerText = currentDepositAmount;

    //Now updatet the Main Balance
    //Get balance current total placeholder
    const currentBalancePlaceholder = document.getElementById('balance-amount');
    //Get the Current Balace Amount
    const currentBalance = document.getElementById('balance-amount').innerText;
    //Make the current balance amount string to float
    const currentBalanceAmount = parseFloat(currentBalance);
    //Update the Current Balance
    const updatetCurrentBalance = currentBalanceAmount + newDepositAmount;
    //Push the updated Current balance to it's placeholder
    currentBalancePlaceholder.innerText = updatetCurrentBalance;

    //Clear the deposit input field after submittion
    depositField.value = '';
})

//Withdraw amount from the bank and calculate current balance and withdraw total
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //Get the Withdraw amount input field
    const withdrawField = document.getElementById('withdraw-field');
    //Get the withdraw value from the withdraw field
    const newWithdraw = withdrawField.value;
    //Convert the string value to float
    const newWithdrawAmount = parseFloat(newWithdraw);
    //Clear the Withdraw input field
    withdrawField.value = '';

    //Validation or Error Handler
    if(isNaN(newWithdrawAmount)){
        alert('Please Enter Valid Amount');
        return;
    }

    //Get the Previous Withdraw Placeholder
    const withdrawPlaceholder = document.getElementById('withdraw-amount');
    //Get the previous withdraw amount from it's innertext
    const previousWithdraw = withdrawPlaceholder.innerText;
    //Convert the string value to float
    const previousWithdrawAmount = parseFloat(previousWithdraw);

    //Calculate the current withdraw amount
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    //Set the Current withdraw amount to it's placeholder
    withdrawPlaceholder.innerText = currentWithdrawAmount;

    //Deduct the Balance from main balance based on withdraw amount
    //Get balance current total placeholder
    const currentBalancePlaceholder = document.getElementById('balance-amount');
    //Get the Current Balace Amount
    const currentBalance = document.getElementById('balance-amount').innerText;
    //Make the current balance amount string to float
    const currentBalanceAmount = parseFloat(currentBalance);
    //Update the Current Balance
    const updatetCurrentBalance = currentBalanceAmount - newWithdrawAmount;
    //Push the updated Current balance to it's placeholder
    currentBalancePlaceholder.innerText = updatetCurrentBalance;
    
    //Error if withdrawal amount is greater than current balance
    if(newWithdrawAmount > currentBalanceAmount){
        alert('You dont have enough Money');
        return;
    }

})