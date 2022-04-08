window.addEventListener('DOMContentLoaded', () => {

  const arrayOfCards = [];
  const parentCards = document.querySelector('.container-cards-game');
  makeDivsForGame();
  makeArrForGame();
  const divs = document.querySelectorAll('.cards');
  contributeJpgsInDivs();

  console.log(divs);

  function closeAll() {
    divs.forEach((item) => {
      if (!item.classList.contains('right')) {
        item.classList.add('back');
      }
    })
  }

  function makeArrForGame(amount = 7, blancArr = arrayOfCards) {
    for (let i = 0; i <= (amount - 1); i++) {
      blancArr.push(i + 1);
      blancArr.push(i + 1);
    }
    shuffle(blancArr);
    return blancArr;
  }

  function makeDivsForGame(amount = 7) {
    for (let i = 0; i <= ((amount * 2 - 1)); i++) {
      let iDiv = document.createElement('div');
      iDiv.classList.add('cards')
      parentCards.append(iDiv);

    }
  }

  function contributeJpgsInDivs(blancArr = arrayOfCards) {
    divs.forEach((itemDivs, i) => {
      itemDivs.style.cssText = `background: url("img/${blancArr[i]}.jpg") no-repeat; background-size: cover;`;
      itemDivs.classList.add(blancArr[i]);
      itemDivs.classList.add('back')
    })
  }

  function check2Cards() {
    divs.forEach((item) => {
      count = 0
      if (!item.contains('back')) {
        count++;
        if (count = 2) {
          return true
        } else {
          return false
        }
      }
    })
  }

  function is2CardTrue() {
    if (divs.classList.item(1)) {

    }
  }

  function mageOneGameData(arrCountCards) {

    arrCountCards.forEach((item, i) => {
      console.log(item);
    });
  }

  const arrEqualClass = [];
  let lastEvent
  //через эвент надо делать логику тоже самое что if click
  parentCards.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('back')) {
      arrEqualClass.push(target.classList.item(1));

      console.log(arrEqualClass.length)
      if (arrEqualClass.length == 1 || arrEqualClass.length == 2) {
        target.classList.remove('back')

        if (arrEqualClass[0] === arrEqualClass[1]) {
          
          console.log('y')
          divs.forEach(item => {
            if (!item.classList.contains('back'))
              item.classList.add('right')
          })
        }
      } else {
        arrEqualClass.splice(0, 2)
        closeAll()
        target.classList.remove('back')
      }
    }
  })


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
});
