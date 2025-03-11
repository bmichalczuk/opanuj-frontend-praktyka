import { useEffect, useState } from 'react';
import type { Character } from '../types/Character';
import { sortCharacters } from '../helpers/sort/sortCharacters';

import { sortOptions } from '../helpers/sort/sortOptions';
import type { sortByType } from '../types/SortTypes';

export const useSortedCharacters = (
  characters: Character[],
  sortBy: sortByType
) => {
  const [sortedCharacters, setSortedCharacters] = useState(characters);

  useEffect(() => {
    const sortedCharacters = sortCharacters(characters, sortOptions[sortBy]);
    setSortedCharacters(sortedCharacters);
  }, [characters, sortBy]);
  return sortedCharacters;
};
