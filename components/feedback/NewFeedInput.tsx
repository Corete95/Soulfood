import React, { ChangeEvent } from 'react';
import styles from '../../styles/feedback.module.scss';

interface Props {
  newFeedbackContent: string;
  onChangeNewFeedbackContent?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const NewFeedInput = ({
  newFeedbackContent,
  onChangeNewFeedbackContent,
}: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <textarea
          value={newFeedbackContent}
          onChange={onChangeNewFeedbackContent}
          placeholder="피드백을 적어주세요!"
        />
        <p
          className={styles.textLength}
        >{`${newFeedbackContent.length} /80`}</p>
      </div>
    </div>
  );
};

export default NewFeedInput;
