import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { ViewportProvider } from 'hooks/ViewportContext';

import "../../public/styles/reset.scss";
import "../../public/styles/variables.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ViewportProvider>
          <Component {...pageProps}/>
        </ViewportProvider>
      </Provider>
    )
  }
}

export default App;