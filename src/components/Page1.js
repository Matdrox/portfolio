import Button from './buttons/Button';
import imgMateiCananau from '../img/MateiCananau.jpg';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Page1 = ({ fontColor, lang }) => {
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className='flex flex-col-reverse text-center justify-center items-center h-screen min-w-screen content-center space-y-20 space-y-reverse
    md:flex-row md:space-x-40 md:text-left'
    >
      <div
        style={{ flexDirection: 'column' }}
        className='space-y-3 -my-10 md:w-1/3'
      >
        {/* ADD LOAD ANIMATION */}
        {/* SHOW THAT YOU HAVE TO SCROLL */}
        <p className='text-orange-400 font-bold text-5xl'>
          {/* <p className='text-zinc-800 font-bold text-5xl'> */}
          {lang ? "Hi, I'm Matei Cananau" : 'Salve, io es Matei Cananau'}
        </p>
        <p className={`${fontColor} text-xl transition duration-200 w-3/4`}>
          {lang
            ? 'I am an engineering student at KTH Royal Institute of Technology.'
            : 'Io es un studente de ingenieria a KTH Royal Institute of Technology.'}
          <br />
          {lang ? 'Welcome to my portfolio.' : 'Benvenite a mi portafolio'}
        </p>
        <div className='flex space-x-4 justify-center md:justify-start'>
          <Button
            text={lang ? 'My Projects' : 'Mi projectos'}
            onClick={() => scrollToSection(projects)}
          />
          <Button
            text={lang ? 'Contact Me' : 'Contacto Me'}
            onClick={() => scrollToSection(contact)}
          />
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
        <img
          src={imgMateiCananau}
          className='w-96 pointer-events-none rounded-xl shadow-md p-2 bg-gradient-to-r from-orange-400 to-purple-600
          min-w-[300px] mt-12'
          // className='w-96 pointer-events-none rounded-xl shadow-lg p-2 bg-white'
        />
      </motion.div>
      {/* <Box changePrimary={changePrimary} height='h-32' width='w-96' /> */}
    </div>
  );
};

export default Page1;
