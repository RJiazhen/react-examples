import { useContext, useEffect } from 'react';
import { Info, InfoContext, setInfoContext } from '../../context';
import { BasicInfo } from './components/basicInfo';

export const Home = () => {
  const { info } = useContext(InfoContext);
  const { setInfo } = useContext(setInfoContext);

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

  return <BasicInfo></BasicInfo>;
};
