
// Display Current Year
let year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();


// Contact Form
let form = document.getElementById("contactForm");

form.onsubmit = function(event) {
    event.preventDefault();

    // Get Form Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check Form Details
    if (name != "" && email != "" && message != "") {

        // Email Details
        let myEmail = "yourmail@example.com";

        let subject = encodeURIComponent("Portfolio Message");

        let body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        // Show Message
        document.getElementById("result").innerHTML =
            "Opening your email application...";

        // Open Email Application
        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + subject +
            "&body=" + body;
    }
};
