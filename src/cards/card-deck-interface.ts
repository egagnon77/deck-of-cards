import { CardInterface } from './card-interface';
export interface CardDeckInterface<TValue, TKind> {
  shuffle(): void;
  dealOneCard(): CardInterface<TValue, TKind> | undefined;
}
