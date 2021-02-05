'use strict'
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


document.getElementById('date').valueAsDate = new Date()

function setRange() {
  let range = document.querySelector('.form__range')
  let formValue = document.querySelector('.form__value')

  range.addEventListener('change', () => {
    let rangeValue = range.value
    formValue.innerHTML = rangeValue
  })
}
setRange()

function showInfo() {
  const info = document.querySelectorAll('.form__info')
  const infoBlock = document.querySelectorAll('.form__info-block')

  info.forEach((el, key) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('active')) {
        el.classList.remove('active')
        infoBlock[key].classList.remove('active')
      } else {
        info.forEach((e) => {
          e.classList.remove('active')
        })
        infoBlock.forEach((e) => {
          e.classList.remove('active')
        })
        el.classList.add('active')
        infoBlock[key].classList.add('active')
      }
    })
  })
}
showInfo()

function addFile() {
  let file = document.querySelector('.form__file')
  let size = document.querySelector('.form__file-name-size')
  const fileBox = document.querySelector('.form__file-box')
  const fileKey = document.querySelector('.form__key')
  file.addEventListener('change', () => {
    const fileSize = file.files[0].size
    const fileName = file.files[0].name
    const fileError = document.querySelector('.form__weight')
    if (fileSize < 10 * 1024 * 1024) {
      size.textContent = `${fileName}, ${calcSize(fileSize)} мб`
      fileBox.classList.add('active')
      fileKey.classList.add('active')
      fileError.classList.remove('active')
      if ((file.value = '')) {
        size.textContent = ''
        fileBox.classList.remove('active')
        fileKey.classList.remove('active')
        fileError.classList.remove('active')
      }
    } else {
      fileError.classList.add('active')
    }
  })
  removeFile(size, fileBox, fileKey)

  function removeFile(size, fileBox, fileKey) {
    let fileClean = document.querySelector('.form__file-clean')
    fileClean.addEventListener('click', () => {
      size.textContent = ''
      fileBox.classList.remove('active')
      fileKey.classList.remove('active')
    })
  }
  function calcSize(fileSize) {
    if (Math.round(fileSize / 1024 / 1024) <= 0) {
      return (fileSize = 0.1)
    }
  }
}
addFile()

function select() {
  const selectButton = document.querySelector('#category')
  const selectDiv = document.querySelector('#category-div')
  const select = document.querySelector('.form__select')
  const selectInput = document.querySelectorAll('.form__select-value')
  const selectLabel = document.querySelectorAll('.form__select-name')

  function showSelect() {
    selectDiv.addEventListener('click', () => {
      select.classList.toggle('active')
      selectDiv.classList.toggle('active')
      selectDiv.style.color = 'black'
    })
  }

  function enterSelect() {
    selectInput.forEach((el, key) => {
      el.addEventListener('click', () => {
        selectButton.value = selectLabel[key].textContent
        selectDiv.textContent = selectLabel[key].textContent
      })
    })
  }

  function hideSelect() {
    selectLabel.forEach((el) => {
      el.addEventListener('click', () => {
        select.classList.remove('active')
      })
    })
  }
  showSelect()
  enterSelect()
  hideSelect()
}
select()

function resizeTextarea() {
  const textarea = document.querySelectorAll('textarea')
  textarea.forEach((el) => {
    el.addEventListener('keyup', function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px'
      }
    })
  })
}
resizeTextarea()
