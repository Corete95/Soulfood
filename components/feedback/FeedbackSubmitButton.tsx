import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../../styles/feedback.module.scss';
import {
  addFeedbackToFirestore,
  generateNewFeedback,
} from '@/firebase/feedback';
import { Feedback } from '@/types/feedback';

interface Props {
  newFeedbackContent: string;
  setNewFeedbackContent: React.Dispatch<
    React.SetStateAction<Feedback['content']>
  >;
  setFeedbackList: React.Dispatch<React.SetStateAction<Feedback[]>>;
}

const FeedbackSubmitButton = ({
  newFeedbackContent,
  setFeedbackList,
  setNewFeedbackContent,
}: Props) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timer = useRef<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (secondsLeft === 0) {
      if (typeof timer.current === 'number') clearInterval(timer.current);
      timer.current = null;
    }
  }, [secondsLeft]);

  const appendNewFeedback = useCallback(
    (text: string) => {
      const newFeedback = generateNewFeedback(text, new Date().getTime());
      setFeedbackList((feedbackList) => [newFeedback, ...feedbackList]);
      addFeedbackToFirestore(newFeedback);
      setNewFeedbackContent('');

      setTimeout(() => {
        setSecondsLeft(10);
        timer.current = setInterval(() => {
          setSecondsLeft((second) => second - 1);
        }, 1000);
      }, 0);
    },
    [setFeedbackList, setNewFeedbackContent]
  );

  if (newFeedbackContent.trim().length === 0) return null;

  return (
    <button
      className={styles.submitButton}
      onClick={() => appendNewFeedback(newFeedbackContent)}
      disabled={secondsLeft > 0}
    >
      {secondsLeft > 0 ? `${secondsLeft}초만 기다려주세요` : '피드백 등록'}
    </button>
  );
};

export default FeedbackSubmitButton;
