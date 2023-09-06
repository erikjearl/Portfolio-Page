import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent, CardMedia } from '@mui/material';

import spartanShare from 'src/components/projects/images/memoryMaze.png';
import memoryMaze from 'src/components/projects/images/memoryMaze.png';
import pathFinder from 'src/components/projects/images/pathFinder2.png';

function Projects() {

  const projectData = [
    {
      name: 'File Sharing Website: - Team Lead',
      icon: spartanShare,
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
      name: 'Shortest Path Visualizer',
      icon: pathFinder,
      bullets:[
        'Implemented the A* Search algorithm in Java to find the shortest path between two points, optimizing for performance and accuracy.',
        'Utilized Java Swing GUI components to create an interface that enables users to interact with the path finding algorithm',
        'Implemented path finding heuristics and algorithmic optimizations to handle complex and dynamic obstacle scenarios',
      ],
      skills:[]
    },
    {
      name: 'Maze Builder Game',
      icon: memoryMaze,
      bullets: [
        'Created a web-based memory-testing game leveraging Vue JS frontend development',
        'Utilized the Django REST framework to implement a database system to keep track of high scores',
        'Designed a randomized maze generator algorithm using JavaScript',
      ],
      skills:[]
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height:'100%'}}>
            {/* CardContent */}
            <div style={{ flex: 2, padding: '0px 10px 10px 10px', marginTop:'0px'}}>
            <CardHeader 
            title={<span>
                    <b>{project.name.split(':')[0]}</b>
                    <i>{project.name.split(':')[1]}</i>
                  </span>}
            style={{ backgroundColor: '#eee', color: 'black', paddingBottom:'0px', marginBottom:'0px'}} 
            />
            <CardContent style={{ padding: '5px 0px 10px 0px'}}>
              <ul style={{ margin: 0, paddingBottom: 5 }}>
                {project.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              
              {project.skills.length > 0 && (  // Check if skills list is not empty
                <>
                  <span style={{ fontWeight: '500', fontSize: '18px', fontStyle: 'italic', marginLeft:'20px'}}>Skills Acquired</span>
                  <ul style={{ margin: 0, paddingBottom: 5 }}>
                    {project.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>

            </div>
            
            {/* CardMedia */}
            <div style={{ flex:1, padding: '10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <CardMedia
                style={{width:'100%', height:'95%', maxWidth:'300px', maxHeight:'300px', objectFit: 'contain',}}
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
