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
           I am a software engineering student with a passion for programming and problem solving. I am currently pursuing a degree in Computer Science with a minor in Artificial Intelligence at Case Western Reserve University. In addition to my academic pursuits, I have gained valuable real-world experience as a software engineer from working at different companies and by getting involved with various projects over the past few years.
          </p>
          <div>
            <div class="tag-container">
              <span class="tag">Web Dev</span>
              <span class="tag">Databases</span>
              <span class="tag"> AI </span>
              <span class="tag">DevOps</span>
              <span class="tag">Scripting</span>
              <span class="tag">Networks</span>
              <span class="tag">Security</span>
            </div>
          </div>
          
          </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
