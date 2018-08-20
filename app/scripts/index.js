import '../styles/main.scss'
import '@fortawesome/fontawesome-free/js/all.js'
import '../images/favicon.png'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

(function () {
  // Nodes
  const burger = document.querySelector('.burger')
  const sideNav = document.querySelector('.holygrail-nav')
  const body = document.querySelector('body')
  const readMoreNodes = document.querySelectorAll('.read-more')

  // Methods
  const toggleOpen = () => {
    sideNav.classList.toggle('open')
    body.classList.toggle('open')
    burger.classList.toggle('open')
  }

  const assignActive = () => {
    const currentActive = document.querySelector('.active')

    if (currentActive) {
      currentActive.classList.remove('active')
    }

    if (location.hash) {
      const newActive = document.querySelector('.nav-item[href="' + location.hash + '"]')
      if (newActive) {
        newActive.classList.toggle('active')
      }
    } else {
      location.hash = '#about'
      assignActive()
    }
  }

  const readMore = (nodeName) => {
    const toMakeOpen = document.querySelector('.project-description.' + nodeName)
    toMakeOpen.classList.toggle('open')
  }

  assignActive()

  burger.addEventListener('click', function () {
    toggleOpen()
  })

  window.addEventListener('hashchange', function () {
    assignActive()
    toggleOpen()
  })

  for (let i = 0; i < readMoreNodes.length; i++) {
    const currentNode = readMoreNodes[i]

    currentNode.addEventListener('click', function () {
      readMore(this.getAttribute('name'))
    })
  }
})()
