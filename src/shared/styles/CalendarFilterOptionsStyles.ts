import styled from "styled-components";

export const FilterOptionsContainer = styled.div`
  width: max-content;
  position: relative;
  margin auto auto;
`;

export const SearchInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  width: 500px;
  border-bottom: 2px solid lightgray;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  outline: 0;
  border: 0;
  color: white;
  font-family: "Inter";
  font-size: 21px;
  &:focus {
    outline: 0;
  }
`;

export const YearFilter = styled.div`
  color: white;
  width: 100px;
  top: 68px;
  display: grid;
  font-family: "Inter";
  grid-template-columns: 1fr max-content;
  position: absolute;
  left: 100px;
`;

export const YearFilterText = styled.div`
  margin: auto auto;

  &:before {
    content: "This year";
  }
`;

export const Sorting = styled.div`
  position: absolute;
  left: 210px;
  display: grid;
  width: 140px;
  grid-template-columns: 1fr 1fr;
`;

export const SortingText = styled.div`
  color: white;
  font-family: "Inter";
  margin: auto auto;
  font-weight: 500;
  &:before {
    content: "sorting";
  }
`;

export const SortingImg = styled.img`
  margin: auto auto;
  cursor: pointer;
`;
