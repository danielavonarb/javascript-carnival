// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = changeHead

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

let headImgIndex = 0

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
