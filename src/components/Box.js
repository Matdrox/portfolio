const Box = (props) => {
  return (
    <>
      <div className={`transition ease-in-out duration-500 h-32 w-32 rounded shadow-lg ${props.changePrimary}`}></div>
      {/* <div className='h-32 w-32 bg-white rounded shadow-lg'></div> */}
    </>
  );
};

export default Box;
