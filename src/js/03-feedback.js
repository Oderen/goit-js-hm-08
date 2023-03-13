import throttle from "lodash.throttle";
 
const STORAGE_KEY = "feedback-form-state";
const data = {
};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    textarea: document.querySelector('textarea[name="message"]')
}

reloadingPage();

refs.form.addEventListener('submit', throttle(onSubmit, 500));
refs.textarea.addEventListener('input', throttle(onMessage, 500));
refs.email.addEventListener('input', throttle(onEmail, 500));


function onSubmit (e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        email,
        message
    };
    
    console.log(formData);

    e.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY);
    
}

function onMessage(e) {
    data.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onEmail(e) {
    data.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function reloadingPage() {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedForm) {

    if (savedForm.message) {
        data.message = savedForm.message;
        refs.textarea.value = savedForm.message;
    }
     
    if (savedForm.email) {
        data.email = savedForm.email;
        refs.email.value = savedForm.email;
    }
    }
}






