import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryList = ({ projectsInformation, test, isSelected }) => {
  return (
    <ul className='category__list'>
      {test.map((item) => {
        return (
          <li>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1 }}
            >
              <button onClick={(e) => isSelected(e)} category={item}>
                {item}
              </button>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
