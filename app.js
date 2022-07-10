const languageSelection = document.querySelector('.language-select');

const loginButton = document.querySelector('.login-button');
const headerTitle = document.querySelector('.header-title');
const headerSubtitle = document.querySelector('.header-subtitle');
const headerText = document.querySelector('.header-text');
const emailInput = document.querySelector('.header-form-input');
const emailInputPlaceholder = document.querySelector('.placeholder');
const headerFormButton = document.querySelector('.header-form-button');

let email = "";

languageSelection.addEventListener('change', () => {

    const pickedLanguage = languageSelection.value;

    if(pickedLanguage === "Français"){
        loginButton.textContent = "S'identifier";
        headerTitle.textContent = "Films, séries TV et bien plus en illimité.";
        headerSubtitle.textContent = "Où que vous soyez. Annulez à tout moment.";
        headerText.textContent = "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.";
        emailInputPlaceholder.textContent = "Adresse email";
        headerFormButton.textContent = "Commencer >";

    } else if(pickedLanguage === "English"){
        loginButton.textContent = "Sign In";
        headerTitle.textContent = "Unlimited movies, TV shows, and more.";
        headerSubtitle.textContent = "Watch anywhere. Cancel anytime.";
        headerText.textContent = "Ready to watch? Enter your email to create or restart your membership.";
        emailInputPlaceholder.textContent = "Email Address";
        headerFormButton.textContent = "Get Started >";
    }
})

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