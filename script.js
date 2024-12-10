document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show alert with the form data
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear form fields
    document.getElementById('contactForm').reset();
});
