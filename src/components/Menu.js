import Box from './Box';
import imgMateiCananau from '../img/MateiCananau.jpg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Menu = ({ changePrimary }) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen content-center space-x-40'>
      <p className='bg-zinc-300 text-zinc-800 font-bold text-5xl'>
        Hey, I'm Matei Cananau.
      </p>
      <motion.div
        whileHover={{ scale: 1.1 }}
      >
        <img src={imgMateiCananau} className='w-96 pointer-events-none rounded-xl shadow-lg p-2 bg-white' />
      </motion.div>
      {/* <Box changePrimary={changePrimary} height='h-32' width='w-96' /> */}
    </div>
  );
};

export default Menu;
