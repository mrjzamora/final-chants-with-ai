// Ensure the script runs only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all image items and the modal elements
    const imageItems = document.querySelectorAll('.image-item');
    const modal = document.getElementById('chantModal');
    const modalContent = document.getElementById('chantText');
    const span = document.getElementsByClassName('close')[0];

    // Add click event listeners to each image item
    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            const chantPath = item.getAttribute('data-chant');
            fetch(chantPath)
                .then(response => response.text())
                .then(text => {
                    modalContent.textContent = text;
                    modal.style.display = 'block';
                })
                .catch(error => console.error('Error fetching chant:', error));
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
