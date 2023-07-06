import React, { useState } from 'react';
import styles from '../../styles/feedback.module.scss';
import NewFeedInput from './NewFeedInput';
import useInput from '@/hooks/useInput';
import FeedbackSubmitButton from './FeedbackSubmitButton';
import FeedbackList from './FeedbackList';
import { Feedback } from '@/types/feedback';

interface Props {
  initialFeedbackList: Feedback[];
}

const FeedbackSection = ({ initialFeedbackList }: Props) => {
  const MAX_CONTENT_LENGTH = 80;
  const [feedbackList, setFeedbackList] = useState(initialFeedbackList);

  const [
    newFeedbackContent,
    onChangeNewFeedbackContent,
    setNewFeedbackContent,
  ] = useInput('', MAX_CONTENT_LENGTH);

  return (
    <div className={styles.feedbackContainer}>
      <NewFeedInput
        newFeedbackContent={newFeedbackContent}
        onChangeNewFeedbackContent={onChangeNewFeedbackContent}
      />
      <FeedbackList feedbackList={feedbackList} />
      <FeedbackSubmitButton
        newFeedbackContent={newFeedbackContent}
        setFeedbackList={setFeedbackList}
        setNewFeedbackContent={setNewFeedbackContent}
      />
    </div>
  );
};

export default FeedbackSection;
