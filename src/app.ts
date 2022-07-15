/******************** DATAS ********************/

/********** HEADER DATAS **********/
const headerTextsFr : string[] = [
     "S'identifier", "Films, séries TV et bien plus en illimité.", "Où que vous soyez. Annulez à tout moment.", "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.", "Adresse email", "Commencer >"
];
const headerTextsEn : string[] = [
     "Sign In", "Unlimited movies, TV shows, and more.", "Watch anywhere. Cancel anytime.", "Ready to watch? Enter your email to create or restart your membership.", "Email Address", "Get Started >"
];

/********** SECTION DATAS **********/ 
const sectionTitlesFr : string[] = [
    'Regardez Netflix sur votre TV.',
    'Téléchargez vos séries préférées pour les regarder hors connexion.',
    'Où que vous soyez.',
    'Créez des profils pour les enfants.'
];
const sectionTextsFr : string[] = [
    'Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.',
    'Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.',
    'Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.',
    'Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.'
];
const sectionTitlesEn : string[] = [
    'Enjoy on your TV.',
    'Download your shows to watch offline.',
    'Watch everywhere.',
    'Create profiles for kids.'
];
const sectionTextsEn : string[] = [
    'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    'Save your favorites easily and always have something to watch.',
    'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
];

/********** FAQ DATAS **********/
const faqTitleFr : string = "Foire aux questions";
const faqTitleEn : string = "Frequently Asked Questions";
const faqItemsTitlesFr : string[] = [
    "Netflix, qu'est-ce que c'est ?",
    "Combien coûte Netflix ?",
    "Où puis-je regarder Netflix ?",
    "Comment puis-je annuler mon forfait ?",
    "Que puis-je regarder sur Netflix ?",
    "Est-ce aue Netflix est adapté aux enfants ?"
]
const faqItemsTitlesEn : string[] = [
    "What is Netflix ?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?"
]

/********** FOOTER DATAS **********/
const linksTextsFr : string[] = [
    'FAQ','Centre d\'aide','Compte','Presse','Relations Investisseurs','Recrutement','Utiliser des cartes cadeaux','Acheter des cartes cadeaux','Modes de lecture','Conditions d\'utilisation','Confidentialité','Préférences de cookies','Mentions légales','Nous contacter','Test de vitesse','Garantie légale','Informations légales','Seulement sur Netflix'
];
const linksTextsEn : string[] = [
    'FAQ','Help Center','Account','Media Center','Investor Relations','Jobs','Redeem Gift Cards','Buy Gift Cards','Ways to Watch','Terms of Use','Privacy','Cookie Preferences','Corporate Information','Contact Us','Speed Test','Legal Guarantee','Legal Notices','Only on Netflix'
];

/******************** DOM ELEMENTS SELECTION ********************/

/********** HEADER **********/
const languageSelection = document.querySelectorAll('.language-select') as NodeListOf<HTMLSelectElement>;
const loginButton = document.querySelector('.login-button') as HTMLButtonElement;
const headerTitle = document.querySelector('.header-title') as HTMLHeadingElement;
const headerSubtitle = document.querySelector('.header-subtitle') as HTMLHeadingElement;
const headerText = document.querySelector('.header-text') as HTMLParagraphElement;
/********** HEADER FORM **********/
const emailInput = document.querySelector('.header-form-input') as HTMLInputElement;
const emailInputPlaceholder = document.querySelector('.placeholder') as HTMLParagraphElement;
const headerFormButton = document.querySelector('.header-form-button') as HTMLButtonElement;
const downloadBlockStatus = document.querySelector('.download-block-status') as HTMLParagraphElement;
/********** SECTIONS **********/
const sectionTitles = document.querySelectorAll('.section-heading') as NodeListOf<HTMLHeadingElement>;
const sectionTexts = document.querySelectorAll('.section-text') as NodeListOf<HTMLParagraphElement>;
const sectionTitlesArr : HTMLHeadingElement[] = Array.from(sectionTitles);
const sectionTextsArr : HTMLParagraphElement[] = Array.from(sectionTexts);
const youthFr = document.querySelector('.youth-img-fr') as HTMLImageElement;
const youthEn = document.querySelector('.youth-img-en') as HTMLImageElement;
/********** FAQ **********/
const faqTitle = document.querySelector('.faq-title') as HTMLHeadingElement;
const faqItemsTitlesList = document.querySelectorAll('.faq-item-title') as NodeListOf<HTMLHeadingElement>;
const faqItemsTitlesArr : HTMLHeadingElement[] = Array.from(faqItemsTitlesList);
/********** FOOTER **********/
const footerText = document.querySelector('.footer-text') as HTMLParagraphElement;
const footerItems = document.querySelectorAll('.footer-link') as NodeListOf<HTMLAnchorElement>;
const footerItemsArr : HTMLAnchorElement[] = Array.from(footerItems);

/******************** VARIABLES ********************/

let email : string = "";

/******************** CONTENT RENDERING ********************/
youthEn.style.display = "none"

renderHeaderContent(headerTextsFr)
renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
renderSectionTexts(sectionTextsArr, sectionTextsFr);
renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesFr, faqTitleFr);
renderFooterLinks(footerItemsArr, linksTextsFr);

/******************** FUNCTIONS ********************/

function renderHeaderContent(array : string[]) : void {
    loginButton.textContent = array[0];
    headerTitle.textContent = array[1];
    headerSubtitle.textContent = array[2];
    headerText.textContent = array[3];
    emailInputPlaceholder.textContent = array[4];
    headerFormButton.textContent = array[5];
}

function renderSectionTitles(arrayOfHeadingElements : HTMLHeadingElement[], arrayOfTitles : string[]) : void {
    for(let i = 0 ; i < arrayOfHeadingElements.length ; i++){
        arrayOfHeadingElements[i].textContent = arrayOfTitles[i];
    }
};

function renderSectionTexts(arrayOfParagraphElements : HTMLParagraphElement[], arrayOfTexts : string[]) : void {
    for(let i = 0 ; i < arrayOfParagraphElements.length ; i++){
        arrayOfParagraphElements[i].textContent = arrayOfTexts[i];
    }
}

function renderFaqTitles(arrayOfElements : HTMLHeadingElement[], arrayOfTitles : string[], title : string) : void {
    faqTitle.textContent = title;
    for(let i = 0 ; i < arrayOfElements.length ; i++){
        arrayOfElements[i].textContent = arrayOfTitles[i]
    }
}

function renderFooterLinks(arrayOfLinks : HTMLAnchorElement[], arrayOfTexts : string[]) : void {
    for(let i = 0; i < arrayOfLinks.length; i ++){
        arrayOfLinks[i].textContent = arrayOfTexts[i]
    }
}

/******************** LANGUAGE SETTING FUNCTION ********************/

languageSelection.forEach(( select : HTMLSelectElement ) => {
    select.addEventListener('change', () => {
    
        const pickedLanguage = select.value;
        
        if(pickedLanguage === "Français"){
            languageSelection.forEach((select : HTMLSelectElement) => select.value = "Français")
            renderHeaderContent(headerTextsFr);
            downloadBlockStatus.textContent = "Téléchargement en cours...";
            youthFr.style.display = "block";
            youthEn.style.display = "none";
            renderSectionTitles(sectionTitlesArr, sectionTitlesFr);
            renderSectionTexts(sectionTextsArr, sectionTextsFr);
            renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesFr, faqTitleFr);
            footerText.innerHTML = 'Des questions ? Appelez le <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsFr);
            
        } else if(pickedLanguage === "English"){
            languageSelection.forEach(( select : HTMLSelectElement ) => select.value = "English")
            renderHeaderContent(headerTextsEn);
            downloadBlockStatus.textContent = "Downloading...";
            youthFr.style.display = "none";
            youthEn.style.display = "block";
            renderSectionTitles(sectionTitlesArr, sectionTitlesEn);
            renderSectionTexts(sectionTextsArr, sectionTextsEn);
            renderFaqTitles(faqItemsTitlesArr, faqItemsTitlesEn, faqTitleEn);
            footerText.innerHTML = 'Questions? Call <span class="phone">(+33) 0805-543-063</span>';
            renderFooterLinks(footerItemsArr, linksTextsEn);
        }
    })
})

/******************** EMAIL INPUT LISTENERS ********************/

emailInput.addEventListener('focus', () => {
    emailInputPlaceholder.classList.add('focusedInput');
});

emailInput.addEventListener('input', () => {
    email = emailInput.value;
});

emailInput.addEventListener('blur', () => {
    if(email === ""){
        emailInputPlaceholder.classList.remove('focusedInput');
    }
})

