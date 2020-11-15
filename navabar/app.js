const dropdown = document.querySelector('.nav-dropdown')
const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', (e) => {
  console.log('clicked')
  dropdown.classList.toggle('show')
})
