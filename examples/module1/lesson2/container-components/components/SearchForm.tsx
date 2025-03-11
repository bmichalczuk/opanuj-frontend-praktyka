import type { sortByType } from '../types/SortTypes';
import { GenderInput } from './GenderInput';
import { NameInput } from './NameInput';
import { SortCharactersInput } from './SortCharactersInput';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: sortByType;
  setSortOption: (sortOption: sortByType) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput name={name} setName={setName} />
      <GenderInput gender={gender} setGender={setGender} />
      <SortCharactersInput
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
    </form>
  );
}

export default SearchForm;
