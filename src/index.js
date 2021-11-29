'use strict'

const arr = [
  { name: "card 1", img: "./src/img/adidas.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 2", img: "./src/img/chupa.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 3", img: "./src/img/Mc.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 4", img: "./src/img/nike.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 5", img: "./src/img/coffe.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 6", img: "./src/img/Puma-Logo.jpg", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 7", img: "./src/img/lacoste.png", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  {name: "card 8", img: "./src/img/lego.png",  lastUsed: new Date().getTime(), creationDate: new Date().getTime()}, 
]

const itemEl = document.getElementById("item");
const sortBtnEl = document.getElementById("sort");
const createBtnEl = document.getElementById("create");
const clearBtnEl = document.getElementById("clear");



const createMarkup = function(arr) {
   console.log(arr)
  const markup = arr.map(({ name, img }) =>
    `<li class ="list" id = "${name}">
  <div class = "list__container" >
     <img src="${img}" alt="logo"  width="70px" />
  </div> </li>
  `
   
  );

  const arrayOfEl = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrayOfEl.push(markup[i]);
  }
 
  itemEl.innerHTML = '';
  itemEl.insertAdjacentHTML("beforeend", arrayOfEl.join(""));
}
// createMarkup(arr);
createBtnEl.addEventListener('click', createMarkupOnPage);
clearBtnEl.addEventListener('click', clearMarkup);

function createMarkupOnPage() {
  createMarkup(arr)
}

function clearMarkup() {
  itemEl.innerHTML = "";
}

itemEl.addEventListener("click", addCard);

function addCard(event) {

   console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  arr.forEach((element) => {
    if (event.target.closest('li').id === element.name) { element.lastUsed = new Date().getTime() }
    
  })
}
  

sortBtnEl.addEventListener("click", renderCard);

let newArr = [];
function renderCard() {
  
  newArr = [...arr].sort((firctName, secondName) => secondName.lastUsed -firctName.lastUsed);
  console.log(newArr)
 
  createMarkup(newArr)
 
}


// 1. При нажатии на кнопку Sort картинки должны перерендириться в соответствии с ключем обьекта lastUsed (последнее использование lastUsed должно быть сверху списка)



