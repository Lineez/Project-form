// Обязательные поля? присвоить класс '_required'
// Email? присвоить класс '_email'
// Остальные поля проверяются на '' (пустую строку)
// Во время отправки, пока сервер не ответит, форме присваивается класс '_sending'

document.addEventListener('DOMContentLoaded', () => {
  // Находим форму по селектору
  const form = document.querySelector('#form');
  // Адресс отправки
  const server = 'server.php';
  // Метод отправки
  const serverMethod = 'POST';
  // Если не заполнены обязательные поля -> показывается
  const formAlert = document.querySelector('.form__alert');

  // При отправке формы, вызываем функцию
  form.addEventListener('submit', formSend);

  // Отправка формы fetch
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    // получение данных формы из HTML
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      // Если форма прошла валидацию
      let response = await fetch(server, {
        method: serverMethod,
        body: formData,
      });
      if (response.ok) {
        // Если пришел ответ от сервера

        // Очистка полей формы
        form.reset();
        // Очистка кастомных полей
        formAlert.classList.remove('active');
        form.classList.remove('_sending');
      } else {
        // Если не пришел ответ от сервера
        formAlert.classList.remove('active');
        alert('Ошибка отправки на сервер - server.php');
        form.classList.remove('_sending');
      }
    } else {
      // Если форма не прошла валидацию
      formAlert.classList.add('active');
    }
  }

  function formValidate(form) {
    let error = 0;
    let required = document.querySelectorAll('._required');
    for (let index = 0; index < required.length; index++) {
      const input = required[index];
      formRemoveError(input);
      formRemoveEmpty(input);
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '' || input.textContent === 'Не выбрано') {
          formAddEmpty(input);
          error++;
        } else if (input.value === 'Обязательное поле!' || input.textContent === 'Обязательное поле!') {
          formAddEmpty(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddEmpty(input) {
    input.parentElement.classList.add('_empty');
    input.classList.add('_empty');
    if (input.type === 'text') {
      input.value = 'Обязательное поле!';
    } else {
      input.textContent = 'Обязательное поле!';
    }
  }
  function formRemoveEmpty(input) {
    input.parentElement.classList.remove('_empty');
    input.classList.remove('_empty');
    input.addEventListener('click', () => {
      input.classList.remove('_empty');
      input.parentElement.classList.remove('_empty');
      // input.style.color = '#000000'
      if (input.type === 'text') {
        input.value = '';
      } else {
        input.textContent = 'Не выбрано';
      }
    });
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
    // const regular = /^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const regular = /${1}/;
    return regular.test(input.value);
  }

  // function fileUpload() {
  //   const file = document.querySelector("input[type='file']");
  //   // Размер файла
  //   const fileSize = 10;
  //   const fileType = ['application/pdf', 'application/msword'];
  //   // Проверка типа файла
  //   if (!fileType.includes(file.type)) {
  //     alert(`Разрешены только ${fileType} типы файлов`);
  //     file.value = '';
  //   }
  //   if (file.size > fileSize * 1024 * 1024) {
  //     alert(`Размер файла не должен превышать ${fileSize} мб`);
  //     return;
  //   }
  // }
  // fileUpload();
});
