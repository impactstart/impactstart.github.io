fetch('https://ez2i005mr3.execute-api.us-west-1.amazonaws.com/dev/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: document.getElementById('email').value })  // Get the email input value
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    alert('Thank you for subscribing! Please check your inbox for a confirmation email.');
    document.getElementById('form').reset();  // Clear form
})
.catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
});
