// GLOBAL VARS

const basicColors = ['Red', '#F15025', 'Rgba(133,122,200)', 'Green']
const clickMeBtn = document.querySelector('#btn')
const mainBg = document.querySelector('main')
const bgColorDiv = document.querySelector('#bg-color')

// EVENT LISTENERS
clickMeBtn.addEventListener('click', () => getColor())

// FUNCTIONS
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}

const getColor = () => {
  let simpleColor
  if (window.location.href.endsWith('hex.html')) {
    simpleColor = random_hex_color_code()
  } else {
    simpleColor = basicColors[Math.floor(Math.random() * basicColors.length)]
  }
  mainBg.style.backgroundColor = simpleColor
  bgColorDiv.innerHTML = `Background Color : <span style="color: ${simpleColor}">${simpleColor}</span>`
}

getColor()
