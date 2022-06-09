import { motion } from 'framer-motion';
import { useState } from 'react';
import imgMedusa from '../img/Medusa.jpg'

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Add spotlight on hovered project, darkness around it
  // Blurred colors (glass-like)
  return (
    <div className='grid place-items-center min-w-screen'>
      <div className='grid gap-5 w-3/4 lg:grid-cols-5'>
        <h1 className='text-5xl font-extrabold underline decoration-purple-600/70 lg:col-span-5 lg:grid lg:grid-cols-2'>
          My Projects
        </h1>
        <motion.div
          className='h-40 bg-white shadow-md rounded-md lg:col-span-3'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen && (
            <motion.div class='h-64 bg-white shadow-md rounded-md'></motion.div>
          )}
        </motion.div>
        <motion.div className='h-40 bg-white shadow-md rounded-md'></motion.div>
        <motion.div className='h-40 bg-white shadow-md rounded-md'></motion.div>
        <motion.div className='h-40 bg-white shadow-md rounded-md lg:col-span-2'></motion.div>
        <motion.div className='relative h-40 shadow-md rounded-md lg:col-span-3'>
          <img src={imgMedusa} className='object-cover w-full h-full rounded-md'/>
          <div className='bg-white absolute top-0 w-full rounded-md bg-clip-padding h-full backdrop-filter backdrop-blur-md bg-opacity-40'></div>
        </motion.div>
        {/* <motion.div className='h-40 bg-white shadow-md rounded-md lg:col-span-3'></motion.div> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia
        </p> */}
      </div>
    </div>
  );
};

export default Page2;
