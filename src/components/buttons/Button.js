import { motion } from 'framer-motion';

const Button = ({ text }) => {
  return (
    <motion.button
      className='bg-purple-600 h-14 w-36 rounded-lg shadow-lg shadow-purple-600/30 flex items-center justify-center
      transition ease-in-out duration-400 
      hover:bg-orange-400 hover:shadow-orange-400/30'
    >
      <p className='text-white pointer-events-none'>{text}</p>
    </motion.button>
  );
};

export default Button;
