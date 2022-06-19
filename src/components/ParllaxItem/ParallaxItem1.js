import React from 'react';
import clsx from 'clsx';
import getRandomInt from 'utils/getRandomInt';
import styles from './ParallaxItem1.module.scss';

const ParallaxItem1 = ({
  className, 
  src, 
  visible,
  cursorEffect
})=> {
  const wrapperRef = React.useRef();
  const itemRef = React.useRef();

  const styles_item_wrapper = clsx({
    [className]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible
  });

  const styles_parallax_item = clsx({
    [styles.parallax_item]: true,
  });

  React.useEffect(()=> {
    const wrapper = wrapperRef.current;
    const item = itemRef.current;
    const speed = getRandomInt(-10, 10);
    
    wrapper.style.setProperty("--ay", Math.abs(speed));
    item.style.setProperty("--at", Math.abs(speed));
    item.style.setProperty("--ay", speed);
    
    if(cursorEffect) {
      const handleMouseMove = (ev)=> {
        item.style.left = `${(window.innerWidth - (ev.pageX*speed))/100}px`;
        item.style.top = `${(window.innerHeight - (ev.pageY*speed))/100}px`;
      }

      window.addEventListener("mousemove", handleMouseMove);
      return ()=> window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [cursorEffect]);
  
  return (
    <div className={styles_item_wrapper} ref={wrapperRef}>
      <img className={styles_parallax_item} ref={itemRef} src={src}/>
    </div>
  )
}

export default ParallaxItem1;