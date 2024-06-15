document.addEventListener('DOMContentLoaded', function() {
    // Function to create img elements
    function createImageElement(src, alt) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        return img;
    }

    // Array of image filenames
    const validImages = [
        "val_1214_DE5F4A.png",
        "val_1452_CBE489.png",
        "val_1783_AF12B7.png",
        "val_1871_731C2A.png"
    ];

    const invalidImages = [
        "inval_1123_D4E5F6.png",
        "inval_1334_4F5E6D.png",
        "inval_1456_A1B2C3.png",
        "inval_1879_7A8B9C.png"
    ];

    // Reference to the container divs in HTML
    const validImagesContainer = document.getElementById('valid-images');
    const invalidImagesContainer = document.getElementById('invalid-images');

    // Loop through validImages array and append images to validImagesContainer
    validImages.forEach(function(filename) {
        const img = createImageElement(`valid-tickets/${filename}`, `Valid Ticket ${filename}`);
        validImagesContainer.appendChild(img);
    });

    // Loop through invalidImages array and append images to invalidImagesContainer
    invalidImages.forEach(function(filename) {
        const img = createImageElement(`invalid-tickets/${filename}`, `Invalid Ticket ${filename}`);
        invalidImagesContainer.appendChild(img);
    });

    // Optional: Add event listeners for interaction (alerts)
    validImagesContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            alert(`This is a valid ticket: ${event.target.alt}`);
        }
    });

    invalidImagesContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            alert(`This is an invalid ticket: ${event.target.alt}`);
        }
    });
});
