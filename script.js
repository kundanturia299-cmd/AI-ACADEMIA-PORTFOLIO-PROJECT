const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Thank you, ${name}! Your message has been received. I will get back to you soon.`);

    contactForm.reset();
});