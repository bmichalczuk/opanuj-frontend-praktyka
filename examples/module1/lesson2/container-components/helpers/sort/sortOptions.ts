import type { Character } from '../../types/Character';

const sortByNames = (a: Character, b: Character) => {
  return a.name.localeCompare(b.name);
};
const sortByDate = (a: Character, b: Character) => {
  return new Date(a.created).getTime() - new Date(b.created).getTime();
};
const none = (a: Character, b: Character) => {
  return 0;
};

export const sortOptions = {
  name: sortByNames,
  created: sortByDate,
  initial: none,
};
