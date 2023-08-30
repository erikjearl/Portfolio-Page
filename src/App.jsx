import { useState, useRef, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

import Background from './components/background/background'
import Header from './components/header/Header'
import TitleBox from './components/titleBox/titleBox';
import AboutMe from './components/aboutMe/aboutMe';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

import skydiver from './images/sky.gif';
import cat from './images/cat.gif';
import { formLabelClasses } from '@mui/material';



function App() {
  const ref = useRef();
  const [mouseEvent, setMouseEvent] = useState("")
  const [doReset, setDoReset] = useState(false);

  const scroll = (pageNumber) => {
    ref.current.scrollTo(pageNumber)
  }

  // define the drop down animation properties
  const dropDownAnimation = useSpring({
    from: { transform: 'translate3d(0,-400%,0)' },
    to: { transform: 'translate3d(0,0,0)'},
    delay:400,
    reset:false, //doReset
    config: { tension: 100, friction: 20, mass:5},
    onStart: () => {
      setDoReset(false);
      console.log('%c-- welcome to erikjearl --', 'color: white; background-color: blue')
    },
  });

  const handleMouseMove = (event) => {
      setMouseEvent(event)
  }

  return (
    <>

      {/* static nav bar */}
      <Header 
        scroll={scroll}
        setDoReset={setDoReset}
      />
      <div class="main">
      {/* parallax component */}
      <Parallax pages={4.2} ref={ref} onMouseMove={handleMouseMove} style={{height: 'calc(100vh - 48px)', minHeight: '700px'}}>
      
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
          <div style={{marginTop:'30vh'}}>
            <AboutMe />
          </div>
        </ParallaxLayer>


        {/* Work Experience */}
        <ParallaxLayer
          speed={0.5}
          offset={1.5}
          factor={1.5}
        >
          <div style={{width:'60vw', marginLeft:'3vw'}}>
            <Experience />
          </div>
        </ParallaxLayer>


        {/* Projects */}
        <ParallaxLayer
          speed={0.5}
          offset={2.5}
          style={{top: '84px'}}
          factor={1.5}
        >
          <div style={{width:'60vw', marginLeft:'37vw'}}>
            <Projects />
          </div>
        </ParallaxLayer>


        {/* Contact Me */}
        <ParallaxLayer
          speed={1}
          offset={3.8}
          style={{display:'flex', justifyContent:'center'}}
        >
           <div style={{width:'90vw'}}>
            <Contact />
          </div>
        </ParallaxLayer>




        

        {/* skydiver */}
        <ParallaxLayer
          sticky={{start:1.3, end:1.5}}
          speed={5}
        >
          <div style={{marginLeft:'66vw'}}>
            <img src={skydiver} style={{width:"35vw",marginTop:'10vh'}}/>
          </div>
        </ParallaxLayer>

        {/* cat balloon */}
        <ParallaxLayer
          sticky={{start:2.5, end:2.6}}
          speed={10}
        >
        <div style={{marginLeft:'0vw'}}>
          <img src={cat} style={{width:"30vw"}}/>
        </div>
        </ParallaxLayer>

      </Parallax>
      </div>
    </>

  )
}

export default App
