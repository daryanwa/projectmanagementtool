import { collection, DocumentData, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";

function MainComponents() {
  const [user, setUser] = useState<DocumentData[] | null>(null);

  const getUsers = async (db: any) => {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const userList = userSnapshot.docs.map((doc) => doc.data);
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
      MainComponents
      <div>
        {user &&
          user?.map((userData: DocumentData, index: number) => (
            <div key={index}>{userData.email}</div>
          ))}
      </div>
    </div>
  );
}

export default MainComponents;
