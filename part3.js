// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Buy Now Button Interactivity
const buyNowButtons = document.querySelectorAll('.buy-now');

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });
});
