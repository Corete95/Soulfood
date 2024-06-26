import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '@/components/common/Header';
import FeedbackSection from '@/components/feedback/FeedbackSection';
import {
  getFeedbackListFromFirestore,
  getMapListFromFirestore,
} from '@/firebase/feedback';
import type { Feedback } from '../types/feedback';

interface Props {
  initialFeedbackList: Feedback[];
}

export const FeedbackPage: NextPage<any> = ({ initialFeedbackList }) => {
  return (
    <>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://soulfood-map.vercel.app/feedback"
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        <FeedbackSection initialFeedbackList={initialFeedbackList} />
      </main>
    </>
  );
};

export default FeedbackPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};
