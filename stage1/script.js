// Create an input element.

// Create a function reverseString that takes a string as parameter and returns the same string but in reversed order (‘blabla’ would be ‘albalb’);

// One second after input value changes, call reverseString on it and display in under the input; 

// So user types value inside input box, and 1 second later he/she sees that below reversed;

document.addEventListener("DOMContentLoaded", function () {
    const dateButtons = document.querySelector(".date-buttons");
    const image = document.getElementById("image");
    const description = document.getElementById("description");

    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    for (let i = 1; i <= 30; i++) {
        const button = document.createElement("button");
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

        if (i < currentDay) {
            button.textContent = date.toLocaleDateString("en-US", { day: "2-digit" });
            button.addEventListener("click", () => fetchData(date));
        } else {
            button.textContent = "Error (Future Date)";
            button.classList.add("error-button");
        }

        dateButtons.appendChild(button);
    }

    function fetchData(date) {
        fetch("your_api_endpoint_here?date=" + date.toISOString())
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                image.src = data.imageURL;
                description.textContent = data.description;
            })
            .catch(error => {
                image.src = ""; // Clear the image on error
                description.textContent = "Error: " + error.message;
            })
            .finally(() => {
                console.log("Request completed");
            });
    }
});
