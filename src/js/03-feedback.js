import throttle from "lodash.throttle";
 
const STORAGE_KEY = "feedback-form-state";
const data = {
};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea[name="message"]')
}

reloadingPage();

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onMessage, 500));
refs.form.addEventListener('input', throttle(onEmail, 500));


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
    delete data.message
    delete data.email
    
    localStorage.removeItem(STORAGE_KEY);
    
}

function onMessage(e) {
    if (e.target !== refs.message) {
        return;
    }

    data.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onEmail(e) {
    if (e.target !== refs.email) {
        return;
    }

    data.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function reloadingPage() {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedForm) {

    if (savedForm.message) {
        data.message = savedForm.message;
        refs.message.value = savedForm.message;
    }
     
    if (savedForm.email) {
        data.email = savedForm.email;
        refs.email.value = savedForm.email;
    }
    }
}




