'use strict'
@@include('./_form.js')

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
