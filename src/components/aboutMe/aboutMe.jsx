import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

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
            marginX:'25px'
          }}
        >
          <p>
            I'm Erik and I am am a software developer. Programming is my passion, I have been coding for over 6 years and I'm currently studying Computer Science with a minor in Artificial Intelligence at Case Western Reserve University.
          </p>
          <p style={{marginBottom: 10}}>
            //TODO CHANGE THIS --- I love building apps that solve real world problems and interact with real people. I self driven and goal oriented, currently seeking an internship or co-op with hands-on industry experience.
          </p>
          <div>
            <strong> Skills:</strong>
            <br/>
            <div style={{paddingLeft: '30px', fontSize:'1.2em'}}>
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}Java{'\u00A0'}</span>{'\u00A0'}
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}Python{'\u00A0'}</span>{'\u00A0'}
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}Javascript{'\u00A0'}</span>{'\u00A0'}
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}HTML{'\u00A0'}</span>{'\u00A0'}
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}CSS{'\u00A0'}</span> {'\u00A0'}
              <span style={{color: 'white', fontWeight: 'bold', backgroundColor:'dodgerblue', borderRadius:5}}>{'\u00A0'}SQL{'\u00A0'}</span> {'\u00A0'}
            </div>
          </div>
          
          </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
