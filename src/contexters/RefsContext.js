import React, { useState, useRef } from 'react';

export const RefsContext = React.createContext();

export const Context = ({ children }) => {
  const [state] = useState({
    banner: useRef(null),
    panels: useRef(null),
    blog: useRef(null),
    footer: useRef(null),
  });

  return (
    <RefsContext.Provider value={state}>
      {children}
    </RefsContext.Provider>
  );
};

export default Context;
