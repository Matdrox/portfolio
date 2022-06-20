import { motion } from 'framer-motion';
import { useState } from 'react';
import imgMedusa from '../img/Medusa.jpg';
import { FaReact } from 'react-icons/fa';

const Page2 = ({ fontColor, lang }) => {
  // TEXT, IMAGE - IMAGE, TEXT - TEXT, IMAGE
  return (
    // <div className='grid place-items-center min-w-screen'>
    // 	<div className='grid gap-5 w-3/4 lg:grid-cols-5'>
    // 		<div
    // 			className={`${fontColor} relative transition duration-200 text-5xl font-extrabold lg:col-span-5 lg:grid lg:grid-cols-2`}
    // 		>
    // 			<p className='z-10'>{lang ? 'My Projects' : 'Mi Projectos'}</p>
    // 			<div className='bg-purple-600 shadow-md shadow-purple-600/30 absolute -bottom-2 left-0 h-2 w-40 rounded-md'></div>
    // 			<div className='bg-orange-400 shadow-md shadow-orange-400/30 absolute -bottom-2 left-32 h-2 w-40 rounded-md'></div>
    // 		</div>
    // 		<motion.div
    // 			className='h-40 bg-white shadow-md rounded-md lg:col-span-3'
    // 			onClick={() => setIsOpen(!isOpen)}
    // 		>
    // 			{isOpen && (
    // 				<motion.div class='h-64 bg-white shadow-md rounded-md'></motion.div>
    // 			)}
    // 		</motion.div>
    // 		<motion.div className='h-40 bg-white shadow-md rounded-md'></motion.div>
    // 		<motion.div className='h-40 bg-white shadow-md rounded-md'></motion.div>
    // 		<motion.div className='h-40 bg-white shadow-md rounded-md lg:col-span-2'></motion.div>
    // 		<motion.div className='relative h-40 shadow-md rounded-md lg:col-span-3'>
    // 			<img
    // 				src={imgMedusa}
    // 				className='object-cover w-full h-full rounded-md'
    // 			/>
    // 			<div className='bg-white absolute top-0 w-full rounded-md bg-clip-padding h-full backdrop-filter backdrop-blur-md bg-opacity-40'></div>
    // 		</motion.div>
    // 		{/* <motion.div className='h-40 bg-white shadow-md rounded-md lg:col-span-3'></motion.div> */}
    // 		{/* <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    //       mollitia
    //     </p> */}
    // 	</div>
    // </div>
    <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
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
				<div>
					<FaReact className='text-3xl text-cyan-600 transition hover:text-cyan-900'/>
				</div>
      </motion.div>
      <motion.div
        className='bg-white rounded-lg shadow-lg min-h-[350px] text-center'
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: '0' }}
        viewport={{ once: false }}
      >
        IMAGE
      </motion.div>
      <motion.div
        className='bg-white rounded-lg shadow-lg min-h-[350px] text-center'
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: '0' }}
        viewport={{ once: false }}
      >
        IMAGE
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
        IMAGE
      </motion.div>
    </div>
  );
};

export default Page2;
