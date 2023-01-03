const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A","2","3","4","5",
                "6","7","8","9","10",
                "J","Q","K"]

export default class deck{
  constructor(cards=freshDeck()){
    this.cards=cards
  }

  get  numberOfCards(){
    return this.cards.length
  }

  pop(){
    return this.cards.shift()
  }

  push(card){
    this.cards.push(this.cards)
  }

  shuffle(){
  for(let i= this.cards.length -1; i > 0; i-- ){
    const newIndex= Math.floor(Math.random()*(i+1))
    const oldvalue= this.cards[newIndex]
    this.cards[newIndex]=this.cards[i]
    this.cards[i]=oldvalue
    }
  }
}
  class Card{
  constructor(suit, value){
    this.suit=suit
    this.value=value
  }
  get color(){
    return this.suit=== '♠' || this.suit=== '♣' ? "black" : "red"
  }
  getHTML(){
    const cardDiv=document.createElement('div')
    cardDiv.innerText= this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value= this.value+ this.suit
    cardDiv.dataset.suit= this.suit+this.color
    return cardDiv;
  }
}

function freshDeck(){
  return SUITS.flatMap(suit=> {
    return VALUES.map(value=> {
      return new Card (suit, value)
    })
  })
}