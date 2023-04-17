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

export default function CalendarFilterOptions() {
  return (
    <FilterOptionsContainer>
      <SearchInputContainer>
        <SearchInput placeholder="Note name..." />
        <img src={searchIcon} alt="" style={{ cursor: "pointer" }} />
      </SearchInputContainer>
      <YearFilter>
        <YearFilterText />
        <input type="checkbox" />
      </YearFilter>
      <Sorting>
        <SortingText />
        <SortingImg src={arrowBottomIcon} />
      </Sorting>
    </FilterOptionsContainer>
  );
}
