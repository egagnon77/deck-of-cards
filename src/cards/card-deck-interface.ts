import { CardInterface } from './card-interface';
export interface CardDeckInterface<TValue, TKind> {
  shuffle(): void;
  drawACard(): CardInterface<TValue, TKind> | undefined;
  isEmpty(): boolean;
}
