// Array of color options and associated filenames
const colors = [
    { color: 'red', filename: 'red-file.txt' },
    { color: 'blue', filename: 'blue-file.txt' },
    { color: 'green', filename: 'green-file.txt' },
    { color: 'yellow', filename: 'yellow-file.txt' },
    { color: 'purple', filename: 'purple-file.txt' },
];

let currentIndex = 0;

// Function to change color and display filename
function changeColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex].color;
    document.getElementById('filename').textContent = colors[currentIndex].filename;
}

// Event listeners for spacebar and click
document.body.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.body.addEventListener('click', changeColor);
