import Box from './Box';
import Button from './buttons/Button';
import imgMateiCananau from '../img/MateiCananau.jpg';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Page1 = ({ changePrimary }) => {
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-col-reverse text-center justify-center items-center h-screen min-w-screen content-center space-y-20 space-y-reverse
    md:flex-row md:space-x-40 md:text-left'>
      <div style={{ flexDirection: 'column' }} className='space-y-3 -my-10'>
        {/* ADD LOAD ANIMATION */}
        {/* SHOW THAT YOU HAVE TO SCROLL */}
        <p className='text-orange-400 font-bold text-5xl'>
          {/* <p className='text-zinc-800 font-bold text-5xl'> */}
          Hi, I'm Matei Cananau
        </p>
        <p className='text-xl text-zinc-600'>
          I am an engineering student at KTH Royal Institute of Technology.
          <br />
          Welcome to my portfolio.
        </p>
        <div className='flex space-x-4 justify-center md:justify-start'>
          <Button text='My Projects' onClick={() => scrollToSection(projects)} />
          <Button text='Contact Me' onClick={() => scrollToSection(contact)}/>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
        <img
          src={imgMateiCananau}
          className='w-96 pointer-events-none rounded-xl shadow-md p-2 bg-gradient-to-r from-orange-400 to-purple-600
          min-w-[300px]'
          // className='w-96 pointer-events-none rounded-xl shadow-lg p-2 bg-white'
        />
      </motion.div>
      {/* <Box changePrimary={changePrimary} height='h-32' width='w-96' /> */}
    </div>
  );
};

export default Page1;
