import '../styles/main.scss'
import '@fortawesome/fontawesome-free/js/all.js'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

(function () {
  const burger = document.querySelector('.burger')
  const sideNav = document.querySelector('.holygrail-nav')
  const body = document.querySelector('body')
  const toggleOpen = () => {
    sideNav.classList.toggle('open')
    body.classList.toggle('open')
  }
  const assignActive = () => {
    const currentActive = document.querySelector('.active')

    if (!location.hash) {
      return false
    }

    if (currentActive) {
      currentActive.classList.remove('active')
    }

    const newActive = document.querySelector('.nav-item[href="' + location.hash + '"]')
    newActive.classList.toggle('active')
  }

  assignActive()

  burger.addEventListener('click', function () {
    toggleOpen()
  })

  window.addEventListener('hashchange', function () {
    console.log(location.hash)
    assignActive()
    toggleOpen()
  })
})()
