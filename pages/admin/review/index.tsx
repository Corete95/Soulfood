import React, { Suspense, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';
import { ReviewProps } from '@/types/common';
import { NextRouter, useRouter } from 'next/router';
import DashBordLayout from '@/components/common/DashBordLayout';
import styled from 'styled-components';
import FilterPage from './FilterPage';
import SearchPage from './SearchPage';
import ContentPage from './ContentPage';
import useSearch from '@/hooks/useSearch';
import { useSearchParams } from 'next/navigation';

interface Props {
  reviewList: ReviewProps[];
}
const ReviewPage: NextPage<Props> = ({ reviewList }) => {
  const [review, setReview] = useState(reviewList);
  const params = useSearchParams();
  const { search, onChangeFilter, onChangeValue, onSearch, ___ } = useSearch({
    value: '',
    filter: params.get('filter') || 'ALL',
  });
  const router: any = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const result = reviewList.filter((obj) =>
        obj.content.includes(router.query.value)
      );
      if (router.query.filter) {
      }
      return setReview(result);
    }
  }, [router.query]);

  useEffect(() => {
    const q = query(
      collection(firestore, 'feedbackList'),
      orderBy('timestamp', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let itemsArr: any[] = [];
      snapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setReview(itemsArr);
    });

    return () => unsubscribe();
  }, [onSnapshot]);

  return (
    <DashBordLayout>
      <ReviewContainer>
        <FilterPage params={search.filter} onChangeFilter={onChangeFilter} />
        <div className="rightPage">
          <SearchPage
            search={search.value}
            onChangeValue={onChangeValue}
            onSearch={onSearch}
          />
          <ContentPage reviewList={review} />
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
