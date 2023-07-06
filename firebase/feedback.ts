import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestore } from './index';
import { Feedback } from '@/types/feedback';

export const feedbackListCollection = collection(firestore, 'feedbackList');

export async function getFeedbackListFromFirestore(): Promise<Feedback[]> {
  const initialFeedbackList: Feedback[] = [];

  const querySnapshot = await getDocs(
    query(feedbackListCollection, orderBy('timestamp', 'desc'), limit(11 ** 2))
  );

  querySnapshot.forEach((doc: any) => {
    initialFeedbackList.push(doc.data() as Feedback);
  });

  return initialFeedbackList;
}

export function addFeedbackToFirestore(newFeedback: any): void {
  addDoc(feedbackListCollection, newFeedback).then();
}

export const generateNewFeedback = (
  content?: Feedback['content'],
  timestamp?: Feedback['timestamp']
): Feedback => ({
  content: content ?? '',
  timestamp: timestamp ?? Math.floor(Math.random() * 10 ** 15),
});
