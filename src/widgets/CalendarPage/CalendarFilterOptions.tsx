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
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { GeneralDaysSorting } from "../../shared/helpers/calendarHelpers";
import { SortingTypes } from "../../shared/models/types";
import { newFilteredReduxNotes } from "../../shared/store/reducers/notesReducer";

export default function CalendarFilterOptions() {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [thisYear, setThisYear] = useState<boolean>(false);

  const [sortingState, setSortingState] = useState<SortingTypes>(
    SortingTypes.Ascending
  );

  const currentYear = new Date().getFullYear();
  const notes = useAppSelector((state) => state.notes.notes);

  const filteredReduxNotes = useAppSelector(
    (state) => state.notes.filteredNotes
  );

  useEffect(() => {
    filterNotes();
  }, [notes]);

  const dispatch = useAppDispatch();

  function filterNotes() {
    let filteredNotes = notes.filter(
      (note, i) =>
        i !== 0 &&
        note.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    if (thisYear) {
      filteredNotes = filteredNotes.filter((note) => note.year === currentYear);
    }

    if (sortingState === SortingTypes.Ascending) {
      dispatch(newFilteredReduxNotes(filteredNotes));
    } else {
      dispatch(
        newFilteredReduxNotes(
          GeneralDaysSorting(filteredNotes, SortingTypes.Descending)
        )
      );
    }
  }

  function inputKeyHandler(key: string) {
    if (key === "Enter") {
      filterNotes();
    }
  }

  function sortingHanlder() {
    const oppositeSortingType: SortingTypes =
      sortingState === SortingTypes.Ascending
        ? SortingTypes.Descending
        : SortingTypes.Ascending;

    dispatch(
      newFilteredReduxNotes(
        GeneralDaysSorting(filteredReduxNotes, oppositeSortingType)
      )
    );

    setSortingState(oppositeSortingType);
  }

  function thisYearHandler() {
    setThisYear((prev) => !prev);
  }

  useEffect(() => {
    if (thisYear) {
      const filteredNotesByThisYear = filteredReduxNotes.filter(
        (note) => note.year === currentYear
      );

      dispatch(newFilteredReduxNotes(filteredNotesByThisYear));
    } else {
      filterNotes();
    }
  }, [thisYear]);

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
