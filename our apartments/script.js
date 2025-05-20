// Function to change the main preview image
function changeImage(src, target) {
    document.getElementById(target).src = src;
}

// Function to show the overlay and enlarge the selected image
function openOverlay(src) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay-image').src = src;
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Function to change the image in the overlay
function changeOverlayImage(src) {
    document.getElementById('overlay-image').src = src;
}

function scrollGallery(galleryId, direction) {
    // Get the thumbnails container for the specific gallery
    const gallery = document.getElementById(galleryId);
    const thumbnails = gallery.querySelector('.thumbnails');
    
    // Determine the scroll amount based on the direction
    const scrollAmount = 200; // Adjust this value to control how much the gallery scrolls
    const currentScrollPosition = thumbnails.scrollLeft;
    
    if (direction === 'left') {
        // Scroll left
        thumbnails.scrollLeft = currentScrollPosition - scrollAmount;
    } else if (direction === 'right') {
        // Scroll right
        thumbnails.scrollLeft = currentScrollPosition + scrollAmount;
    }
}