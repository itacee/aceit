// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Buy Button Click Event
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://www.facebook.com/profile.php?id=61571741203228', '_blank');
    });
});
