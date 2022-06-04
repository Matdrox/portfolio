import { motion } from "framer-motion"

const Button = () => {
  return (
    <motion.div className='bg-white h-14 w-36 rounded-lg'
    whileHover={{scale:1.1}} >
        ODKWD
    </motion.div>
  )
}

export default Button