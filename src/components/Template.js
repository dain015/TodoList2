import React from 'react';

const Template = ({children}) => {
  return (
    <div>
      <div>To Do List (0)</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
