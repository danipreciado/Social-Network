import { addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { colRef } from './firebaseconfig';

getDocs(colRef)
  .then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    console.log(posts);
  })
  .catch((err) => {
    console.log(err.message);
  });

export function posting(input, form) {
  addDoc(colRef, {
    text: input.value,
    timestamp: serverTimestamp(),
  })
    .then(() => {
      form.reset();
    });
  console.log(getDocs(colRef));
}
