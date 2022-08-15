//Login Page
const submitBtn = document.getElementById('submit-btn');
//Add event handler to the submit button
submitBtn.addEventListener('click', function(){
    //Get the input field value from email field and password field
    const emailField = document.getElementById('email-field');
    const email= emailField.value;
    //Get the password from password field
    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    //Get the login form container
    const loginContainer = document.getElementById('login-form');
    //Verify the user email and password for login confirmation
    if(email === 'admin@cpbank.com' && pass === 'Admin@CP'){
        // console.log('Welcome to CP Bank Limited!');
        //Redirect the Page after login
        window.location.href = 'home.html';
    }
    else{
        //Create new paragraph to hold the error message
        const errorMsg = document.createElement('p');
        //Set the error message text
        errorMsg.innerText = 'Please Provide Valid Username and Password';
        //Set the error message styles
        errorMsg.style.color = '#D97706';
        errorMsg.style.fontWeight = '500';
        //Now push the error message to the login container or placeholder
        loginContainer.appendChild(errorMsg);
        return false;
    }
})

//Bank Transaction Page
//Set the default deposit amount
let depositBal = 0;
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-field').value;

    depositBal = despositBal + depositAmount;
    
    //Get the deposit amount placeholder
    const depositPlace = document.getElementById('deposit-amount');
    depositPlace = depositBal;
})












