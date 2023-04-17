import searchIcon from "../../shared/images/searchIcon.png";
import arrowBottomIcon from "../../shared/images/arrowBottomIcon.png";
import arrowTopIcon from "../../shared/images/arrowTopIcon.png";
import {
  FilterOptionsContainer,
  SearchInput,
  SearchInputContainer,
  Sorting,
  SortingImg,
  SortingText,
  YearFilter,
  YearFilterText,
} from "../../shared/styles/CalendarFilterOptionsStyles";
import "../../shared/styles/my.css";
import { useState, useEffect } from "react";
import { CalendarFilterOptionsProps } from "../../shared/models/props/CalendarProps";
import { useAppSelector } from "../../shared/store/hooks";
import { GeneralDaysSorting } from "../../shared/helpers/calendarHelpers";
import { SortingTypes } from "../../shared/models/types";

export default function CalendarFilterOptions({
  filteringNotes,
  setFilteringNotes,
}: CalendarFilterOptionsProps) {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [thisYear, setThisYear] = useState<boolean>(false);
  const [sortingState, setSortingState] = useState<boolean>(false);

  const currentYear = useAppSelector((state) => state.notes.selectedYear);
  const notes = useAppSelector((state) => state.notes.notes);

  useEffect(() => {
    filterNotes();
  }, [notes]);

  function filterNotes() {
    const filteredNotes = notes.filter(
      (note, i) =>
        i !== 0 &&
        note.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteringNotes(filteredNotes);
  }

  function inputKeyHandler(key: string) {
    if (key === "Enter") {
      filterNotes();
    }
  }

  function sortingHanlder() {
    setSortingState((prev) => !prev);

    const sortingType: SortingTypes = sortingState
      ? SortingTypes.Ascending
      : SortingTypes.Descending;

    setFilteringNotes(GeneralDaysSorting(filteringNotes, sortingType));
  }

  function thisYearHandler() {
    setThisYear((prev) => !prev);
    if (!thisYear) {
      const filteredNotes = notes.filter(
        (note, i) =>
          i !== 0 &&
          note.name.toLowerCase().includes(searchInputValue.toLowerCase()) &&
          note.year === currentYear
      );
      setFilteringNotes(filteredNotes);
    } else {
      filterNotes();
    }
  }

  return (
    <FilterOptionsContainer>
      <SearchInputContainer>
        <SearchInput
          value={searchInputValue}
          onKeyDown={(e) => inputKeyHandler(e.key)}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder="Note name..."
        />
        <img
          onClick={filterNotes}
          src={searchIcon}
          alt=""
          style={{ cursor: "pointer" }}
        />
      </SearchInputContainer>
      <YearFilter>
        <YearFilterText />
        <input checked={thisYear} onChange={thisYearHandler} type="checkbox" />
      </YearFilter>
      <Sorting>
        <SortingText />
        <SortingImg
          onClick={sortingHanlder}
          src={sortingState ? arrowTopIcon : arrowBottomIcon}
        />
      </Sorting>
    </FilterOptionsContainer>
  );
}
