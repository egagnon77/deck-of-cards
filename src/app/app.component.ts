import { Component } from '@angular/core';

import { Kinds } from './../cards/kinds';
import { CardDeckInterface } from './../cards/card-deck-interface';
import { CardDeckService } from './../cards/card-deck.service';
import { CardInterface } from '../cards/card-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deck of Cards';

  public currentCard: CardInterface<number, Kinds> = undefined;
  public deckOfCard: CardDeckInterface<number, Kinds> = undefined;

  constructor(cardDeckService: CardDeckService) {
    this.deckOfCard = cardDeckService.createPlayingCardDeck();
  }

  onShuffle() {
    this.deckOfCard.shuffle();
  }

  onDrawACard() {
    this.currentCard = this.deckOfCard.drawACard();
  }
}
