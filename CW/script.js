// 1. Select the elements we need to interact with
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 2. Add an event listener to the button to 'listen' for clicks
themeToggleBtn.addEventListener('click', function() {
    
    // 3. Toggle the 'dark-mode' class on the body element
    // If it's not there, JS adds it. If it is there, JS removes it.
    bodyElement.classList.toggle('dark-mode');

    // 4. Update the button text so the user knows what clicking it will do next
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});