// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

const unicorns = document.querySelectorAll('img')

const unicorn1 = document.getElementById('unicorn1')
const unicorn2 = document.getElementById('unicorn2')
const unicorn3 = document.getElementById('unicorn3')

const images = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}

let currentImageU1 = 0
let currentImageU2 = 0
let currentImageU3 = 0

function unicornClicked(event) {
  let unicorn = event.target

  if (unicorn == unicorn1) {
    currentImageU1++
    unicorn1.src = images[currentImageU1]
    if (currentImageU1 == images.length - 1) {
      alert('I am a happy unicorn!')
      currentImageU1 = -1
    }
  } else if (unicorn == unicorn2) {
    currentImageU2++
    unicorn2.src = images[currentImageU2]
    if (currentImageU2 == images.length - 1) {
      alert('I am a happy unicorn!')
      currentImageU2 = -1
    }
  } else if (unicorn == unicorn3) {
    currentImageU3++
    unicorn3.src = images[currentImageU3]
    if (currentImageU3 == images.length - 1) {
      alert('I am a happy unicorn!')
      currentImageU3 = -1
    }
  }
}
