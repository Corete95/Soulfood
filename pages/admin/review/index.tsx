import React, { Suspense, useEffect, useState } from 'react';
import DashBordLayout from '@/components/common/DashBordLayout';
import styled from 'styled-components';
import FilterPage from './FilterPage';
import SearchPage from './SearchPage';
import ContentPage from './ContentPage';
import { GetServerSideProps, NextPage } from 'next';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';

const ReviewPage: NextPage<any> = ({ reviewList }) => {
  const [review, setReview] = useState(reviewList);

  useEffect(() => {
    const q = query(
      collection(firestore, 'feedbackList'),
      orderBy('timestamp', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let itemsArr: any = [];
      snapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setReview(itemsArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DashBordLayout>
      <ReviewContainer>
        <FilterPage />
        <div className="rightPage">
          <SearchPage />
          <Suspense fallback={<div className="test">로딩중...</div>}>
            <ContentPage reviewList={review} />
          </Suspense>
        </div>
      </ReviewContainer>
    </DashBordLayout>
  );
};

export default ReviewPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      reviewList: await getFeedbackListFromFirestore(),
    },
  };
};

const ReviewContainer = styled.div`
  display: flex;
  gap: 40px;

  .rightPage {
    width: 1350px;

    .test {
      display: flex;
      justify-content: center;
      font-size: 100px;
      color: red;
    }
  }
`;
