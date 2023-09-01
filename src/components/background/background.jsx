import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './styles.css'

import graph from './images/graph.jpg';
import cloud from './images/cloud.png';
import tree from './images/tree.png';
import frog from './images/frog.png';
import rat from './images/rat.png';
import drawCat from './images/drawcat.png';
import drawEye from './images/draweye.png';
import coco from './images/coco.png';
import duck from './images/duck.png';
import lily from './images/lily.png';

const Background = () => {
  return (
    <>

      <div style={{backgroundColor:"lightBlue", height:'500vh'}}>

        {/* paper background */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${graph})`,
            backgroundSize: "cover",
            backgroundPosition: 'right',
          }}
        ></ParallaxLayer>

        { /* blue sky */}
        <ParallaxLayer 
          offset={1}
          speed={0.5}
          factor={4}
          style={{
            backgroundColor: 'lightBlue',
            backgroundSize: 'contain',
          }}
        ></ParallaxLayer>
        



        {/* clouds */}
        <ParallaxLayer offset={0.9999} speed={1.1} factor={0.01}>
        <div>
                <div id='cloud'style={{marginTop:"50vh", marginLeft:"5vw"}}>
                    <img  src={cloud} />
                </div>
                <div id='cloud' style={{marginTop:"45vh", marginLeft:"50vw"}}>
                    <img  src={cloud} />
                </div>
                <div id='cloud' style={{marginTop:"50vh", marginLeft:"90vw"}}>
                    <img  src={cloud} />
                </div>
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1.7} factor={0.01} >
            <div>
                <div id='cloud2'style={{marginTop:"85vh", marginLeft:"0vw"}}>
                    <img  src={cloud} />
                </div>
                <div id='cloud2' style={{marginTop:"110vh", marginLeft:"51vw", height:"55vh"}}>
                    <img  src={cloud} />
                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.999} speed={1.5} factor={0.01} >
            <div>
                <div id='cloud2'style={{marginTop:"80vh", marginLeft:"85vw"}}>
                    <img  src={cloud} />
                </div>
                <div id='cloud2' style={{marginTop:"110vh", marginLeft:"15vw"}}>
                    <img  src={cloud} />
                </div>
            </div>
        </ParallaxLayer>

        {/* Green */}
        <ParallaxLayer 
            offset={3.5}
            speed={1}
            factor={2}
            style={{
              backgroundColor: 'lightGreen',
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

      </div>

      {/*  -- doodles -- */}
    
      {/* ground */}
      <ParallaxLayer offset={3} speed={1}>
        {/* tree */}
          <div style={{marginLeft:'66vw'}}>
            <img src={tree} style={{
              width:"600px", 
              marginBottom:"150px",
              position: 'absolute',
              bottom: 0,
            }} />
          </div>
          {/* cat */}
          <div style={{marginLeft:'60vw', marginTop:'410px'}}>
            <img src={rat} style={{
              width:"200px",
              transform: "rotate(10deg)  scale(0.8)",
            }} />
          </div>
        {/* duck */}
          <div style={{marginLeft:'5vw', marginTop:'-100px'}}>
            <img src={duck} style={{
              width:"200px",
              transform: "rotate(10deg)  scale(0.8)",
            }} />
          </div>
        </ParallaxLayer>

      {/* title page */}
      <ParallaxLayer offset={0.1} speed={1}>
          {/* eye */}
          <div style={{marginLeft:'5vw', marginTop:'0px'}}>
            <img src={drawEye} style={{
              width:"150px",
              transform: "rotate(-10deg)  scale(0.5)",
            }} />
          </div>
          {/* lily frog */}
          <div style={{marginLeft:'80vw', marginTop:'50vh'}}>
            <img src={lily} style={{
              width:"200px",
              transform: "rotate(20deg)  scale(0.5)",
            }} />
          </div>
          {/* cat */}
          <div style={{marginLeft:'15vw', marginTop:'200px'}}>
            <img src={drawCat} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>
      
    
    </>
  );
};

export default Background;