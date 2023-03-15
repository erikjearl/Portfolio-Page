import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import graph from '../../images/biggraph.jpg'

const Background = () => {
  return (
    <>

        <div style={{backgroundColor:"blue", height:'500vh'}}>

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

        { /* 1st blue */}
        <ParallaxLayer 
          offset={1}
          speed={1}
          style={{
            backgroundColor: 'lightBlue',
            backgroundSize: 'contain',
          }}
        ></ParallaxLayer>

      {/* Green */}
      <ParallaxLayer 
          offset={4}
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