import { createContext, useState } from "react";

export const modelContext = createContext(false);

export function ModelContextProvider({ children }) {
  const [show, setShow] = useState(false);
  return (
    <modelContext.Provider value={{ show, setShow }}>
      {children}
    </modelContext.Provider>
  );
}
