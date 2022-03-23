// const menu_btn = document.getElementById('menu_btn')
// const header = document.getElementsByClassName('header')

// menu_btn.addEventListener('click', () => {
//   header.classList.toggle('show')
// })

document
  .querySelector('.header')
  .addEventListener('click', () =>
    document.querySelector('.header').classList.toggle('show'),
  )
