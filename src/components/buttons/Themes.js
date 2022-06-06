import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const Themes = (props) => {
  const x = useMotionValue(0);
  // const background = useTransform(x, [0, 40], ['#ADD8E6', '#FFCCCB']);
  const background = useTransform(x, [0, 40], ['#805AD5', '#F6AD55']);
  const circle = useTransform(x, [0, 40], ['#FFFFFF', '#000000']);

  useEffect(() =>
    x.onChange(() => {
      if (x.get() < 20) {
        props.changeTheme(`bg-zinc-100`);
        props.changePrimary(`bg-white`);
      } else {
        props.changeTheme(`bg-zinc-800`);
        props.changePrimary(`bg-zinc-700`);
      }
    })
  );

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    // <motion.div
    //   style={{ background }}
    //   className='bg-black w-[80px] h-[45px] rounded-3xl absolute top-0 right-0 m-10'
    // >
    //   <motion.div
    //     className='bg-white shadow absolute -left-1 w-[50px] h-[50px] rounded-3xl -my-0.5'
    //     drag='x'
    //     whileDrag={{ scale: 1.2 }}
    //     // whileHover={{ scale: 0.9 }}
    //     dragConstraints={{ left: 0, right: 40 }}
    //     dragSnapToOrigin={false}
    //     style={{ x }}
    //   ></motion.div>
    // </motion.div>
    <div
      className='bg-zinc-300 w-[80px] h-[45px] rounded-3xl absolute top-0 right-0 p-1 m-10 flex items-center justify-start'
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className='bg-white h-[40px] w-[40px] rounded-full'
        layout
        transition={spring}
      />
    </div>
  );
};

export default Themes;
