import { useState, useRef } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

import Background from './components/background/background'
import TitleBox from './components/titleBox/titleBox';

import cardboard from './images/biggraph.jpg';
import cloud from './images/cloud.png';
import cat from './images/cat.gif';
import me from './images/me.gif';


function App() {
  const ref = useRef();

  // define the drop down animation properties
  const dropDownAnimation = useSpring({
    from: { transform: 'translate3d(0,-400%,0)' },
    to: { transform: 'translate3d(0,0,0)'},
    config: { tension: 8, friction: 3 }
  });8

  return (
    <>
      <Parallax pages={5} ref={ref}>
      
      <Background />

        {/* Title Box */}
        <ParallaxLayer 
          offset={0.5}
          speed={3}
          id="title"
        >
          <animated.div style={dropDownAnimation}>
            <TitleBox />
          </animated.div>
        </ParallaxLayer>

        {/* About Me */}
        <ParallaxLayer
          speed={3}
          offset={0.999}
        >
          <p id="about-card" >ABOUT ME: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim vitae felis ut sollicitudin. Mauris placerat molestie turpis, id feugiat turpis auctor rhoncus. Proin sit amet eleifend diam. Curabitur gravida dignissim quam id rutrum. In id purus tristique, fermentum nisi eu, vehicula velit. Duis vitae ante diam. Aenean mi erat, viverra dictum laoreet at, tincidunt vehicula lorem. Nunc ut volutpat neque, ut vestibulum lectus.</p>
        </ParallaxLayer>
        
        {/* clouds */}
        <ParallaxLayer 
          offset={2}
          speed={1.5}
          style={{
            backgroundImage: `url(${cloud})`,
            backgroundSize: "150% 75%",
            backgroundPosition: 'right',
          }}

        ></ParallaxLayer>
        <ParallaxLayer 
          offset={2}
          speed={1.1}
          style={{
            backgroundImage: `url(${cloud})`,
            backgroundSize: "220% 90%",
            backgroundPosition: 'left',
          }}
        ></ParallaxLayer>


      </Parallax>
    </>
  )
}

export default App
