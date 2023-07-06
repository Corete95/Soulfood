import React from 'react';
import { Feedback } from '@/types/feedback';
import styles from '../../styles/feedback.module.scss';
import {
  FEEDBACK_COLOR_SET,
  pickThemeByTimestamp,
} from '@/utils/feedbackColor';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackList = ({ feedbackList }: Props) => {
  return (
    <>
      {feedbackList.map((feedback, index) => {
        const theme = pickThemeByTimestamp(feedback.timestamp);
        return (
          <div className={styles.box} key={index}>
            <p
              className={styles.card}
              style={{
                background: `linear-gradient(
                    to left top,
                    transparent 50%,
                    ${FEEDBACK_COLOR_SET[theme].secondary} 0
                  ) no-repeat 100% 100% / 22px 22px,
                  linear-gradient(
                    to left top,
                    transparent 15.7px,
                    ${FEEDBACK_COLOR_SET[theme].primary} 0
                  )`,
              }}
            >
              {feedback.content}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FeedbackList;
