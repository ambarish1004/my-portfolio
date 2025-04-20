import React from 'react';
import '../styles/components/Layout.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <motion.div
      className="layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <main>{children}</main>
    </motion.div>
  );
};

export default Layout;
