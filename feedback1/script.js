document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    const imageIdField = document.getElementById("imageIdField");
    const modal = document.getElementById("feedbackModal");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("feedbackForm");

    images.forEach(image => {
        image.addEventListener("click", function() {
            const imageId = image.id;
            imageIdField.value = imageId;
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        console.log("Image ID field value:", imageIdField.value);
        alert("Image ID field value: " + imageIdField.value); // Display the value in an alert box
        modal.style.display = "none";
    });
});
