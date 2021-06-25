let NewGame = document.querySelector(".app__button-new-game");
let ToTrash = document.querySelector(".app__button-trash-game");
let StepInGame = document.querySelector(".app__button-step-game");
let secondPlayerList = document.querySelector(".second-player-list")
let firstPlayerList = document.querySelector(".first-player-list")
let secondPlayerCards = document.querySelectorAll(".second-player-cards");
let firstPlayerCards = document.querySelectorAll(".first-player-cards");
let coloda = [
    {
        prioritet: 1,
        nominal: "3",
        mast: "cherva",
        link: "image/3-cherva.png",
    },
    {
        prioritet: 1,
        nominal: "3",
        mast: "buba",
        link: "image/3-buba.png",
    },
    {
        prioritet: 1,
        nominal: "3",
        mast: "cresta",
        link: "image/3-cresta.png",
    },
    {
        prioritet: 1,
        nominal: "3",
        mast: "pyka",
        link: "image/3-pyka.png",
    },
    {
        prioritet: 2,
        nominal: "4",
        mast: "cherva",
        link: "image/4-cherva.png",
    },
    {
        prioritet: 2,
        nominal: "4",
        mast: "buba",
        link: "image/4-buba.png",
    },
    {
        prioritet: 2,
        nominal: "4",
        mast: "cresta",
        link: "image/4-cresta.png",
    },
    {
        prioritet: 2,
        nominal: "4",
        mast: "pyka",
        link: "image/4-pyka.png",
    },
    {
        prioritet: 3,
        nominal: "5",
        mast: "cherva",
        link: "image/5-cherva.png",
    },
    {
        prioritet: 3,
        nominal: "5",
        mast: "buba",
        link: "image/5-buba.png",
    },
    {
        prioritet: 3,
        nominal: "5",
        mast: "cresta",
        link: "image/5-cresta.png",
    },
    {
        prioritet: 3,
        nominal: "5",
        mast: "pyka",
        link: "image/5-pyka.png",
    },
    {
        prioritet: 4,
        nominal: "6",
        mast: "cherva",
        link: "image/6-cherva.png",
    },
    {
        prioritet: 4,
        nominal: "6",
        mast: "buba",
        link: "image/6-buba.png",
    },
    {
        prioritet: 4,
        nominal: "6",
        mast: "cresta",
        link: "image/6-cresta.png",
    },
    {
        prioritet: 4,
        nominal: "6",
        mast: "pyka",
        link: "image/6-pyka.png",
    },
    {
        prioritet: 5,
        nominal: "7",
        mast: "cherva",
        link: "image/7-cherva.png",
    },
    {
        prioritet: 5,
        nominal: "7",
        mast: "buba",
        link: "image/7-buba.png",
    },
    {
        prioritet: 5,
        nominal: "7",
        mast: "cresta",
        link: "image/7-cresta.png",
    },
    {
        prioritet: 5,
        nominal: "7",
        mast: "pyka",
        link: "image/7-pyka.png",
    },
    {
        prioritet: 6,
        nominal: "8",
        mast: "cherva",
        link: "image/8-cherva.png",
    },
    {
        prioritet: 6,
        nominal: "8",
        mast: "buba",
        link: "image/8-buba.png",
    },
    {
        prioritet: 6,
        nominal: "8",
        mast: "cresta",
        link: "image/8-cresta.png",
    },
    {
        prioritet: 6,
        nominal: "8",
        mast: "pyka",
        link: "image/8-pyka.png",
    },
    {
        prioritet: 7,
        nominal: "9",
        mast: "cherva",
        link: "image/9-cherva.png",
    },
    {
        prioritet: 7,
        nominal: "9",
        mast: "buba",
        link: "image/9-buba.png",
    },
    {
        prioritet: 7,
        nominal: "9",
        mast: "cresta",
        link: "image/9-cresta.png",
    },
    {
        prioritet: 7,
        nominal: "9",
        mast: "pyka",
        link: "image/9-pyka.png",
    },
    {
        prioritet: 8,
        nominal: "10",
        mast: "cherva",
        link: "image/10-cherva.png",
    },
    {
        prioritet: 8,
        nominal: "10",
        mast: "buba",
        link: "image/10-buba.png",
    },
    {
        prioritet: 8,
        nominal: "10",
        mast: "cresta",
        link: "image/10-cresta.png",
    },
    {
        prioritet: 8,
        nominal: "10",
        mast: "pyka",
        link: "image/10-pyka.png",
    },
    {
        prioritet: 9,
        nominal: "J",
        mast: "cherva",
        link: "image/J-cherva.png",
    },
    {
        prioritet: 9,
        nominal: "J",
        mast: "buba",
        link: "image/J-buba.png",
    },
    {
        prioritet: 9,
        nominal: "J",
        mast: "cresta",
        link: "image/J-cresta.png",
    },
    {
        prioritet: 9,
        nominal: "J",
        mast: "pyka",
        link: "image/J-pyka.png",
    },
    {
        prioritet: 10,
        nominal: "Q",
        mast: "cherva",
        link: "image/Q-cherva.png",
    },
    {
        prioritet: 10,
        nominal: "Q",
        mast: "buba",
        link: "image/Q-buba.png",
    },
    {
        prioritet: 10,
        nominal: "Q",
        mast: "cresta",
        link: "image/Q-cresta.png",
    },
    {
        prioritet: 10,
        nominal: "Q",
        mast: "pyka",
        link: "image/Q-pyka.png",
    },
    {
        prioritet: 11,
        nominal: "K",
        mast: "cherva",
        link: "image/K-cherva.png",
    },
    {
        prioritet: 11,
        nominal: "K",
        mast: "buba",
        link: "image/K-buba.png",
    },
    {
        prioritet: 11,
        nominal: "K",
        mast: "cresta",
        link: "image/K-cresta.png",
    },
    {
        prioritet: 11,
        nominal: "K",
        mast: "pyka",
        link: "image/K-pyka.png",
    },
    {
        prioritet: 12,
        nominal: "A",
        mast: "cherva",
        link: "image/A-cherva.png",
    },
    {
        prioritet: 12,
        nominal: "A",
        mast: "buba",
        link: "image/A-buba.png",
    },
    {
        prioritet: 12,
        nominal: "A",
        mast: "cresta",
        link: "image/A-cresta.png",
    },
    {
        prioritet: 12,
        nominal: "A",
        mast: "pyka",
        link: "image/A-pyka.png",
    },
    {
        prioritet: 13,
        nominal: "2",
        mast: "cherva",
        link: "image/2-cherva.png",
    },
    {
        prioritet: 13,
        nominal: "2",
        mast: "buba",
        link: "image/2-buba.png",
    },
    {
        prioritet: 13,
        nominal: "2",
        mast: "cresta",
        link: "image/2-cresta.png",
    },
    {
        prioritet: 13,
        nominal: "2",
        mast: "pyka",
        link: "image/2-pyka.png",
    },
    {
        prioritet: 14,
        nominal: "Joker",
        mast: "red",
        link: "image/red-joker.png",
    },
    {
        prioritet: 14,
        nominal: "Joker",
        mast: "black",
        link: "image/black-joker.png",
    }
]
// навешивание события на кнопку для начала игры
NewGame.addEventListener("click", () => {
    StartRozdacha();
})

// навешивание события на кнопку для хода
StepInGame.addEventListener("click", () => {
    OtherStepInGame();   
    secondPlayerCards = document.querySelectorAll(".second-player-cards");
    firstPlayerCards = document.querySelectorAll(".first-player-cards");
    if (firstPlayerCards.length == 0) {
        alert("Вы победили")
    } else if (secondPlayerCards.length == 0) {
        alert("Бот победил")
    } else {
        GameGot();
    }
})

// навешивание события на кнопку для отбоя
ToTrash.addEventListener("click", () => {
    let fieldList = document.querySelector(".app__list-field")
    while (fieldList.firstChild) {
        fieldList.removeChild(fieldList.firstChild);
    }
    secondPlayerCards = document.querySelectorAll(".second-player-cards");
    firstPlayerCards = document.querySelectorAll(".first-player-cards");
    if (firstPlayerCards.length == 0) {
        alert("Вы победили")
    } else if (secondPlayerCards.length == 0) {
        alert("Бот победил")
    } else {
        GameGot();
    }
})

function OtherStepInGame() {
    firstPlayerCards = document.querySelectorAll(".first-player-cards");
    let fieldList = document.querySelector(".app__list-field")
    let activeCards = document.querySelectorAll(".card--active")
    if (CheckNominal(fieldList.childNodes, activeCards)) {
        while (fieldList.firstChild) { // очистка поля
            fieldList.removeChild(fieldList.firstChild);
        }
        for (let i = 0; i < activeCards.length; i++) {
            let li = document.createElement('LI');
            li.className = "item-field";
            fieldList.append(li);
            let img = document.createElement('IMG');
            img.className = "app__item-img";
            img.src = activeCards[i].src;
            li.append(img);
            activeCards[i].parentNode.remove();
        }
    } else {
        alert("Этот ход не возможен")
    }
}

function GameGot(){
    secondPlayerCards = document.querySelectorAll(".second-player-cards");
    let fieldList = document.querySelector(".app__list-field");
    if (fieldList.childNodes.length == 0) {
        let arrMin = SearchMin(secondPlayerCards);
        for (let i = 0; i < arrMin.length; i++) {
            let li = document.createElement('LI');
            li.className = "item-field";
            fieldList.append(li);
            let img = document.createElement('IMG');
            img.className = "app__item-img";
            img.src = arrMin[i].firstChild.src;
            li.append(img);
            arrMin[i].remove();
        }
    } else {
        let arrMin = SearchMaxFromMin(secondPlayerCards, fieldList.childNodes)
        console.log(arrMin);
        if (arrMin.length != 0) {
            let length = fieldList.childNodes.length;
            while (fieldList.firstChild) {
                fieldList.removeChild(fieldList.firstChild);
            }
            for (let i = 0; i < length; i++) {
                let li = document.createElement('LI');
                li.className = "item-field";
                fieldList.append(li);
                let img = document.createElement('IMG');
                img.className = "app__item-img";
                img.src = arrMin[i].firstChild.src;
                li.append(img);
                arrMin[i].remove();
            }
        } else {
            let fieldList = document.querySelector(".app__list-field")
            while (fieldList.firstChild) {
                fieldList.removeChild(fieldList.firstChild);
            }
        }
    }
}
// возвращает все минимальные элелм из колоды
function SearchMin(arrayCards){
    let arrMin = [];
    let min = arrayCards[0];
    arrMin.push(min);
    for (let i = 0; i < arrayCards.length; i++) {
        if (coloda[SearchIndexInList(min.firstChild.src)].prioritet > coloda[SearchIndexInList(arrayCards[i].firstChild.src)].prioritet) {
            min = arrayCards[i];
            arrMin = [];
            arrMin.push(arrayCards[i]);
        } else if (coloda[SearchIndexInList(min.firstChild.src)].prioritet == coloda[SearchIndexInList(arrayCards[i].firstChild.src)].prioritet) {
            arrMin.push(arrayCards[i]);
        }
    }
    return arrMin;
}

// возвращает все минимальные элелм из колоды но при это они должны быть больше чем карты которые на столе
function SearchMaxFromMin(arrayCards, arrField){
    let arrPrioritets = [];
    let arrWithMaxlength = [];
    let Max = arrField[0];
    let maxPrioritet = coloda[SearchIndexInList(Max.firstChild.src)].prioritet;
    for (let i = 1; i <= 14; i++) {
        let obj = {
            prioritet: i,
            array: []
        }
        arrPrioritets.push(obj)
    }
    for (let i = 0; i < arrayCards.length; i++) {
        let indexPrioritet = coloda[SearchIndexInList(arrayCards[i].firstChild.src)].prioritet
        arrPrioritets[indexPrioritet - 1].array.push(arrayCards[i]);
    }
    for (let i = 0; i < arrPrioritets.length; i++) {
        if (arrPrioritets[i].array.length >= arrField.length && arrPrioritets[i].prioritet > maxPrioritet) {
            arrWithMaxlength.push(arrPrioritets[i])
        }
    }
    if (arrWithMaxlength.length == 0) {
        return arrWithMaxlength
    } else {
        return arrWithMaxlength[0].array;
    }
}

function CheckNominal(fieldItems, activeCards){// функ проверки коректности хода
    let prioritet;
    if (activeCards.length > 1) { // проверка что бы все карты были одного номинала
        for (let i = 0; i < activeCards.length - 1; i++) {
            if (coloda[SearchIndexInList(activeCards[i].src)].prioritet != coloda[SearchIndexInList(activeCards[i + 1].src)].prioritet) {
                return false
            } else {
                prioritet = coloda[SearchIndexInList(activeCards[i].src)].prioritet
            }
        }
    } else { 
        prioritet = coloda[SearchIndexInList(activeCards[0].src)].prioritet
    }
    // если поле пустое то делается ход
    if (fieldItems.length == 0) {
        return true
    }
    // проверка на корректность количества карт
    if (activeCards.length != fieldItems.length) {
        return false
    }
    // что бы выбраная карта была больше чем карты противника
    if (coloda[SearchIndexInList(fieldItems[0].firstChild.src)].prioritet >= prioritet) {
        return false
    } else {
        return true
    }
}

// функ получает параметром ссылку на картинку и возвращает индекс этого элем в колоде
function SearchIndexInList(link){
    let arr = link.split('/');
    for (let i = 0; i < coloda.length; i++) {
        if (coloda[i].link == `image/${arr[arr.length-1]}`) {
            return i;
        }
    }
}

// функ которая по клике добавляет и удаляет класс стиля
firstPlayerList.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG") { // проверка картинка ли этот элем
        if(e.target.classList.contains('card--active')){ // если стиль есть то удаляем
            e.target.classList.remove("card--active");
        } else { // если нет то добавляем
            e.target.classList.add("card--active");
        }
    }
});
// функция роздачи карт
function StartRozdacha(){
    let arrayForCheck = [];
    //second
    // заполняется колода бота
    while (secondPlayerCards.length != coloda.length / 2) { 
        let rand = randomInteger(0, coloda.length - 1); // рандомное получение индекса
        if (!CheckItemInList(arrayForCheck, rand)) { // проверка наличия в колоде элем с таким индексом
            arrayForCheck.push(rand);
            let li = document.createElement('LI'); // создание элемента
            li.className = "app__item second-player-cards"; // добавление класса
            secondPlayerList.append(li); // указывается что li является родителем
            let img = document.createElement('IMG'); // создание элемента
            img.className = "app__item-img"; // добавление класса
            img.src = coloda[rand].link; // добавление источника (ссылки для фото)
            li.append(img); // указывается что img является родителем
            secondPlayerCards = document.querySelectorAll(".second-player-cards"); // получаются карти колоды противника
        }
    }
    //first
    // заполняется колода  игрока
    while (firstPlayerCards.length != coloda.length / 2) {
        let rand = randomInteger(0, coloda.length - 1); // рандомное получение индекса
        if (!CheckItemInList(arrayForCheck, rand)) { // проверка наличия в колоде элем с таким индексом
            arrayForCheck.push(rand); // добавление  в массив
            let li = document.createElement('LI'); // создание элемента
            li.className = "app__item first-player-cards";// добавление класса
            firstPlayerList.append(li); // указывается что li является родителем
            let img = document.createElement('IMG'); // создание элемента
            img.className = "app__item-img";// добавление класса
            img.src = coloda[rand].link; // добавление источника (ссылки для фото)
            li.append(img); // указывается что img является родителем
            firstPlayerCards = document.querySelectorAll(".first-player-cards");
        }
    }
}

// проверка наличия в колоде элем с таким индексом
function CheckItemInList(array, item){ // если есть элемент то true
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return true;
        }
    }
    return false;
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}