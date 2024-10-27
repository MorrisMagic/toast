import { createContext, useState } from "react";

export const UserContext = createContext(false);

export function UserContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
}
