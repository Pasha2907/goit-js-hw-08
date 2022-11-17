import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formSubmit);

function formInput() {
  const formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  //   console.log(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function cheksField() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  } else {
    refs.input.value = '';
    refs.textarea.value = '';
  }
}
cheksField();

function formSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
