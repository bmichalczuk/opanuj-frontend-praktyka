import type { sortByType } from '../types/SortTypes';

export const SortCharactersInput = ({
  sortOption,
  setSortOption,
}: {
  sortOption: sortByType;
  setSortOption: (sortOption: sortByType) => void;
}) => (
  <label className="flex flex-col">
    Sort by
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value as sortByType)}
      className="border h-7 mt-1"
    >
      <option value="initial">Initial</option>
      <option value="name">Name</option>
      <option value="created">Created Date</option>
    </select>
  </label>
);
