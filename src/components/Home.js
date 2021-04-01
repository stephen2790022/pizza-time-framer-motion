import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const conatainerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
  }
}

const buttonVariants = {
  hover: {
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    scale: 1.1,
    transition: { 
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={conatainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"

        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;