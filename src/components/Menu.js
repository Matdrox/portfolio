import Box from './Box';

const Menu = ({ changePrimary }) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen content-center-'>
      <Box changePrimary={changePrimary} height='h-32' width='w-96'/>
    </div>
  );
};

export default Menu;
