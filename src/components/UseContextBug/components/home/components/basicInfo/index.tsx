import { useContext } from 'react';
import { InfoContext } from '../../../../context';

export const BasicInfo = () => {
  const { info } = useContext(InfoContext);

  return (
    <>
      <p>age: {info.age} years old</p>
      <p>isLoggedIn: {info?.isLoggedIn?.toString()}</p>
    </>
  );
};
