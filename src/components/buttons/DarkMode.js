import { motion, useMotionValue, useTransform } from 'framer-motion';

const DarkMode = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [0, 30],
    ['#ADD8E6', '#FFCCCB']
  );

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
        // dragElastic={0.05}
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        style={{ x }}
      ></motion.div>
    </motion.div>
  );
};

export default DarkMode;
