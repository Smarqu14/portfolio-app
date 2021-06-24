import React from 'react';

const CategoryListItem = ({ isSelected, category, item, index, isClicked }) => {
  return (
    <li
      key={index}
      index={index}
      style={{ backgroundColor: `${isClicked === index ? 'red' : 'blue'}` }}
      onClick={(e) => isSelected(e)}
      category={item}
    >
      {item}
    </li>
  );
};

export default CategoryListItem;
