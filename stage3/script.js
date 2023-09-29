document.addEventListener("DOMContentLoaded", () => {
    const responseContainer = document.getElementById("responseContainer");
    const responseText = document.getElementById("responseText");
    const validRequestButton = document.getElementById("validRequest");
    const errorRequestButton = document.getElementById("errorRequest");
    

    function displayResponse(response) {
        responseText.textContent = JSON.stringify(response, null, 2);
    }

    validRequestButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://github.com/ViktoriiaVerych", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    displayResponse(data);
                } else {
                    displayResponse({ error: "Error." });
                }
            }
        };
        xhr.send();
    });

    errorRequestButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/NonExistentUser123", true); // Intentional error
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    displayResponse(data);
                } else {
                    displayResponse({ error: "Error fetching data" });
                }
            }
        };
        xhr.send();
    });
});
