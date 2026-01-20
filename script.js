const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');
const translatableElements = document.querySelectorAll('.translatable');
const profileImage = document.getElementById('profile-image');

// Event listener for the Portuguese button
btnPt.addEventListener("click", () => {
    translatableElements.forEach(element => {
        element.textContent = element.getAttribute('data-pt');
    });

    // Update both buttons to speak Portuguese
    btnEn.setAttribute('aria-label', btnEn.getAttribute('data-pt')); 
    btnPt.setAttribute('aria-label', btnPt.getAttribute('data-pt')); 

    // Updates the image and document language
    profileImage.alt = profileImage.getAttribute('data-pt');
    document.documentElement.lang = "pt-BR";
});

// Event listener for the English button
btnEn.addEventListener("click", () => {
    translatableElements.forEach(element => {
        element.textContent = element.getAttribute('data-en');
    });

    // Updates both buttons to speak English
    btnEn.setAttribute('aria-label', btnEn.getAttribute('data-en')); 
    btnPt.setAttribute('aria-label', btnPt.getAttribute('data-en')); 

    // Updates the image and document language
    profileImage.alt = profileImage.getAttribute('data-en');
    document.documentElement.lang = "en-US";
});
