const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');
const btnTheme = document.getElementById('theme-toggle');
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
    const labelPt = btnPt.getAttribute('data-pt');
btnPt.title = labelPt;
const labelEnPt = btnEn.getAttribute('data-pt');
btnEn.title = labelEnPt; 
const btnThemeLabelPt = btnTheme.getAttribute('data-pt');
btnTheme.title = btnThemeLabelPt;


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
    const labelEn = btnEn.getAttribute('data-en');
btnEn.title = labelEn;
const labelPtEn = btnPt.getAttribute('data-en');
btnPt.title = labelPtEn;

const btnThemeLabelEn = btnTheme.getAttribute('data-en');
btnTheme.title = btnThemeLabelEn;


    // Updates the image and document language
    profileImage.alt = profileImage.getAttribute('data-en');
    document.documentElement.lang = "en-US";
});

// Event listener for the Theme Toggle button

// Dentro do Event listener do Theme Toggle:
btnTheme.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const themeIcon = document.getElementById('theme-icon'); // Seleciona o span interno
    
    // Descobre o idioma atual para traduzir o label do tema na hora
    const currentLang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = '🌙'; 
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.textContent = '☀️';
    }

    // Atualiza o ARIA-LABEL e TITLE do botão de tema logo após a troca
    const newTheme = document.documentElement.getAttribute("data-theme");
    const label = newTheme === "dark" 
        ? (currentLang === 'pt' ? "Mudar para Modo Claro" : "Switch to Light Mode")
        : (currentLang === 'pt' ? "Mudar para Modo Escuro" : "Switch to Dark Mode");
    
    btnTheme.setAttribute('aria-label', label);
    btnTheme.title = label;
});
