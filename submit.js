// Submit form functions 

const formEl = document.querySelector('.form-group')
const userName = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const messageEl = document.querySelector('#message')
const buttonEl = document.querySelector('#button')
const statusMsg = document.querySelector('#status')

let formSubmission = {
    user: userName.value,
    email: emailEl.value, 
    message: messageEl.value, 
}

// Create the send(f) function to send values from the form to the forSubmission object 
// API to be learnt as well as MySQL 
// Process on hold - Flip NFT on progress


// Want to display the error or success message right here
