import React from 'react';
import ParallaxItem1 from 'components/ParllaxItem/ParallaxItem1';

class Parallax1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children.map((child, index)=> 
          <ParallaxItem1 key={index} element={child}/>)}
      </React.Fragment>
    )
  }
}

export default Parallax1;