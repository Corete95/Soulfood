import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestore } from './index';
import { Feedback } from '@/types/feedback';

export const feedbackListCollection = collection(firestore, 'feedbackList');
export const mapListCollection = collection(firestore, 'mapList');

export async function getFeedbackListFromFirestore(): Promise<Feedback[]> {
  const initialFeedbackList: Feedback[] = [];

  const querySnapshot = await getDocs(
    query(feedbackListCollection, orderBy('timestamp', 'desc'), limit(11 ** 2))
  );

  querySnapshot.forEach((doc) => {
    const data: Feedback[] = { ...doc.data(), id: doc.id };
    initialFeedbackList.push(data);
  });

  return initialFeedbackList;
}

export async function deleteFeedBack(ids: string[]) {
  ids.forEach(async (result) => {
    const docRef = doc(firestore, 'feedbackList', result);
    await deleteDoc(docRef);
  });
}

export async function getMapListFromFirestore() {
  const test: any = [];

  const read = await getDocs(query(mapListCollection));

  read.forEach((doc: any) => {
    test.push(doc.data());
  });
  console.log(read);
  console.log(test);
  return test;
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
