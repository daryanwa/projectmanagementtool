import { getAuth, onAuthStateChanged } from "firebase/auth";

export const getCurrentUserId = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        reject(new Error("User not logged in"));
      }
    });
  });
};
