document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        fetch('https://zh0zhjkuea.execute-api.us-west-1.amazonaws.com/EmailSubscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Display success message
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error subscribing. Please try again later.');
        });
    });
});
