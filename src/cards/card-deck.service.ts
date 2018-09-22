import { CardDeck } from './card-deck';
import { Kinds } from './kinds';
import { Injectable } from '@angular/core';
import { CardDeckInterface } from './card-deck-interface';

@Injectable()
export class CardDeckService {
  createPlayingCardDeck() : CardDeckInterface<number, Kinds> {
    return new CardDeck();
  }
}
