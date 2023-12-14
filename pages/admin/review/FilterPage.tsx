import React from 'react';
import { Flex } from '@/styles/theme';
import styled from 'styled-components';

const filterData = ['전체', '시간순', '가순'];

const FilterPage = () => {
  return (
    <FilterContainer>
      <p>필터 목록</p>
      {filterData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </FilterContainer>
  );
};

export default FilterPage;

const FilterContainer = styled.div`
  width: 15%;
  height: 100%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  & > p {
    ${Flex}
    font-size: 20px;
    font-weight: bold;
    height: 48px;
    border-bottom: 1px solid #e5e7eb;
  }
  & > div {
    ${Flex}
    font-size: 18px;
    height: 48px;
    cursor: pointer;
    &:hover {
      background-color: #f8f9fb;
    }
  }
`;
