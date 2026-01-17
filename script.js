// This code runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');

    // Listens for a click on the button
    button.addEventListener('click', () => {
        alert('You clicked the button!');
    });
});