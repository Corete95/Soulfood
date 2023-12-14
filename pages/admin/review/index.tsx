import React from 'react';
import DashBordLayout from '@/components/common/DashBordLayout';
import styled from 'styled-components';
import FilterPage from './FilterPage';
import SearchPage from './SearchPage';
import ContentPage from './ContentPage';
import { GetServerSideProps, NextPage } from 'next';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';

const index: NextPage<any> = ({ initialFeedbackList }) => {
  return (
    <DashBordLayout>
      <ReviewContainer>
        <FilterPage />
        <div className="rightPage">
          <SearchPage />
          <ContentPage initialFeedbackList={initialFeedbackList} />
        </div>
      </ReviewContainer>
    </DashBordLayout>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};

const ReviewContainer = styled.div`
  display: flex;
  gap: 30px;

  .rightPage {
    width: 85%;
  }
`;
