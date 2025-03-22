const form = document.getElementById('email-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email-input').value;

    // Send the email to AWS Lambda via API Gateway
    fetch('https://xyz12345.execute-api.us-east-1.amazonaws.com/dev/subscribe', {  // Replace with your actual API Gateway URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        // Show success message from Lambda
        alert(data.message);  // Display the success or failure message returned by Lambda
        form.reset();  // Reset the form after successful submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
});
