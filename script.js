document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!email) {
        alert('Please enter an email address.');
        return;
    }

    fetch('https://ez2i005mr3.execute-api.us-west-1.amazonaws.com/dev/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.message || 'Network response was not ok');
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Thank you for joining the waitlist!');
        document.getElementById('subscription-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
});
