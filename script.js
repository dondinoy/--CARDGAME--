import Deck from "./deck.js"
const CARD_VALUE_MAP = {
  "2":2,
  "3":3,
  "4":4,
  "5":5,
  "6":6,
  "7":7,
  "8":8,
  "9":9,
  "10":10,
  J:11,
  Q:12,
  K:13,
  A:1
}

const computerCardSlot=document.querySelector(".computer_card_slot")
const playerCardSlot= document.querySelector(".player_card_slot")
const computerDeckElement=document.querySelector(".computer_deck")
const playerDeckElement=document.querySelector(".player_deck")
const text= document.querySelector(".text")

let playerDeck, computerDeck , inRound, stop
document.addEventListener('click', () => {
  if (stop){
    startGame()
    return
  }
  if (inRound){
    cleanBeforeRound()
  }else{
    flipCards()
  }

})

startGame()
function startGame(){
  const deck= new Deck()
  deck.shuffle()

  const deckMidPoint= Math.ceil(deck.numberOfCards/ 2)
  playerDeck= new Deck(deck.cards.slice(0, deckMidPoint))
  computerDeck=new Deck(deck.cards.slice( deckMidPoint, deck.numberOfCards))
  // computerDeck= new Deck([new Card("s",2)],new Card("s",2))
  stop=false
  inRound=false


  cleanBeforeRound()
}
function cleanBeforeRound(){
  inRound=false
  computerCardSlot.innerHTML= ''
  playerCardSlot.innerHTML= ''
  text.innerText=''
  updadeDeckCount()
}

function flipCards(){
  inRound=true

  const playerCard= playerDeck.pop()
  const computerCard= computerDeck.pop()

  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())
  updadeDeckCount()

  if (isRoundWinner(playerCard, computerCard)){
    text.innerText= "You Win"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
  }else if (isRoundWinner (computerCard, playerCard)){
    text.innerText= "You Lose"
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }else{
    text.innerText= "Draw"
    playerCard.push(playerCard)
    computerDeck.push(computerCard)
  }

  if (isGameOver(playerDeck)){
    text.innerText= "You Lose"
    stop=true
  }else if (isGameOver(playerDeck)){
    text.innerText= "You Win"
    stop=true
  }
}

function updadeDeckCount(){
  computerDeckElement.innerText = computerDeck.numberOfCards
  playerDeckElement.innerText=playerDeck.numberOfCards
}
function isRoundWinner(cardOne,cardTwo){
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}
function isGameOver(deck){
  return deck.numberOfCards === 0
}
// computerCardSlot.appendChild(deck.cards[0].getHTML())