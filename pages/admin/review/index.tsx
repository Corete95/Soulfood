import React from 'react';
import DashBordLayout from '@/components/common/DashBordLayout';
import styled from 'styled-components';
import FilterPage from './filterPage';
import SearchPage from './SearchPage';
import ContentPage from './ContentPage';

const index = () => {
  return (
    <DashBordLayout>
      <ReviewContainer>
        <FilterPage />
        <div className="rightPage">
          <SearchPage />
          <ContentPage />
        </div>
      </ReviewContainer>
    </DashBordLayout>
  );
};

export default index;

const ReviewContainer = styled.div`
  display: flex;
  gap: 30px;

  .rightPage {
    width: 85%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;
