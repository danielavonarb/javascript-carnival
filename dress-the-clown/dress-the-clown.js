// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//document.onkeydown = changeHead
document.onkeydown = clothing

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

let headImgIndex = 0

let clothingIndex = 0

function clothing(event) {
  const key = event.keyCode
  if (key == '38') {
    clothingIndex++
    if (clothingIndex == 4) clothingIndex = 0
  } else if (key == '40') {
    if (clothingIndex == 0) clothingIndex = 4
    clothingIndex--
  }

  console.log(clothingIndex)
}

function changeHead(event) {
  const key = event.keyCode
  let headSrc = './images/head' + headImgIndex + '.png'
  head.src = headSrc

  if (key == '39') {
    headImgIndex++
    if (headImgIndex == 6) headImgIndex = 0
  } else if (key == '37') {
    if (headImgIndex == 0) headImgIndex = 6
    headImgIndex--
  }
}
