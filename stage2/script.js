// Create 30 buttons with dates for September (manually or with help of js).

// And an image element with empty src, and some text elements.

// By clicking upon that those buttons a function is called. So the button should know it’s number (date).

// When user clicks upon a button, a fetch request is being sent. 

// Based on its response, image and texts are filled with received data. 

// Also please catch errors if any, and for future dates throw errors manually. If error is caught, no image is shown and display some error message to user.

// In ‘finally’ statement also do something that user know that request was completed.  Al least also show a message ‘request completed’.

// So basically user should click on dates and see an updated card with image and descriptions updated (or error if future date). The point is to show you can handle promises, get its successful responses and catch errors and finalise them. 
// Css doesn’t matter and wont have impact on the grade, though please make that simple and appealing, at least provide sizes for image and border for that image and description card.

const apiKey = 'oWRR2hcw3mEXYC7RwOP9UEHCjaBVbc4iNdmO8VIe';
const baseURL = 'https://api.nasa.gov/planetary/apod';

const dateButtonsContainer = document.querySelector('.dateButtons');
const apodImage = document.getElementById('cImage');
const apodTitle = document.getElementById('cTitle');
const apodDescription = document.getElementById('cDesc');
const errorMessage = document.getElementById('error');
const completedMessage = document.getElementById('completed');


for (let day = 1; day <= 30; day++) {
    const button = document.createElement('button');
    button.textContent = `2023-09-${day}`;
    button.addEventListener('click', () => fetchAPODData(button.textContent));
    dateButtonsContainer.appendChild(button);
}

function fetchAPODData(date) {
    errorMessage.classList.add('hidden');
    completedMessage.classList.add('hidden');

    const url = `${baseURL}?api_key=${apiKey}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            apodImage.src = data.url;
            apodTitle.textContent = data.title;
            apodDescription.textContent = data.explanation;
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.classList.remove('hidden');
        })
        .finally(() => {
            completedMessage.classList.remove('hidden');
        });
}
