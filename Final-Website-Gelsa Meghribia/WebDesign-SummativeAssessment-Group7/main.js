document.addEventListener('DOMContentLoaded', function() {
    const supportLinks = document.querySelectorAll('.footer-box a');

    // Add click event listeners to support links
    supportLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('id');

            // Hide all support content sections
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = content.id === targetId ? 'block' : 'none';
            });
        });
    });
}); 