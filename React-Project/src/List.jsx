import React from 'react';

const List = ({ numberOfItems }) => {
  const List = Array.from({ length: numberOfItems }, (_, index) => (
    <li key={index} className="items">
      Item {index + 1}
    </li>
  ));

  return (
    <ul>
      {List}
    </ul>
  );
};

export default List;
