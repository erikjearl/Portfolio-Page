import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import './styles.css'

import paper from './paper.jpg';

function AboutMe() {
  return (
    //main card holding about me section
    <Card
      sx={{
        width: '90vw',
        height: 'auto',
        marginTop: '100px',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',

        backgroundColor: 'bisque',
        backgroundImage: `url(${paper})`,

        backgroundSize: '90vw',
        backgroundPosition: 'center',
        border: '5px solid',
        borderRadius: 5,
        position: 'relative',
      }}
    >
      <CardHeader
        title="About Me"
        titleTypographyProps={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          borderBottom: '3px solid #333',
          marginBottom: '-50px',
        }}
      />
      <CardContent>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: '1.5em',
            marginX:'25px',
            marginBottom: '-10px',
          }}
        >
           <p style={{margin:"30px 0px 15px 0px"}}>
            I am a Software Engineer focused on Platform Engineering and DevOps. I currently work at Qualcomm building Kubernetes-native infrastructure — including a Database as a Service platform, custom operators, and CI/CD pipelines. I hold a B.S. in Computer Science (Minor in AI) from Case Western Reserve University and am a Certified Kubernetes Application Developer (CKAD).
           </p>
          <div>
            <div className="tag-container">
              <span className="tag">Kubernetes</span>
              <span className="tag">Platform Engineering</span>
              <span className="tag">Cloud Infrastructure</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Observability</span>
              <span className="tag">DevOps</span>
              <span className="tag">AI / ML</span>
            </div>
          </div>
          
          </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
