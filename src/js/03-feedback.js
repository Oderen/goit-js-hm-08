import throttle from "lodash.throttle";

const STORAGE_KEY_EMAIL = 'email';
const STORAGE_KEY_TEXTAREA = 'message';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    textarea: document.querySelector('textarea[name="message"]')
}

reloadingPage();

refs.form.addEventListener('submit', throttle(onSubmit, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));
refs.email.addEventListener('input', throttle(onEmail, 500));


function onSubmit (e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const textarea = formElements.message.value;

    const formData = {
        email,
        textarea
    };
    
    console.log(formData);

    e.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY_TEXTAREA);
    localStorage.removeItem(STORAGE_KEY_EMAIL);
}

function onInput (e) {
    localStorage.setItem(STORAGE_KEY_TEXTAREA, e.target.value);
}

function onEmail(e) {
    localStorage.setItem(STORAGE_KEY_EMAIL, e.target.value);
}

function reloadingPage () {
    const savedMessage = localStorage.getItem(STORAGE_KEY_TEXTAREA);
    const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);

    if (savedMessage) {
        refs.textarea.value = savedMessage;
        refs.email.value = savedEmail;
    }
}




