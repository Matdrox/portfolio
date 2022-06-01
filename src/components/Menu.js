import Box from './Box';

const Menu = ({ changePrimary }) => {
  return (
    <div className='flex justify-center items-center h-screen content-center'>
      <Box changePrimary={changePrimary}/>
    </div>
  );
};

export default Menu;
