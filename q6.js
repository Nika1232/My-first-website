const images1 = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
];

let currentIndex = 0;
let showingFirstImage = true;

const mainImage1 = document.getElementById('mainImage1');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const pageNumber = document.getElementById('pageNumber');

function showImage(index) {
    mainImage1.src = images1[index];
    updatePageNumber(index);
}

function updatePageNumber(index) {
    pageNumber.textContent = `${index + 1} / ${images1.length}`;
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images1.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images1.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

mainImage1.addEventListener('click', function() {
    // Toggle showingFirstImage and refresh the image
    showingFirstImage = !showingFirstImage;
    showImage(currentIndex);
});

// Add keyboard event listener
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});

// Initial image display
showImage(currentIndex);