import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent, CardMedia } from '@mui/material';

import spartanShare from './images/spartanShare.png';
import memoryMaze from './images/memoryMaze.png';
import pathFinder from './images/pathFinder2.png';

function Projects() {

  const projectData = [
    {
      name: 'Kubernetes Based Game Server Platform',
      icon: '', // Add an appropriate image if available
      bullets: [
        'Designed and implemented a Kubernetes-native platform to provision and manage containerized Minecraft servers via custom resources, automatically creating Deployments, Services, and PersistentVolumeClaims',
        'Developed a Kubernetes operator and CRDs to automate server provisioning, enabling fast deployment of servers at scale through a configurable, declarative interface mapped to container runtime settings',
        'Built a Flask-based control plane exposing REST APIs to interface with the Kubernetes API, enabling server lifecycle management and routing requests between external clients and in-cluster services',
        'Built a multi-node Kubernetes homelab cluster using kubeadm on bare-metal hardware (repurposed PCs and Raspberry Pi), configuring CNI networking, port forwarding, and routing for external service exposure'
      ],
      skills: []
    },
    {
      name: 'Manga Translation with Machine Learning and Computer Vision',
      icon: '', // Add an appropriate image if available
      bullets: [
        'Developed a computer vision pipeline to automate manga translation with image detection & segmentation, optical character recognition (OCR), and language translation models',
        'Trained a binary segmentation model leveraging U-Net architecture using PyTorch for panel segmentation with transfer learning (ResNet34 backbone, dice loss function)',
        'Developed a web-based frontend (React, Next.js) and deployed via AWS Amplify'
      ],
      skills: []
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
