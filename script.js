// Display the current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Load counter value from localStorage
    const countElement = document.getElementById('count');
    let visits = localStorage.getItem('visits') || 0;
    countElement.textContent = visits;
    
    // Increment counter button functionality
    const incrementButton = document.getElementById('increment');
    incrementButton.addEventListener('click', function() {
        visits = parseInt(visits) + 1;
        countElement.textContent = visits;
        localStorage.setItem('visits', visits);
    });
});

// Add simple animation on page load
window.onload = function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    
    header.style.opacity = '0';
    sections.forEach(section => {
        section.style.opacity = '0';
    });
    
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
        
        let delay = 500;
        sections.forEach(section => {
            setTimeout(() => {
                section.style.transition = 'opacity 1s';
                section.style.opacity = '1';
            }, delay);
            delay += 500;
        });
    }, 200);
};