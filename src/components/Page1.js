import Box from './Box';
import Button from './buttons/Button';
import imgMateiCananau from '../img/MateiCananau.jpg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Page1 = ({ changePrimary }) => {
  return (
    <div className='flex justify-center items-center h-screen min-w-screen content-center space-x-40'>
      <div style={{ flexDirection: 'column' }} className='space-y-3'>
      {/* ADD LOAD ANIMATION */}
      {/* SHOW THAT YOU HAVE TO SCROLL */}
        <p className='bg-zinc-300 text-zinc-800 font-bold text-5xl'>
          Hi, I'm Matei Cananau
        </p>
        <p className='text-xl text-zinc-600'>
          I am an engineering student at KTH Royal Institute of Technology.
          <br />
          Welcome to my portfolio.
        </p>
        <div className='flex space-x-4'>
        <Button text='My Projects'/>
        <Button text='Contact Me'/>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}> 
        <img
          src={imgMateiCananau}
          className='w-96 pointer-events-none rounded-xl shadow-lg p-2 bg-white'
        />
      </motion.div>
      {/* <Box changePrimary={changePrimary} height='h-32' width='w-96' /> */}
    </div>
  );
};

export default Page1;