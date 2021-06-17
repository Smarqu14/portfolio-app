import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryList = ({ projectsInformation, test, isSelected }) => {
  return (
    <ul className='category__list'>
      {test.map((item) => {
        return (
          <li onClick={(e) => isSelected(e)} category={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
