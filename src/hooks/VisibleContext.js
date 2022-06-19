import React from 'react';

const VisibleContext = React.createContext({});

const VisibleProvider = ({children})=> {
  const [visible, setVisible] = React.useState(false);

  return (
    <VisibleContext.Provider value={{visible}}>
      {children}
    </VisibleContext.Provider>
  )
}

const useVisible = ()=> {
  return React.useContext(VisibleContext);
}

export { VisibleProvider, useVisible };
