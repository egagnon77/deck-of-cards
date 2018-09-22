import { async } from '@angular/core/testing';
import { CardDeck } from './card-deck';
import { Card } from './card';
import { Kinds } from './kinds';

describe('CardDeck', () => {
  it('should create the deck', async(() => {
    var cardDeck = new CardDeck();
    expect(cardDeck).toBeTruthy();
  }));

  it('should contains 52 card', async(() => {
    var cardDeck = new CardDeck();
    expect(cardDeck.cardDeck.length).toBe(52);
  }));

  it('should contains all deck card', async(() => {
    var kinds = [Kinds.Clubs, Kinds.Diamonds, Kinds.Hearts, Kinds.Spades];
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var cardDeck = new CardDeck();

    kinds.forEach(kind => {
      values.forEach(val => {
        expect(cardDeck.cardDeck).toContain(new Card(val, kind));
      })
    });
  }));

  it('should draw all card', async(() => {
    var cardDeck = new CardDeck();

    for (var i = 0; i < 52; i++) {
        var card = cardDeck.dealOneCard();
        expect(cardDeck.cardDeck).toContain(card);
    }
  }));

  it('after shuffle should draw all card', async(() => {
    var cardDeck = new CardDeck();
    cardDeck.shuffle();
    for (var i = 0; i < 52; i++) {
        var card = cardDeck.dealOneCard();
        expect(cardDeck.cardDeck).toContain(card);
    }
  }));

  it('after shuffle should draw all card', async(() => {
    var cardDeck = new CardDeck();
    cardDeck.shuffle();
    for (var i = 0; i < 52; i++) {
        var card = cardDeck.dealOneCard();
        expect(cardDeck.cardDeck).toContain(card);
    }
  }));

  it('should return undefined after 52 draw', async(() => {
    var cardDeck = new CardDeck();
    cardDeck.shuffle();
    for (var i = 0; i < 52; i++) {
        expect(cardDeck.dealOneCard()).toBeTruthy();
    }

    expect(cardDeck.dealOneCard()).toBeUndefined();
  }));

});
