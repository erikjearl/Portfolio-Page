import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './styles.css'
import graph from './graph.jpg';
import cloud from './cloud.png';

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



    </>
  );
};

export default Background;