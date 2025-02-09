document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("FFDA0hcAZTDGO8tDi"); // Replace with your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const statusMessage = document.getElementById("status-message");

        emailjs.sendForm("service_8dwpnjc", "template_p2p289h", this)
            .then(function(response) {
                console.log("Email sent successfully:", response);
                statusMessage.innerHTML = "✅ Thank you! Your inquiry has been sent successfully.";
                statusMessage.style.color = "green";
                document.getElementById("contact-form").reset(); // Clear form
            }, function(error) {
                console.error("Failed to send email:", error);
                statusMessage.innerHTML = "❌ Oops! Something went wrong. Please try again.";
                statusMessage.style.color = "red";
            });
    });
});
