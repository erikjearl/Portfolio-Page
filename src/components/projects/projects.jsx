import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent, CardMedia } from '@mui/material';

import spartanShare from './images/spartanShare.png';

function Projects() {

  const projectData = [
    {
      name:'project 1',
      icon:'./images/spartanShare.png',
      bullets:[
        'bullet 1',
        'b2',
      ],
      skills:[
        'skill1',
        's2',
      ]
    },
    {
      name:'project 2',
      icon:'./images/spartanShare.png',
      bullets:[
        '2bullet 1',
        '2b2',
      ],
      skills:[
        'skill1 aaa',
        's2 aaaa',
      ]
    },
  ]

  return (
    <div>
        <Paper 
          elevation={5}
          style={{
            backgroundColor: '#424242',
            color:'white',
            padding:'5px',
          }}
        >
        <div style={{display:'flex', justifyContent:'center',}}>
          <h1 style={{margin:'0px'}}>Personal Projects</h1>
        </div>

        {projectData.map((project, index) => (
          <Card key={index} style={{ backgroundColor: '#eee', color:'black', margin: '5px' }}>
              <CardHeader title={project.name} />
              <CardContent>
                <span>Description:</span>
                <ul style={{ margin: 0, paddingBottom:5}}>
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <span>Skills:</span>
                <ul style={{ margin: 0, paddingBottom:5}}>
                  {project.skills.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
              <CardMedia
                style={{ width: 100, height: 100, margin: '10px'}}
                image={project.icon}
                title={project.name}
              />
          </Card>
        ))}

        </Paper>
    </div>
  );
}

export default Projects;
