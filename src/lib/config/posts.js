import {
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  orderBy, query, onSnapshot,
} from 'firebase/firestore';
import { colRef, auth } from './firebaseconfig.js';

export function posting(input, form) {
  const userId = auth.currentUser.displayName;
  return addDoc(colRef, {
    text: input.value,
    timestamp: serverTimestamp(),
    userid: userId,
    likes: [],
    likescat: [],
  })
    .then(() => {
      form.reset();
    });
}

const orderedQuery = query(colRef, orderBy('timestamp', 'desc'));
export const postData = (callback) => onSnapshot(orderedQuery, callback);

export function deletePost(postId) {
  const postDocRef = doc(colRef, postId);

  return deleteDoc(postDocRef)
    .then(() => {
    });
}

export function editPost(postId, newPostText) {
  const postDocRef = doc(colRef, postId);
  const newTimestamp = serverTimestamp();

  return updateDoc(postDocRef, {
    text: newPostText,
    timestamp: newTimestamp,
  })
    .then(() => {
    });
}

export const like = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likes: arrayUnion(auth.currentUser.uid) });
};

export const dislike = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likes: arrayRemove(auth.currentUser.uid) });
};

export const likecat = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likescat: arrayUnion(auth.currentUser.uid) });
};

export const dislikecat = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likescat: arrayRemove(auth.currentUser.uid) });
};
