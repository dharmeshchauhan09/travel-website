document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || destination === '' || message === '') {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = "Your Form submitted successfully!";
        formMessage.style.color = 'green';
        this.reset();
    }
});
