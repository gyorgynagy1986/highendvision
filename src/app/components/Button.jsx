import React from 'react';

const CustomCloseButtonLight = ({ closeToast }) => (
  <button onClick={closeToast} style={{ display:'none', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>
    ✖
  </button>
);

const CustomCloseButtonDark = ({ closeToast }) => (
  <button onClick={closeToast} style={{ display:'none',  background: 'transparent',  color: 'black', border: 'none', cursor: 'pointer' }}>
    ✖
  </button>
);

export { CustomCloseButtonLight, CustomCloseButtonDark };