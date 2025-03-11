import { sortOptions } from '../helpers/sort/sortOptions';
import type { Character } from '../types/Character';
export type SortOption = 'name' | 'created';
export type sortFn = (a: Character, b: Character) => number;
export type sortByType = keyof typeof sortOptions;
