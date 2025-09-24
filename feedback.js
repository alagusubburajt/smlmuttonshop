const whatsappNumber = "919943067917";

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const feedback = document.getElementById("feedback").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !feedback || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const text = `Hello, I am ${name}.\nFeedback Type: ${feedback}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappURL, "_blank");

    this.reset();
});
