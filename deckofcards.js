//done for es6 type oop
class Player {
  constructor(name,hand) {
  this.name = name
  this.hand=hand
                    }
  take(deck) {
   var cd=deck
   var card=deck.deal()
   console.log(card)
   this.hand.push(card)

  }
  discard(foo) {
         //removes card by index number(starting at 0)
         var cardnumber=foo
         delete this.hand[cardnumber]
  }
            }
         
class Card {
  constructor(suit,string,number) {
  this.suit=suit
  this.string=string
  this.number=number
                    }
  show() {
   console.log(this.string + " of " +  this.suit)
  }
            }
class Deck{
constructor(cards){
this.cards=cards
//console.log(cards)         
             }
   deal(){     
              var rcard = this.cards.pop()
              return rcard
               }
  reset(){
              

              this.cards=this.resetcards
              cards=[]
              suits = ["Hearts","Spades","Clubs","Diamonds"]
              strings=["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
              for(suit of suits)
               for(string of strings){
                                       name = string +"of" + suit
                                       var name =  new Card(suit,string,strings.indexOf(string)+1)
                                       cards.push(name)
                                     }
              this.cards=cards
           }

  shuffle(){
            //console.log(this.cards)
           var m = this.cards.length, t, i;
            // While there remain elements to shuffle…
            while (m) {
         //   Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
          
                      }

            //console.log(this.cards)   
            //console.log(this.cards.length) 
            }
   





          }      
//assemble our deck
cards=[]
suits = ["Hearts","Spades","Clubs","Diamonds"]
strings=["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
for(suit of suits)
for(string of strings){
name = string +"of" + suit
//console.log(name)
var name =  new Card(suit,string,strings.indexOf(string)+1)
cards.push(name)
//console.log(Card)
}
//make our deck from all of our cards
var MyDeck = new Deck(cards)
//shuffle it
MyDeck.shuffle()
//deal 5 cards for the hand
//var t = MyDeck.deal()
hand=[]
var i = 1
while(i < 6){
hand.push(MyDeck.deal())
i++
            }
var Player1 = new Player("Tim",hand)
console.log(Player1)
Player1.discard(1)
//console.log(Player1)
Player1.take(MyDeck)
console.log(Player1)
MyDeck.reset()
console.log(MyDeck)