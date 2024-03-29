import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Switch = (props) => {
	// STORE THEME LOCALLY!!!!!
	const toggleSwitch = () => props.setEnabled(!props.enabled);

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30,
	};

	return (
		<div
			onClick={toggleSwitch}
			className={`${
				props.enabled
					? 'bg-purple-600 shadow-lg shadow-purple-600/30'
					: 'bg-orange-400 shadow-lg shadow-orange-400/30'
			} transition duration-300 flex-start flex h-[45px] w-[80px] p-1 absolute top-0 left-12 m-10 rounded-full
    hover:cursor-pointer md:left-auto md:right-0 ${
			props.enabled && 'place-content-end'
		}`}
		>
			<motion.div
				className='flex h-[39px] w-[40px] absolute top-[3px] items-center justify-center rounded-full bg-white'
				layout
				transition={spring}
			></motion.div>
		</div>
	);
};

export default Switch;
