"use strict";
const languageSelection = document.querySelectorAll('.language-select');
const loginButton = document.querySelector('.login-button');
const headerTitle = document.querySelector('.header-title');
const headerSubtitle = document.querySelector('.header-subtitle');
const headerText = document.querySelector('.header-text');
const emailInput = document.querySelector('.header-form-input');
const emailInputPlaceholder = document.querySelector('.placeholder');
const headerFormButton = document.querySelector('.header-form-button');
const footerText = document.querySelector('.footer-text');
let email = "";
// FOOTER ITEMS HANDLING
const footerItems = document.querySelectorAll('.footer-link');
const footerItemsArr = Array.from(footerItems);
const linksTextsFr = [
    'FAQ', 'Centre d\'aide', 'Compte', 'Presse', 'Relations Investisseurs', 'Recrutement', 'Utiliser des cartes cadeaux', 'Acheter des cartes cadeaux', 'Modes de lecture', 'Conditions d\'utilisation', 'Confidentialité', 'Préférences de cookies', 'Mentions légales', 'Nous contacter', 'Test de vitesse', 'Garantie légale', 'Informations légales', 'Seulement sur Netflix'
];
const linksTextsEn = [
    'FAQ', 'Help Center', 'Account', 'Media Center', 'Investor Relations', 'Jobs', 'Redeem Gift Cards', 'Buy Gift Cards', 'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information', 'Contact Us', 'Speed Test', 'Legal Guarantee', 'Legal Notices', 'Only on Netflix'
];
function renderFooterLinks(arrayOfLinks, arrayOfTexts) {
    for (let i = 0; i < arrayOfLinks.length; i++) {
        arrayOfLinks[i].textContent = arrayOfTexts[i];
    }
}
renderFooterLinks(footerItemsArr, linksTextsFr);
// LANGUAGE SELECTION HANDLING
languageSelection.forEach((select) => {
    select.addEventListener('change', () => {
        const pickedLanguage = select.value;
        if (pickedLanguage === "Français") {
            languageSelection.forEach((select) => select.value = "Français");
            loginButton.textContent = "S'identifier";
            headerTitle.textContent = "Films, séries TV et bien plus en illimité.";
            headerSubtitle.textContent = "Où que vous soyez. Annulez à tout moment.";
            headerText.textContent = "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.";
            emailInputPlaceholder.textContent = "Adresse email";
            headerFormButton.textContent = "Commencer >";
            footerText.innerHTML = 'Des questions ? Appelez le <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsFr);
        }
        else if (pickedLanguage === "English") {
            languageSelection.forEach((select) => select.value = "English");
            loginButton.textContent = "Sign In";
            headerTitle.textContent = "Unlimited movies, TV shows, and more.";
            headerSubtitle.textContent = "Watch anywhere. Cancel anytime.";
            headerText.textContent = "Ready to watch? Enter your email to create or restart your membership.";
            emailInputPlaceholder.textContent = "Email Address";
            headerFormButton.textContent = "Get Started >";
            footerText.innerHTML = 'Questions? Call <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsEn);
        }
    });
});
emailInput.addEventListener('focus', () => {
    emailInputPlaceholder.classList.add('focusedInput');
});
emailInput.addEventListener('input', () => {
    email = emailInput.value;
});
emailInput.addEventListener('blur', () => {
    if (email === "") {
        emailInputPlaceholder.classList.remove('focusedInput');
    }
});
