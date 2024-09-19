document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("upload-form");
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const predictionSection = document.getElementById("prediction-section");
    const predictionResult = document.getElementById("predictionResult");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Crop Image">`;
                predictionSection.style.display = "block";
                predictionResult.innerHTML = "रोग पहचान: संभावित फसल रोग XYZ";
            };

            reader.readAsDataURL(file);
        }
    });
});