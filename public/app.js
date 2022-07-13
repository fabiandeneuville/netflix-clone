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
// SECTION TEXTS HANDLING 
const sectionTitles = document.querySelectorAll('.section-heading');
const sectionTexts = document.querySelectorAll('.section-text');
const sectionTitlesArr = Array.from(sectionTitles);
const sectionTextsArr = Array.from(sectionTexts);
const sectionTitlesFr = [
    'Regardez Netflix sur votre TV.',
    'Téléchargez vos séries préférées pour les regarder hors connexion.',
    'Où que vous soyez.',
    'Créez des profils pour les enfants.'
];
const sectionTextsFr = [
    'Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.',
    'Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.',
    'Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.',
    'Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.'
];
const sectionTitlesEn = [
    'Enjoy on your TV.',
    'Download your shows to watch offline.',
    'Watch everywhere.',
    'Create profiles for kids.'
];
const sectionTextsEn = [
    'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    'Save your favorites easily and always have something to watch.',
    'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
];
function renderSectionTitles(arrayOfHeadingElements, arrayOfTitles) {
    for (let i = 0; i < arrayOfHeadingElements.length; i++) {
        arrayOfHeadingElements[i].textContent = arrayOfTitles[i];
    }
}
;
function renderSectionTexts(arrayOfParagraphElements, arrayOfTexts) {
    for (let i = 0; i < arrayOfParagraphElements.length; i++) {
        arrayOfParagraphElements[i].textContent = arrayOfTexts[i];
    }
}
renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
renderSectionTexts(sectionTextsArr, sectionTextsFr);
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
            renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
            renderSectionTexts(sectionTextsArr, sectionTextsFr);
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
            renderSectionTitles(sectionTitlesArr, sectionTitlesEn);
            renderSectionTexts(sectionTextsArr, sectionTextsEn);
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
