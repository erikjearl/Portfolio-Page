import { useState, useRef, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

import Background from './components/background/background'
import Header from './components/header/Header'
import TitleBox from './components/titleBox/titleBox';
import AboutMe from './components/aboutMe/aboutMe';


function App() {
  const ref = useRef();
  const [mouseEvent, setMouseEvent] = useState("")

  const scroll = (pageNumber) => {
    ref.current.scrollTo(pageNumber)
  }

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

      <Header scroll={scroll}/>

      <Parallax pages={4.5} ref={ref} onMouseMove={handleMouseMove} style={{height: 'calc(100vh - 48px)'}}>
      
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
          <div>
            <AboutMe />
          </div>
        </ParallaxLayer>
        



      </Parallax>
    </>
  )
}

export default App
