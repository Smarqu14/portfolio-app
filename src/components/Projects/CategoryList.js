import React, { useState } from 'react';

const CategoryList = ({ projectsInformation, category, isSelected }) => {
  return (
    <ul className='category__list'>
      {category.map((item) => {
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
