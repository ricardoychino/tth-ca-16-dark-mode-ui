const availableLayouts = ['light', 'dark'];

const body = document.querySelector(`body`)
const menuToggle = document.getElementById(`nav-toggle`)
const menu = document.getElementById(`menu`)

/* Change layout */
Array.from(document.querySelectorAll(`.toggle-mode`)).forEach(toggleButton => {
  toggleButton.addEventListener('click', function () {
    // Remove possible layout classes first
    availableLayouts.forEach(layout => {
      body.classList.remove(layout)
    })

    const mode = this.getAttribute('data-mode')

    // Set the selected layout
    body.classList.add(mode)
  })
})

/* Menu toggling */
menuToggle.addEventListener('click', function (e) {
  console.log(this)
  console.log(menu)
  e.preventDefault() /* Just in case */

  /* Aria attribute */
  this.setAttribute('aria-expanded', !menu.classList.contains('open'))
  /* Change icon */
  this.children[0].classList.toggle('fa-xmark')
  this.children[0].classList.toggle('fa-bars')
  /* Toggle menu */
  menu.classList.toggle('open')
})