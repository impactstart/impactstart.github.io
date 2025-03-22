fetch('arn:aws:execute-api:us-west-1:493544649401:ez2i005mr3/*/POST/subscribe', {  // Correct URL for US West (N. California)
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
})
.then(response => response.json())
.then(data => {
    alert('Thank you for subscribing! Please check your inbox for a confirmation email.');
    form.reset();  // Reset the form after successful submission
})
.catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
});
