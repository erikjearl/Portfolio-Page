import { useState, useRef } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

import cardboard from './images/cardboard.jpeg';
import cloud from './images/cloud.png';
import cat from './images/cat.gif';
import me from './images/me.gif';


function App() {
  const ref = useRef();

  // Define the animation properties
  const dropDownAnimation = useSpring({
    from: { transform: 'translate3d(0,-200%,0)' },
    to: { transform: 'translate3d(0,0,0)'},
    config: { duration: 1000 }, //tension: 15, friction: 11
    onStart: () => console.log('Drop-in animation started.'),
    onRest: () => {
      console.log('Drop-in animation completed.');
      bounceAnimation({ transform: 'translate3d(0,-10%,0)', config: { tension: 5, friction: 5 } });
    },
  });

  const bounceAnimation = useSpring({ transform: 'translate3d(0,0,0)', config: { tension: 150, friction: 20, mass: 1 } });


  return (
    <>
      <Parallax pages={3.8} ref={ref}>


        {/* Card Board Background*/}
        <ParallaxLayer 
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${cardboard})`,
            backgroundSize: "cover",
            backgroundPosition: 'right',
          }}
        ></ParallaxLayer>



        {/* Title Box */}
        <ParallaxLayer 
          offset={0.1}
          speed={3}
          id="title"
          onClick={()=>ref.current.scrollTo(4)}
        >
        <animated.div 
          style={dropDownAnimation}
        >
          <h1 id="title-card" >Erik J. Earl</h1>
        </animated.div>
          <p id="about-card" >ABOUT ME: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim vitae felis ut sollicitudin. Mauris placerat molestie turpis, id feugiat turpis auctor rhoncus. Proin sit amet eleifend diam. Curabitur gravida dignissim quam id rutrum. In id purus tristique, fermentum nisi eu, vehicula velit. Duis vitae ante diam. Aenean mi erat, viverra dictum laoreet at, tincidunt vehicula lorem. Nunc ut volutpat neque, ut vestibulum lectus.</p>
        </ParallaxLayer>

        { /* 1st blue */}
        <ParallaxLayer 
          offset={0.99}
          speed={0.8}
          factor={2}
          style={{
            backgroundColor: 'lightBlue',
            backgroundSize: 'contain',
          }}
        ></ParallaxLayer>

        {/* clouds */}
        <ParallaxLayer 
          offset={0.7}
          speed={1.5}
          style={{
            backgroundImage: `url(${cloud})`,
            backgroundSize: "150% 75%",
            backgroundPosition: 'right',
          }}

        ></ParallaxLayer>
        <ParallaxLayer 
          offset={0.75}
          speed={1.1}
          style={{
            backgroundImage: `url(${cloud})`,
            backgroundSize: "220% 90%",
            backgroundPosition: 'left',
          }}
        ></ParallaxLayer>

        {/* Work */}
        <ParallaxLayer 
          offset={1}
          speed={2}
        >
          <div style={{display:'flex', justifyContent:'right', alignContent:'center', paddingRight:'8vw'}}>
            <p id="work-card" >Work Experience: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim vitae felis ut sollicitudin. Mauris placerat molestie turpis, id feugiat turpis auctor rhoncus. Proin sit amet eleifend diam. Curabitur gravida dignissim quam id rutrum. In id purus tristique, fermentum nisi eu, vehicula velit. Duis vitae ante diam. Aenean mi erat, viverra dictum laoreet at, tincidunt vehicula lorem. Nunc ut volutpat neque, ut vestibulum lectus.</p>
          </div>
        </ParallaxLayer>


        {/* cat */}
        <ParallaxLayer
          sticky={{start:.85, end:1}}
          speed={5}
          style={{
            display:'flex',
            justifyContent:'left',
          }}
        >
          <img src={cat} style={{height:"100vh"}}/>
        </ParallaxLayer>

        {/* 2nd blue */}
        <ParallaxLayer 
          offset={1.99}
          speed={0.8}
          factor={2.5}
          style={{
            backgroundColor: 'lightBlue',
            backgroundSize: 'contain',
          }}
        ></ParallaxLayer>


        {/* Projects */}
        <ParallaxLayer 
          offset={2}
          speed={2}
        >
          <div style={{display:'flex', justifyContent:'left', alignContent:'center', paddingLeft:'8vw'}}>
            <p id="work-card" >Project Highlights: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim vitae felis ut sollicitudin. Mauris placerat molestie turpis, id feugiat turpis auctor rhoncus. Proin sit amet eleifend diam. Curabitur gravida dignissim quam id rutrum. In id purus tristique, fermentum nisi eu, vehicula velit. Duis vitae ante diam. Aenean mi erat, viverra dictum laoreet at, tincidunt vehicula lorem. Nunc ut volutpat neque, ut vestibulum lectus.</p>
          </div>
        </ParallaxLayer>

        {/* me */}
        <ParallaxLayer
          sticky={{start:2, end:2.45}}
          speed={5}
          style={{
            display:'flex',
            justifyContent:'right',
          }}
        >
          <img src={me} style={{height:"80vh"}}/>
        </ParallaxLayer>


      {/* Green */}
        <ParallaxLayer 
          offset={2.99}
          speed={0.2}
          factor={2}
          style={{
            backgroundColor: 'lightGreen',
            backgroundSize: 'contain',
          }}
        ></ParallaxLayer>

 
      <ParallaxLayer 
          offset={3}
          speed={0.5}
          id="title"
          onClick={()=>ref.current.scrollTo(0)}
        >
          <h1 id="about-card" style={{alignItems:'center'}}> CONTACT ME </h1>
        </ParallaxLayer>

      </Parallax>
    </>
  )
}

export default App
