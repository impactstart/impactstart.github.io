// script.js

// Add an event listener for the form submission
document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page on submit

    // Get the email value from the input field
    const email = document.getElementById('email-input').value;

    // Validate the email
    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send the email to the API
    fetch('https://tv7h471wj4.execute-api.us-west-1.amazonaws.com/EmailSubscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email }) // Send the email as JSON
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        alert(data.message); // Show success or error message from the API
    })
    .catch(error => {
        alert('There was an error subscribing. Please try again later.');
    });
});
