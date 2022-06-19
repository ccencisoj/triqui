import React from 'react';
import { GameProvider } from 'hooks/GameContext';
import GameLayout1 from 'components/Layout/GameLayout1';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#fafaff";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "initial";
  }

  render = ()=> {
    return (
      <React.Fragment>
        <GameProvider>
          <GameLayout1/>
        </GameProvider>
      </React.Fragment>
    )
  }
}

export default Index;