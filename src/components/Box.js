const Box = (props) => {
  return (
    <>
      <div
        className={`transition ease-in-out duration-500 ${props.height}
        ${props.width} rounded shadow-md ${props.changePrimary}`}
      ></div>
    </>
  );
};

export default Box;
