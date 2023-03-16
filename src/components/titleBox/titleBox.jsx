import { useState, useRef, useEffect } from 'react';
import './styles.css';
import tortoise from './turt2.png';
import eye from './eye.png';

const TitleBox = ( {mouseEvent} ) => {
  const turtRef = useRef("");
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() =>{
    //console.log(mouseEvent)
    handleMouseMove(mouseEvent);
  },[mouseEvent]);

  const setAngle = (cx, cy, ex, ey) => {
    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI;
    setRotationAngle(deg);
  }

  const handleMouseMove = (event) => {
    const turtRect = turtRef.current.getBoundingClientRect();
    
    //check if in frame
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const topInView = turtRect.top < windowHeight && turtRect.bottom > 0;
    
    if(topInView){
      const anchorX = turtRect.left + turtRect.width / 1.4;  
      const anchorY = turtRect.top + turtRect.height / 2.7;
      // ^ change divide numbers to center between eyes

      setAngle(event.clientX, event.clientY, anchorX, anchorY);
    }
  };


  return (
    <div onMouseMove={handleMouseMove}>
        <div id="attachment" style={{left:'25px'}}/>
        <div id="attachment" style={{right:'25px'}}/>
        <h1 id="title-card" >Erik J. Earl</h1>
        <img id="turt" src={tortoise} ref={turtRef}/>
        <img id="eye"src={eye} style={{
          left:'234px',
          bottom:'250px',
          transform: `rotate(${90 + rotationAngle}deg)`
        }}/>
        <img id="eye" src={eye} style={{
          left:'264px',
          bottom:'249px',
          transform: `rotate(${90 + rotationAngle}deg)`
        }}/>
    </div>
  );
};

export default TitleBox;

