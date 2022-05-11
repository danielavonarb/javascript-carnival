// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

const arrayHead = [
  './images/head0.png',
  './images/head1.png',
  './images/head2.png',
  './images/head3.png',
  './images/head4.png',
  './images/head5.png',
]

const arrayBody = [
  './images/body0.png',
  './images/body1.png',
  './images/body2.png',
  './images/body3.png',
  './images/body4.png',
  './images/body5.png',
]

const arrayShoes = [
  './images/shoes0.png',
  './images/shoes1.png',
  './images/shoes2.png',
  './images/shoes3.png',
  './images/shoes4.png',
  './images/shoes5.png',
]

let headImgIndex = 0
let bodyImgIndex = 0
let shoesImgIndex = 0

let clothingIndex = 0

function chooseBodyPart() {
  clothingIndex++
  if (clothingIndex == 3) {
    clothingIndex = 0
  } else if (clothingIndex == 0) {
    clothingIndex = 3
    clothingIndex--
  }

  console.log(clothingIndex)
}

function changeHead() {
  if (clothingIndex == 0) {
    let headSrc = './images/head' + headImgIndex + '.png'
    head.src = headSrc

    headImgIndex++
    if (headImgIndex > arrayHead.length - 1) {
      headImgIndex = 0
    } else if (headImgIndex == 0) {
      headImgIndex = arrayHead.length - 1
      headImgIndex--
    }
  }
}

function changeBody() {
  if (clothingIndex == 1) {
    let bodySrc = './images/body' + bodyImgIndex + '.png'
    body.src = bodySrc

    bodyImgIndex++
    if (bodyImgIndex > arrayBody.length - 1) {
      bodyImgIndex = 0
    } else if (bodyImgIndex == 0) {
      bodyImgIndex = arrayBody.length - 1
      bodyImgIndex--
    }
  }
}

function changeShoes() {
  if (clothingIndex == 2) {
    let shoesSrc = './images/shoes' + shoesImgIndex + '.png'
    shoes.src = shoesSrc

    shoesImgIndex++
    if (shoesImgIndex > arrayShoes.length - 1) {
      shoesImgIndex = 0
    } else if (shoesImgIndex == 0) {
      shoesImgIndex = arrayShoes.length - 1
      shoesImgIndex--
    }
  }
}

document.onkeydown = checkKey

function checkKey(event) {
  event = event || window.event
  event.preventDefault()
  switch (event.keyCode) {
    //left
    case 37:
      changeShoes()
      changeBody()
      changeHead()
      break
    //up
    case 38:
      chooseBodyPart()
      break
    //right
    case 39:
      changeShoes()
      changeBody()
      changeHead()
      break
    //down
    case 40:
      chooseBodyPart()
      break
  }
}
