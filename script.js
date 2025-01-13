document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const details = document.getElementById('details').value;
    const photo = document.getElementById('photo').files[0];
    const video = document.getElementById('video').files[0];

    const postContainer = document.getElementById('posts-container');

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postDetails = document.createElement('p');
    postDetails.textContent = details;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postDetails);

    if (photo) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photo);
        img.alt = title;
        img.style.maxWidth = '100%';
        postDiv.appendChild(img);
    }

    if (video) {
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(video);
        videoElement.controls = true;
        videoElement.style.maxWidth = '100%';
        postDiv.appendChild(videoElement);
    }

    postContainer.appendChild(postDiv);

    // Clear the form
    document.getElementById('upload-form').reset();
});
// Typing Text Animation
// Typing Text Animation
const typingElement = document.getElementById("typing");
const cursorElement = document.getElementById("cursor");

const textToType = "Stay updated with the latest news and events from the Los Angeles Fire Department"; // Text to type
const typingSpeed = 100; // Typing speed in milliseconds
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index); // Add one character at a time
        index++;
        setTimeout(typeText, typingSpeed); // Call function recursively
    } else {
        cursorElement.style.display = "inline"; // Keep the cursor visible
    }
}

// Start typing animation after the page loads
document.addEventListener("DOMContentLoaded", typeText);

