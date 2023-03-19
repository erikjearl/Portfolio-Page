import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './styles.css'

import graph from './images/graph.jpg';
import cloud from './images/cloud.png';
import tree from './images/tree.png';
import frog from './images/frog.png';
import rat from './images/rat.png';
import drawCat from './images/drawcat.png';
import drawMe from './images/drawme.png';
import drawEye from './images/draweye.png';
import coco from './images/coco.png';
import duck from './images/duck.png';
import lily from './images/lily.png';

const Background = () => {
  return (
    <>

        <div style={{backgroundColor:"deepskyblue", height:'500vh'}}>

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

        <div>
            hiasdfjioasdoi
            <h1>hasidfhasodf</h1>
        </div>
            hi
        </div>

      {/* tree */}
      <ParallaxLayer
          offset={3}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'66vw'}}>
            <img src={tree} style={{
              width:"600px", 
              marginBottom:"150px",
              position: 'absolute',
              bottom: 0,
            }} />
          </div>
        </ParallaxLayer>



      {/*  -- doodles -- */}
      {/* cat */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'80vw', marginTop:'300px'}}>
            <img src={rat} style={{
              width:"200px",
              transform: "rotate(30deg)  scale(0.8)",
            }} />
          </div>
        </ParallaxLayer>
      {/*frog */}
      <ParallaxLayer 
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'55vw', marginTop:'50px'}}>
            <img src={frog} style={{
              width:"150px",
              transform: "rotate(-10deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>
      {/* eye */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'5vw', marginTop:'-50px'}}>
            <img src={drawEye} style={{
              width:"150px",
              transform: "rotate(-10deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>
        
      {/* cat2 */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'11vw', marginTop:'800px'}}>
            <img src={drawCat} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>

      {/* me */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'65vw', marginTop:'600px'}}>
            <img src={drawMe} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>

      {/* duck */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'10vw', marginTop:'450px'}}>
            <img src={duck} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.8)",
            }} />
          </div>
        </ParallaxLayer>

      {/* coco */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'90vw', marginTop:'800px'}}>
            <img src={coco} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>

      {/* lily frog */}
      <ParallaxLayer
          offset={0.1}
          speed={1}
          style={{backgroundColor:""}}
        >
          <div style={{marginLeft:'50vw', marginTop:'910px'}}>
            <img src={lily} style={{
              width:"200px",
              transform: "rotate(15deg)  scale(0.5)",
            }} />
          </div>
        </ParallaxLayer>

    </>
  );
};

export default Background;