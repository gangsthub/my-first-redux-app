
import React from 'react';

const Logo: (({ img }: { img: string; }) => JSX.Element) = ({img}) => (
  <div style={{
    backgroundImage: `url(${img})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '50px',
    display: 'block'
  }}></div>
);

export default Logo
