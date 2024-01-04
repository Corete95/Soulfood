import React from 'react';
import { Flex } from '@/styles/theme';
import styled from 'styled-components';
import { FILTER_CHECK } from '@/utils/commonObject';

const filterData = ['전체', '시간순', '오름차순'];

const FilterPage = ({ params, onChangeFilter }: any) => {
  return (
    <FilterContainer>
      <p>필터 목록</p>
      {filterData.map((item, index) => (
        <FilterListContainer
          key={index}
          bold={FILTER_CHECK[params] === item}
          onClick={() =>
            onChangeFilter(
              Object.keys(FILTER_CHECK).find(
                (key) => FILTER_CHECK[key] === item
              )
            )
          }
        >
          {item}
        </FilterListContainer>
      ))}
    </FilterContainer>
  );
};

export default FilterPage;

const FilterContainer = styled.div`
  width: 200px;
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
`;

const FilterListContainer = styled.div<{ bold: boolean }>`
  ${Flex}
  font-size: 18px;
  height: 48px;
  background-color: ${(props) => props.bold && '#f8f9fb'};
  cursor: pointer;
  &:hover {
    background-color: #f8f9fb;
  }
`;
