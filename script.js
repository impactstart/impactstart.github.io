// Proxy URL (for testing purposes only)
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// Original API endpoint
const apiUrl = 'https://ez2i005mr3.execute-api.us-west-1.amazonaws.com/dev/subscribe';

// Modify fetch request to use the proxy
fetch(proxyUrl + apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: document.getElementById('email').value })  // Ensure email input is retrieved correctly
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    alert('Thank you for subscribing! Please check your inbox for a confirmation email.');
    document.getElementById('form').reset();  // Ensure form is referenced correctly
})
.catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
});
