const LangButton = ({ onClick, text }) => {
  return (
    <button
      className='bg-purple-600 shadow-lg shadow-purple-600/30 text-white text-xl font-bold w-[60px] h-[60px] -top-[6px] right-12 m-10 rounded-full absolute transition ease-in-out duration-400 
      md:top-16 md:right-3
      hover:bg-orange-400 hover:shadow-orange-400/30'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LangButton;
