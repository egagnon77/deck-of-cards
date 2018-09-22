import { Kinds, kindToString } from './kinds';
import { CardInterface } from './card-interface';

export class Card implements CardInterface<number, Kinds> {
  image: string;

  constructor(public value: number, public kind: Kinds) {
    this.image = `assets/${value.toString()}_of_${kindToString(kind)}.png`;
  }
}
