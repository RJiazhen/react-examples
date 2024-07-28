import { useEffect, useState } from 'react';
import { Home } from './components/home';
import { ContextProvider } from './context';

export const UseContextBug = () => {
  const [testState, setTestState] = useState<{
    name?: string;
    age?: number;
    isLoggedIn?: boolean;
  }>({
    name: '',
    age: 0,
    isLoggedIn: false,
  });

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};
