let count = 0

const counter = document.querySelector('.number')
const buttons = document.querySelectorAll('.btn')

const changeInnerTxt = () => (counter.innerText = count)
changeInnerTxt()

const changeNum = (e) => {
  cls = e.target.classList
  switch (true) {
    case cls.contains('decrease'):
      count -= 1
      break
    case cls.contains('increase'):
      count += 1
      break
    default:
      count = 0
  }
  changeInnerTxt()
  switch (true) {
    case count < 0:
      counter.style.color = 'red'
      break
    case count > 0:
      counter.style.color = 'green'
      break
    default:
      counter.style.color = 'black'
  }
}

buttons.forEach((btn) => {
  btn.addEventListener('click', changeNum)
})
