var cards = [
{
rank: "queen",
suite: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suite: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suite: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suite: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		}else {
		alert("Sorry, Better luck next time");
	};
	};
var flipcard = function () {
	var cardId = this.getAttribute("data-id")
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch ();
	};
};
var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipcard);
	document.getElementById('game-board').appendChild(cardElement);
};
};
createBoard ();
