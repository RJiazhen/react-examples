import { useEffect, useState } from 'react';
// https://juejin.cn/post/7233720373237776444

export type Info = {
  age?: number;
  isLoggedIn?: boolean;
};

let normalObject = {};

export const SetStateBug = () => {
  const [info, setInfo] = useState<Info>({});

  useEffect(() => {
    console.log('info updated', info);
    console.log('normalObject', normalObject);
  }, [info]);

  const mergeInfo = (newInfo: Info) => {
    console.log('info when merging', info);
    setInfo({ ...info, ...newInfo });

    console.log('normalObject when merging', normalObject);
    normalObject = { ...normalObject, ...newInfo };
  };

  useEffect(() => {
    setTimeout(() => {
      mergeInfo({ isLoggedIn: true });
    }, 1000);

    setTimeout(() => {
      mergeInfo({ age: 40 });
    }, 2000);
  }, []);

  return (
    <>
      <p>age: {info.age} years old</p>
      <p>isLoggedIn: {info?.isLoggedIn?.toString()}</p>
    </>
  );
};
