import { CardDeckInterface } from './card-deck-interface';
import { Kinds } from './kinds';
import { Card } from './card';


export class CardDeck implements CardDeckInterface<number, Kinds> {
  private _kinds = [Kinds.Clubs, Kinds.Diamonds, Kinds.Hearts, Kinds.Spades];
  private _values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  cardDeck = new Array<Card>();
  private _shuffledCardDeck = new Array<Card>();

  constructor() {
    this._kinds.forEach(kind => {
      this._values.forEach(val => {
        var card = new Card(val, kind);
        this.cardDeck.push(card);
        this._shuffledCardDeck.push(card);
      })
    });
  }

  shuffle(): void {
    this._shuffledCardDeck = [];
    var cardDeck = Object.assign([], this.cardDeck);
    do {
      var i = Math.floor(Math.random() * (cardDeck.length));
      this._shuffledCardDeck.push(cardDeck.splice(i, 1)[0]);
    } while(cardDeck.length > 0);
  };

  drawACard(): Card | undefined {
    return this._shuffledCardDeck.pop();
  }

  isEmpty(): boolean {
    return this._shuffledCardDeck.length == 0;
  }
}
