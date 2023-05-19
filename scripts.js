// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        smoothScroll(target);
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection.classList.contains('animate-projects') && isInViewport(projectsSection)) {
        projectsSection.classList.add('animate-projects');
    }
}

// Function to handle the click event
function handleClick() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection.classList.contains('animate-projects')) {
        projectsSection.classList.add('animate-projects');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Event listener for click event on the projects section
const projectsSection = document.getElementById('projects');
projectsSection.addEventListener('click', handleClick);

// Function to handle the page refresh event
function handleRefresh() {
    window.scrollTo(0, 0);
}

// Event listener for beforeunload event (triggered when the page is being refreshed)
window.addEventListener('beforeunload', handleRefresh);

