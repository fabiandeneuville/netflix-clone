"use strict";
/******************** DATAS ********************/
/********** HEADER DATAS **********/
const headerTextsFr = [
    "S'identifier", "Films, séries TV et bien plus en illimité.", "Où que vous soyez. Annulez à tout moment.", "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.", "Adresse email", "Commencer >"
];
const headerTextsEn = [
    "Sign In", "Unlimited movies, TV shows, and more.", "Watch anywhere. Cancel anytime.", "Ready to watch? Enter your email to create or restart your membership.", "Email Address", "Get Started >"
];
/********** SECTION DATAS **********/
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
/********** FAQ DATAS **********/
const faqTitleFr = "Foire aux questions";
const faqTitleEn = "Frequently Asked Questions";
const faqItemsTitlesFr = [
    "Netflix, qu'est-ce que c'est ?",
    "Combien coûte Netflix ?",
    "Où puis-je regarder Netflix ?",
    "Comment puis-je annuler mon forfait ?",
    "Que puis-je regarder sur Netflix ?",
    "Est-ce que Netflix est adapté aux enfants ?"
];
const faqItemsTitlesEn = [
    "What is Netflix ?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?"
];
const faqItemsParagraphsFr = [
    "Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.",
    "Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !",
    "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires.",
    "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.",
    "Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.",
    "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.",
    "Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.",
    "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.",
    "Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques."
];
const faqItemsParagraphsEn = [
    "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR8.99 to EUR17.99 a month. No extra costs, no contracts.",
    "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
];
/********** FOOTER DATAS **********/
const linksTextsFr = [
    'FAQ', 'Centre d\'aide', 'Compte', 'Presse', 'Relations Investisseurs', 'Recrutement', 'Utiliser des cartes cadeaux', 'Acheter des cartes cadeaux', 'Modes de lecture', 'Conditions d\'utilisation', 'Confidentialité', 'Préférences de cookies', 'Mentions légales', 'Nous contacter', 'Test de vitesse', 'Garantie légale', 'Informations légales', 'Seulement sur Netflix'
];
const linksTextsEn = [
    'FAQ', 'Help Center', 'Account', 'Media Center', 'Investor Relations', 'Jobs', 'Redeem Gift Cards', 'Buy Gift Cards', 'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information', 'Contact Us', 'Speed Test', 'Legal Guarantee', 'Legal Notices', 'Only on Netflix'
];
/******************** DOM ELEMENTS SELECTION ********************/
/********** HEADER **********/
const languageSelection = document.querySelectorAll('.language-select');
const loginButton = document.querySelector('.login-button');
const headerTitle = document.querySelector('.header-title');
const headerSubtitle = document.querySelector('.header-subtitle');
const headerText = document.querySelector('.header-text');
/********** HEADER FORM **********/
const emailInput = document.querySelector('.header-form-input');
const emailInputPlaceholder = document.querySelector('.placeholder');
const headerFormButton = document.querySelector('.header-form-button');
const downloadBlockStatus = document.querySelector('.download-block-status');
/********** SECTIONS **********/
const sectionTitles = document.querySelectorAll('.section-heading');
const sectionTexts = document.querySelectorAll('.section-text');
const sectionTitlesArr = Array.from(sectionTitles);
const sectionTextsArr = Array.from(sectionTexts);
const youthFr = document.querySelector('.youth-img-fr');
const youthEn = document.querySelector('.youth-img-en');
/********** FAQ **********/
const faqTitle = document.querySelector('.faq-title');
const faqItemsTitlesList = document.querySelectorAll('.faq-item-title');
const faqItemsTitlesArr = Array.from(faqItemsTitlesList);
const faqParagraphsList = document.querySelectorAll('.faq-item-paragraph');
const faqParagraphsArr = Array.from(faqParagraphsList);
const faqButtonsList = document.querySelectorAll('.faq-item-button');
const faqButtonsArr = Array.from(faqButtonsList);
const faqContentsList = document.querySelectorAll('.faq-item-content');
const faqContentsArr = Array.from(faqContentsList);
const faqIconsList = document.querySelectorAll('.faq-item-icon');
const faqIconsArr = Array.from(faqIconsList);
/********** FOOTER **********/
const footerText = document.querySelector('.footer-text');
const footerItems = document.querySelectorAll('.footer-link');
const footerItemsArr = Array.from(footerItems);
/******************** VARIABLES ********************/
let email = "";
/******************** CONTENT RENDERING ********************/
youthEn.style.display = "none";
renderHeaderContent(headerTextsFr);
renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
renderSectionTexts(sectionTextsArr, sectionTextsFr);
renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesFr, faqTitleFr);
renderFaqParagraphs(faqParagraphsArr, faqItemsParagraphsFr);
renderFooterLinks(footerItemsArr, linksTextsFr);
/******************** FUNCTIONS ********************/
function renderHeaderContent(array) {
    loginButton.textContent = array[0];
    headerTitle.textContent = array[1];
    headerSubtitle.textContent = array[2];
    headerText.textContent = array[3];
    emailInputPlaceholder.textContent = array[4];
    headerFormButton.textContent = array[5];
}
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
function renderFaqTitles(arrayOfElements, arrayOfTitles, title) {
    faqTitle.textContent = title;
    for (let i = 0; i < arrayOfElements.length; i++) {
        arrayOfElements[i].textContent = arrayOfTitles[i];
    }
}
function renderFaqParagraphs(arrayOfParagraphs, arrayOfTexts) {
    for (let i = 0; i < arrayOfParagraphs.length; i++) {
        arrayOfParagraphs[i].textContent = arrayOfTexts[i];
    }
}
function renderFooterLinks(arrayOfLinks, arrayOfTexts) {
    for (let i = 0; i < arrayOfLinks.length; i++) {
        arrayOfLinks[i].textContent = arrayOfTexts[i];
    }
}
function openFaqItemContent(button, content, icon) {
    button.addEventListener('click', () => {
        icon.classList.toggle('opened');
        content.classList.toggle('hidden');
    });
}
/******************** LANGUAGE SETTING FUNCTION ********************/
languageSelection.forEach((select) => {
    select.addEventListener('change', () => {
        const pickedLanguage = select.value;
        if (pickedLanguage === "Français") {
            languageSelection.forEach((select) => select.value = "Français");
            renderHeaderContent(headerTextsFr);
            downloadBlockStatus.textContent = "Téléchargement en cours...";
            youthFr.style.display = "block";
            youthEn.style.display = "none";
            renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
            renderSectionTexts(sectionTextsArr, sectionTextsFr);
            renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesFr, faqTitleFr);
            renderFaqParagraphs(faqParagraphsArr, faqItemsParagraphsFr);
            footerText.innerHTML = 'Des questions ? Appelez le <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsFr);
        }
        else if (pickedLanguage === "English") {
            languageSelection.forEach((select) => select.value = "English");
            renderHeaderContent(headerTextsEn);
            downloadBlockStatus.textContent = "Downloading...";
            youthFr.style.display = "none";
            youthEn.style.display = "block";
            renderSectionTitles(sectionTitlesArr, sectionTitlesEn);
            renderSectionTexts(sectionTextsArr, sectionTextsEn);
            renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesEn, faqTitleEn);
            renderFaqParagraphs(faqParagraphsArr, faqItemsParagraphsEn);
            footerText.innerHTML = 'Questions? Call <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsEn);
        }
    });
});
/******************** FAQ BUTTONS LISTENERS ********************/
for (let i = 0; i < faqButtonsArr.length; i++) {
    openFaqItemContent(faqButtonsArr[i], faqContentsArr[i], faqIconsArr[i]);
}
/******************** EMAIL INPUT LISTENERS ********************/
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
