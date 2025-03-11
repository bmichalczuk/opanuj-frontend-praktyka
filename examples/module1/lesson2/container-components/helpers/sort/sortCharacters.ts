import type { Character } from '../../types/Character';
import type { sortFn } from '../../types/SortTypes';

export const sortCharacters = (characters: Character[], sortFn: sortFn) => {
  return [...characters].sort(sortFn);
};
