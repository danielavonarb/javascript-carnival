// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const cells = document.getElementsByTagName('td')

// to convert cells HTML collection into an array
const array = Array.from(cells)

// function to randomly select which cell should show the mole
function randomMole(arr) {
  // get random index vaule
  const randomIndex = Math.floor(Math.random() * arr.length)

  // get random item
  const cell = arr[randomIndex]

  // create img element
  const image = document.createElement('img')
  image.src = 'mole.png'
  image.setAttribute('id', 'mole')

  // append img element to cell
  newCell = cell.appendChild(image)

  // add onclick method
  image.onclick = whackedMole
}

randomMole(array)

// The whackedMole function should remove the mole from the current cell and then, using a function that lets you re-use the code that you wrote earlier, add the mole to a new random cell.
function whackedMole(event) {
  const mole = event.target
  const audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()
  mole.remove()
  randomMole(array)
}
