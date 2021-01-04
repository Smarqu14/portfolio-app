import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryList = ({ projectsInformation, test, isSelected }) => {
  return (
    <ul className='category__list'>
      {test.map((item) => {
        return (
          <li>
            <div>
              <button onClick={(e) => isSelected(e)} category={item}>
                {item}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
