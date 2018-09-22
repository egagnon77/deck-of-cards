
export enum Kinds {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

export function kindToString(k: Kinds): string {
  var result = '';

  switch (k) {
    case Kinds.Clubs:
      result = 'clubs';
      break;

    case Kinds.Diamonds:
      result = 'diamonds';
      break;

    case Kinds.Hearts:
      result = 'hearts';
      break;

    case Kinds.Spades:
      result = 'spades';
      break;

    default:
      break;
  }

  return result;
}
