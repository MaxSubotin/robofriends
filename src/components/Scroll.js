import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '700px', width: '98%', marginLeft: '1%'}}>
      {props.children}
    </div>
  );
};

export default Scroll;