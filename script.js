document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.container div');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s forwards';
            }
        });
    });
    elements.forEach(el => observer.observe(el));
});
