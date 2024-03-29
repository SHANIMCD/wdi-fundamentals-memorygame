
let cards = [{
   rank: "queen",
   suit: "hearts",
   cardImage: "images/queen-of-hearts.png",
},
{
   rank: "queen",
   suit: "diamonds",
   cardImage: "images/queen-of-diamonds.png",
},
{  rank: "king",
   suit: "hearts",
   cardImage: "images/king-of-hearts.png",
},
{  rank: "king",
   suit: "diamonds",
   cardImage: "images/king-of-diamonds.png",   
}
];

let cardId = [];

let cardsInPlay = [];
function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
};


function createBoard () {
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
};
};

cardsInPlay.push(cards[cardId]);


let flipCard = function() {
   var cardId = this.getAttribute('data-id');
console.log("User Flipped " + cards[cardId].rank);
console.log("User Flipped " + cards[cardId].cardImage);
console.log("User Flipped " + cards[cardId].suit);
if (cardsInPlay.length >1) {
    checkForMatch(cardId);
    };
   };  
   

  createBoard ();