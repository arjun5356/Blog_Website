// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll back to the top when the button is clicked
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// Select the toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add event listener to the button to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Optionally, save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check if dark mode was previously enabled (based on localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
