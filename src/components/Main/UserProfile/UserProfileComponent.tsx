import React, { useEffect, useState } from "react";
import { db } from "../../../api/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
const UserProfileComponent = () => {
  const [user, setUser] = useState<DocumentData[] | null>(null);
  const [logOut, setLogOut] = useState<boolean>(false);

  const getUsers = async (db: any) => {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers(db);
        setUser(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {user &&
        user?.map((userData: DocumentData, index: number) => (
          <div onClick={() => setLogOut(!logOut)} key={index}>
            {userData.email.slice(0, 1)}
          </div>
        ))}
    </div>
  );
};

export default UserProfileComponent;
