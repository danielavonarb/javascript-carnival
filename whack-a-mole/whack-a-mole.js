// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// - The ability to store or get references to the cells in the HTML table.
// - A function to randomly select which cell should show the mole.
// - A way to show a mole in the chosen cell.

const cells = document.getElementsByTagName('td')

// to convert cells HTML collection into an array
const array = Array.from(cells)
console.log(array)

// function to randomly select which cell should show the mole
function randomMole(arr) {
  // get random index vaule
  const randomIndex = Math.floor(Math.random() * arr.length)

  // get random item
  const cell = arr[randomIndex]
  cell.onclick = whackedMole
  // add picture of mole to cell
  return (cell.innerHTML = '<img id = "mole" src = "mole.png">')
}

randomMole(array)

// By this point you should have a mole that appears in a random cell when you load the page, and if you refresh your browser it should appear in a different cell (barring the 1/25 chance that it re-appears in the same cell again).

// Now you'll need to add an [onClick()]method for the mole that calls a function (say, named `whackedMole`) when you click on the image.

// The whackedMole function should remove the mole from the current cell and then, using a function that lets you re-use the code that you wrote earlier, add the mole to a new random cell.

function whackedMole(event) {
  const mole = event.target
  mole.remove()
  randomMole(array)
}
