import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import imagesHellenic from './imgComps/ImagesHellenic';
import imagesSphere from './imgComps/ImagesSphere';
import { FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiPython } from 'react-icons/si';
import { TbApi, TbMathSymbols } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';

const Page2 = ({ fontColor, lang, boxColor }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // TEXT, IMAGE - IMAGE, TEXT - TEXT, IMAGE
  return (
    <div className={`${fontColor} grid grid-cols-1 gap-2 lg:grid-cols-2 mx-5`}>
      <motion.div
        className='min-h-[350px] flex flex-col justify-center items-center text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1 className='text-3xl'>HELLENIC DATABASE</h1>
        <br />
        <p>
          Website for looking up various Greek mythology deities with the help
          of an altered{' '}
          <a
            href='https://www.npmjs.com/package/greek-mythology-data'
            target='_blank'
            className='underline'
          >
            API
          </a>
          . <br />
          The user can use the search function to look up a specific god.
          <br />
          It is also posible to click on any card to get more information about
          the card's god.
        </p>
        <br />
        <h2 className='text-xl'>TECHNOLOGIES USED</h2>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center items-center group -mx-4 z-10'>
            <FaReact className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center transition mt-1 duration-300 opacity-0 group-hover:opacity-100'>
              React
            </div>
          </div>
          <div className='flex flex-col justify-center items-center group -mx-3'>
            <SiTailwindcss className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
              Tailwind CSS
            </div>
          </div>
          <div className='flex flex-col justify-center items-center group -mx-3 z-10'>
            <TbApi className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
              APIs
            </div>
          </div>
          <div className='flex flex-col justify-center items-center group -mx-2'>
            <FaDatabase className='text-2xl text-purple-600 transition group-hover:text-orange-400' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
              Databases
            </div>
          </div>
        </div>
        <a
          className='underline'
          href='https://github.com/Matdrox/hellenic-database'
          target='_blank'
        >
          <h2 className='text-md'>SOURCE CODE</h2>
        </a>
      </motion.div>
      <motion.div
        className={`${boxColor} rounded-lg shadow-lg min-h-[350px] text-center cursor-grab overflow-hidden`}
        ref={carousel}
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: '0' }}
        viewport={{ once: false }}
      >
        <motion.div
          whileTap={{ cursor: 'grabbing' }}
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='flex'
        >
          {imagesHellenic.map((image) => {
            return (
              <motion.div
                className='h-[600px] min-w-[33em] py-4 px-2'
                key={image}
              >
                <img
                  className='w-full h-full rounded shadow-md pointer-events-none'
                  src={image}
                  alt=''
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className={`${boxColor} rounded-lg shadow-lg min-h-[350px] text-center cursor-grab overflow-hidden`}
        ref={carousel}
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: '0' }}
        viewport={{ once: false }}
      >
        <motion.div
          whileTap={{ cursor: 'grabbing' }}
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='flex'
        >
          {imagesSphere.map((image) => {
            return (
              <motion.div
                className='h-[600px] min-w-[33em] py-4 px-2'
                key={image}
              >
                <img
                  className='w-full h-full rounded shadow-md pointer-events-none'
                  src={image}
                  alt=''
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className='min-h-[350px] flex flex-col justify-center items-center text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1 className='text-3xl'>MATHEMATICAL SPHERE</h1>
        <br />
        <p>
          Python application that displays a sphere along with its shadow using
          the dot product.
          <br />
          The user enters the lightsource's position and the program outputs a
          mathematically correct sphere.
          <br />
          It is also posible to click anywhere on the sphere to move the light
          source, updating the sphere.
          <br />
          The application allows the user to save the displayed sphere to a text
          file
        </p>
        <br />
        <h2 className='text-xl'>TECHNOLOGIES USED</h2>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center items-center group mt-1 -mx-6 z-10'>
            <SiPython className='text-2xl text-orange-400 transition group-hover:text-purple-600' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center transition mt-1 duration-300 opacity-0 group-hover:opacity-100'>
              Python
            </div>
          </div>
          <div className='flex flex-col justify-center items-center group -mx-2'>
            <TbMathSymbols className='text-3xl text-orange-400 transition group-hover:text-purple-600' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
              Pure Maths
            </div>
          </div>
          <div className='flex flex-col justify-center items-center group -mx-2 z-10'>
            <BsDisplay className='text-3xl text-orange-400 transition group-hover:text-purple-600' />
            <div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
              GUI
            </div>
          </div>
        </div>
        <a
          className='underline'
          href='https://github.com/Matdrox/sphere'
          target='_blank'
        >
          <h2 className='text-md'>SOURCE CODE</h2>
        </a>
      </motion.div>
      <motion.div
        className='min-h-[350px] flex flex-col justify-center items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p>TEXT</p>
        <p>TEXT</p>
        <p>TEXT</p>
      </motion.div>
      <motion.div
        className='bg-white rounded-lg shadow-lg min-h-[350px] text-center'
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: '0' }}
        viewport={{ once: false }}
      >
        IMAGES
      </motion.div>
    </div>
  );
};

export default Page2;
