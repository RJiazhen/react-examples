import { createContext, useEffect, useState } from 'react';

export type Info = {
  age?: number;
  isLoggedIn?: boolean;
};

export const InfoContext = createContext<{ info: Info }>({
  info: {},
});

export const setInfoContext = createContext({
  setInfo: (info: Info) => {},
});

export const ContextProvider = ({ children }) => {
  const [info, setInfo] = useState<Info>({
    age: 0,
    isLoggedIn: false,
  });

  useEffect(() => {
    console.log('InfoContext updated', JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info }}>
      <setInfoContext.Provider value={{ setInfo }}>
        {children}
      </setInfoContext.Provider>
    </InfoContext.Provider>
  );
};
