import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Themes = (props) => {
  const x = useMotionValue(0);
  const background = useTransform(x, [0, 40], ['#ADD8E6', '#FFCCCB']);
  
  useEffect(() => x.onChange(() => {
    if (x.get() < 20) {
      props.changeTheme(`bg-zinc-100 transition ease-in-out duration-200 delay-50`);
    } else {
      props.changeTheme(`bg-zinc-900 transition ease-in-out duration-200 delay-50`);
    }
  }))

  return (
    <motion.div
      style={{ background }}
      className='bg-black w-[80px] h-[45px] shadow-md rounded-3xl absolute top-0 right-0 m-10'
    >
      <motion.div
        className='bg-white shadow absolute -left-1 w-[50px] h-[50px] rounded-3xl -my-0.5'
        drag='x'
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{ left: 0, right: 40 }}
        dragSnapToOrigin={false}
        style={{ x }}
      ></motion.div>
    </motion.div>
  );
};

export default Themes;
