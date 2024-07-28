
export const BasicInfo = ({info}) => {

  return (
    <>
      <p>age: {info.age} years old</p>
      <p>isLoggedIn: {info?.isLoggedIn?.toString()}</p>
    </>
  );
};
