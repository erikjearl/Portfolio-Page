import { useState, useRef, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

import Background from './components/background/background'
import TitleBox from './components/titleBox/titleBox';
import AboutMe from './components/aboutMe/aboutMe';


function App() {
  const ref = useRef();
  const [mouseEvent, setMouseEvent] = useState("")

  // define the drop down animation properties
  const dropDownAnimation = useSpring({
    from: { transform: 'translate3d(0,-400%,0)' },
    to: { transform: 'translate3d(0,0,0)'},
    config: { tension: 100, friction: 20, mass:5 },
    onStart: () => {
      console.log('%c-- welcome to erikjearl --', 'color: lime')
    },
  });

  const handleMouseMove = (event) => {
      setMouseEvent(event)
  }

  return (
    <>
      <Parallax pages={4.5} ref={ref} onMouseMove={handleMouseMove} >
      
      <Background />

        {/* Title Box */}
        <ParallaxLayer 
          offset={0.5}
          speed={3}
          id="title"
        >
          <animated.div style={dropDownAnimation}>
            <TitleBox 
              mouseEvent={mouseEvent}
            />
          </animated.div>
        </ParallaxLayer>

        {/* About Me */}
        <ParallaxLayer
          speed={2}
          offset={0.999}
          id="about"
          style={{display:'flex', justifyContent:'center'}}
        >
          <AboutMe />
        </ParallaxLayer>
        



      </Parallax>
    </>
  )
}

export default App
