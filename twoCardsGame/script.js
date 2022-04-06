const arrayOfCards = [];

// задавать селекторами надо

const cardsSt = document.querySelector('.oneCard');
const parentCards = document.querySelector('.container-cards-game');
makeDivsForGame();
makeArrForGame();
const divs = document.querySelectorAll('.cards');
contributeJpgsInDivs();

console.log(divs);

function openTwoCards(amount = 7) {
  const back = document.querySelectorAll('.back');
    if (back.length == ((amount*2) - 3)) {
      closeAll();
    }
}

function closeAll() {
  divs.forEach((item, i) => {
    divs[i].classList.add('back');
  })
}

function makeArrForGame(amount = 7, blancArr = arrayOfCards) {
  for (let i = 0; i <= (amount - 1); i++) {
    blancArr.push(i+1);
    blancArr.push(i+1);
  }
  shuffle(blancArr);
  return blancArr;
}

function makeDivsForGame(amount = 7) {
  for (let i = 0; i <= ((amount * 2 - 1)); i++) {
    let iDiv = document.createElement('div');
    iDiv.classList.add('cards', 'back')
    parentCards.append(iDiv);

  }
}

function contributeJpgsInDivs(blancArr = arrayOfCards) {
  divs.forEach((item, i) =>{
    divs[i].style.cssText = `background: url("img/${blancArr[i]}.jpg") no-repeat; background-size: cover;`;
    divs[i].classList.add(blancArr[i]);

  })
}

// function makeClassForClones(blancArr = arrayOfCards) {
//   blancArr.forEach((itemAr, iAr) => {
//   divs.forEach((item, i) => {
//       if ((i+1) == itemAr) {
//         divs[i].classList.add(i);
//       }
//     })
//   })
// }

function checkCard() {

}

function mageOneGameData(arrCountCards) {

  arrCountCards.forEach((item, i) => {
    console.log(item);
  });

}

const arrEqualClass = [];
//через эвент надо делать логику
parentCards.addEventListener('click', event => {
  const target = event.target;

  if (arrEqualClass.length < 2) {
    arrEqualClass.slice(0,2);
  }

  if (target && target.classList.contains('back')) {
    target.classList.remove('back');

  }
  else if (target && target.classList.contains('cards')) {
    target.classList.add('back');
  }
  openTwoCards();
  arrEqualClass.push(target.classList.item(1));
  console.log(arrEqualClass)
})

console.log(cardsSt)











function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
