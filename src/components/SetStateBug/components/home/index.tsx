import { useEffect, useState } from 'react';
import { BasicInfo } from './components/basicInfo';

interface Info {
  age?: number;
  isLoggedIn?: boolean;
}

export const Home = () => {
  const [info, setInfo] = useState<Info>({});

  useEffect(() => {
    console.log('info updated', info);
  }, [info]);

  const mergeInfo = (newInfo: Info) => {
    console.log('info when merging', info);
    setInfo({ ...info, ...newInfo });
  };

  useEffect(() => {
    mergeInfo({ age: 20 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      mergeInfo({ age: 30, isLoggedIn: true });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      mergeInfo({ age: 40 });
    }, 2000);
  }, []);

  return <BasicInfo info={info}></BasicInfo>;
};
