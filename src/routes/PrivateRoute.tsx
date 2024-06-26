import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Очистка подписки при размонтировании компонента
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Отображение индикатора загрузки или null, пока проверка аутентификации не завершена
    return null;
  }

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
