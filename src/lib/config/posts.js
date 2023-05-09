import {
  addDoc, getDocs, serverTimestamp, deleteDoc, doc, updateDoc, arrayUnion,
} from 'firebase/firestore';
import { colRef, auth } from './firebaseconfig.js';

getDocs(colRef)
  .then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((docu) => {
      posts.push({ ...docu.data(), id: docu.id });
    });
    console.log(posts);
  })
  .catch((err) => {
    console.log(err.message);
  });

export function posting(input, form) {
  const userId = auth.currentUser.displayName;
  return addDoc(colRef, {
    text: input.value,
    timestamp: serverTimestamp(),
    userid: userId,
    likesss: 0,
  })
    .then(() => {
      form.reset();
    });
}

export function deletePost(postId) {
  const postDocRef = doc(colRef, postId);

  return deleteDoc(postDocRef)
    .then(() => {
      console.log(`Post ${postId} deleted successfully`);
    })
    .catch((err) => {
      console.log(`Error deleting post ${postId}: ${err.message}`);
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
      console.log(`Post ${postId} edited successfully`);
    })
    .catch((err) => {
      console.log(`Error editing post ${postId}: ${err.message}`);
    });
}

export function like(postId, userId) {
  const docRef = doc(colRef, postId);
  return updateDoc(docRef, { likes: arrayUnion(userId) });
}
