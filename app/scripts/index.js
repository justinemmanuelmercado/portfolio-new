import '../styles/main.scss'
import '@fortawesome/fontawesome-free/js/all.js'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

(function () {
  const links = document.getElementsByClassName('nav-item')
  const burger = document.querySelector('.burger')
  const sideNav = document.querySelector('.holygrail-nav')

  burger.addEventListener('click', function () {
    sideNav.classList.toggle('open')
  })

  for (var i = 0; i < links.length; i++) {
    const currentLink = links[i]

    currentLink.addEventListener('click', function () {
      const currentActive = document.querySelector('.active')
      currentActive.classList.remove('active')
      this.classList.add('active')
    })
  }
})()
