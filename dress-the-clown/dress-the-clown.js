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

//let headImgIndex = 0
//let bodyImgIndex = 0
//let shoesImgIndex = 0

// I got the idea of putting the indexes from Joseph's video
let indexes = [0, 0, 0]
let bodyParts = [head, body, shoes]
let imgsArray = [arrayHead, arrayBody, arrayShoes]
let clothingIndex = 0

function chooseBodyPartUp() {
  clothingIndex++
  if (clothingIndex >= 3) {
    clothingIndex = 0
  }
  console.log(clothingIndex)
}

function chooseBodyPartDown() {
  clothingIndex--
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
  console.log(clothingIndex)
}

function changeClothes() {
  let index = indexes[clothingIndex]
  let bodyPart = bodyParts[clothingIndex]
  let imgs = imgsArray[clothingIndex]

  index++
  if (index > imgs.length - 1) {
    index = 0
  } else if (index <= 0) {
    index = imgs.length - 1
    index--
  }

  // I got this line of code from Joseph's video
  indexes[clothingIndex] = index
  bodyPart.src = imgs[index]
}

// This was my unrefactored code

/*function changeClothes() {
  if (clothingIndex == 0) {
    // change head
    let headSrc = './images/head' + headImgIndex + '.png'
    head.src = headSrc

    headImgIndex++
    if (headImgIndex > arrayHead.length - 1) {
      headImgIndex = 0
    } else if (headImgIndex == 0) {
      headImgIndex = arrayHead.length - 1
      headImgIndex--
    }
  } else if (clothingIndex == 1) {
    //chage body
    let bodySrc = './images/body' + bodyImgIndex + '.png'
    body.src = bodySrc

    bodyImgIndex++
    if (bodyImgIndex > arrayBody.length - 1) {
      bodyImgIndex = 0
    } else if (bodyImgIndex == 0) {
      bodyImgIndex = arrayBody.length - 1
      bodyImgIndex--
    }
  } else if (clothingIndex == 2) {
    // change shoes
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
}*/

document.onkeydown = checkKey

function checkKey(event) {
  event = event || window.event
  event.preventDefault()
  switch (event.keyCode) {
    //left
    case 37:
      changeClothes()
      break
    //up
    case 38:
      chooseBodyPartUp()
      break
    //right
    case 39:
      changeClothes()
      break
    //down
    case 40:
      chooseBodyPartDown()
      break
  }
}
