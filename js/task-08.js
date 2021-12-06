"use strict"
const refs = {
    form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onSendForm);
function onSendForm(e) {
    e.preventDefault()

const {
    elements: { email, password }
} = e.currentTarget;
  
if (email.value === '' || password.value === '') {
    return alert("Поле должно быть заполнено!")
    };

    const formData = { email: email.value, password: password.value };
    console.log(formData);
    
    e.currentTarget.reset();
};