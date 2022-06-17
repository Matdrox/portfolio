import { motion } from 'framer-motion';

const LangButton = ({ onClick, text }) => {
  return (
    <button
      className='bg-purple-600 shadow-lg shadow-purple-600/30 text-white text-xl font-bold w-[60px] h-[60px] top-16 right-3 m-10 rounded-full absolute transition ease-in-out duration-400 
    hover:bg-orange-400 hover:shadow-orange-400/30'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LangButton;
