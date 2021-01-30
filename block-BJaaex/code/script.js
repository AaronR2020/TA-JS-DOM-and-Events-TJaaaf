var cardsArray=[
    {
        name:"one",
        src:"img/1.jpg"
    },
    {
        name:"two",
        src:"img/2.jpg"
    },
    {
        name:"three",
        src:"img/3.png"
    },
    {
        name:"four",
        src:"img/4.png"
    },
    {
        name:"five",
        src:"img/5.png"
    },
    {
        name:"six",
        src:"img/6.png"
    },
    
    {
        name:"seven",
        src:"img/7.jpg"
    },
    
    {
        name:"eight",
        src:"img/8.png"
    },
];
cardsArray=cardsArray.concat(cardsArray);

let firstGuess = ''
let secondGuess = ''
let count = 0;
 game = document.querySelector('.game');
 grid = document.createElement('section');
 console.log("example");
grid.setAttribute('class', 'grid');
game.appendChild(grid);
cardsArray.sort(() => 0.5 - Math.random())
// For each item in the cardsArray array...
createUI()
 function createUI(){
    cardsArray.forEach((item) => {
        // Create a div
        const card = document.createElement('div')
      
        // Apply a card class to that div
        card.classList.add('card')
      
        // Set the data-name attribute of the div to the cardsArray name
        card.dataset.name = item.name
      
        // Apply the background image of the div to the cardsArray image
        card.style.backgroundImage = `url(${item.src})`
      
        // Append the div to the grid section
        grid.appendChild(card)
      })
}

  grid.addEventListener("click",selected)
  function selected(e){
      if(e.target.class=="grid"){
          return
      }
      else{
        count++;
        if(count<3){e.target.classList.add("selectedCard")}
        else{


            }
            
        }
        
      }
      
      const match = () => {
        var selected = document.querySelectorAll('.selected')
        selected.forEach((card) => {
          card.classList.add('match')
        })
      }
      
      let previousTarget = null;
      if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
          match();
        }
          }