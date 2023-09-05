import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent, CardMedia } from '@mui/material';

import spartanShare from './images/spartanShare.png';

function Projects() {

  const projectData = [
    {
      name:'File Sharing Website - Team Lead',
      icon:spartanShare,
      bullets:[
        'Developed a full-stack web application for Case Western students to upload and share class notes and files using React, Node JS, Express JS, MongoDB, Mongoose, Redux and Material UI',
        'Implemented CRUD functionality using RESTful API design patterns and handled site URL routing',
        "Lead team of 4: organized meetings, delegated tasks and maintained version control through Git"
      ],
      skills:[
        'Front End Development - React JS, Redux and Material UI',
        'Back End Development - Node JS, Express JS, Mongo DB, Mongoose',
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
        '',
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
          <Card key={index} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#eee', color: 'black', margin: '5px' }}>
  {/* CardHeader */}
  <CardHeader title={<b>{project.name}</b>} style={{ backgroundColor: '#eee', color: 'black', paddingBottom:'0px', marginBottom:'0px'}} />
  
  {/* Content and Media Container */}
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    {/* CardContent */}
    <div style={{ flex: 1, padding: '0px 10px 10px 10px', marginTop:'0px'}}>
      <CardContent style={{ paddingBottom: 20 }}>
        <ul style={{ margin: 0, paddingBottom: 5 }}>
          {project.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <span style={{ fontWeight: '500', fontSize: '18px', fontStyle: 'italic' }}>Skills Acquired</span>
        <ul style={{ margin: 0, paddingBottom: 5 }}>
          {project.skills.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </CardContent>
    </div>
    
    {/* CardMedia */}
    <div style={{ padding: '10px' }}>
      <CardMedia
        style={{ width: 300, height: 300 }}
        image={project.icon}
        title={project.name}
        alt={project.name}
      />
    </div>
  </div>
</Card>



        ))}

        </Paper>
    </div>
  );
}

export default Projects;
