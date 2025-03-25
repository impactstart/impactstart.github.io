document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let email = document.getElementById("email").value; // Get email input
    let form = document.getElementById("subscribeForm"); // Get form element

    fetch("https://ez2i005mr3.execute-api.us-west-1.amazonaws.com/dev/subscribe", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email }) // Convert email to JSON format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        alert("Thank you for subscribing! Please check your inbox for a confirmation email.");
        form.reset(); // Reset the form after successful submission
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    });
});
