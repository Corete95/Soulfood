import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const SearchPage = ({ search, onChangeValue, onSearch }: any) => {
  return (
    <SearchContainer>
      <span>
        <IoSearchOutline />
      </span>
      <input
        value={search}
        onChange={onChangeValue}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && onSearch) {
            onSearch();
          }
        }}
      />
    </SearchContainer>
  );
};

export default SearchPage;

const SearchContainer = styled.div`
  position: relative;
  background-color: #fff;
  height: 48px;
  margin-bottom: 20px;
  padding: 10px 50px;

  & > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 22px;
  }
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
`;
