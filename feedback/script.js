document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    const imageIdField = document.getElementById("imageIdField");
    const form = document.getElementById("feedbackForm");

    images.forEach(image => {
        image.addEventListener("click", function() {
            const imageId = image.id;
            imageIdField.value = imageId;
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("Image ID field value:", imageIdField.value);
        alert("Image ID field value: " + imageIdField.value); 
    });
});
