import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent } from '@mui/material';


function Experience() {

  const jobData = [
    {
      company: 'Qualcomm',
      positions: [
        {
          name:'Software Development Intern',
          dates: 'May 2023 - Present',
          bullets: [
            'hi',
          ]
        },
      ]
    },
    {
      company: 'The Lubrizol Corporation',
      positions: [
        {
          name:'Application Developer Co-op',
          dates: 'January 2023 - May 2023',
          bullets: [
            'Power Apps',
            'Web .net'
          ]
        },
        {
          name:'Software Automation Engineer',
          dates: 'May 2022 - August 2022',
          bullets: [
            'Developed automation software leveraging Python and VB scripting with Automation Anywhere cloud deployment using core workflow principles that are well structured and maintainable',
            'Collaborated with different teams to identify automation needs, then designed and implemented efficient solutions addressing their requirements'
          ]
        },
      ]
    },
    {
      company: 'Sears Think[box]',
      positions:[
        {
          name: 'Prototyping Technician',
          dates: 'August 2021 - May 2023',
          bullets: [
            'Provided consultation for prototyping support and equipment, assisted community users through excellent customer service',
            'Operated and performed advanced equipment maintenance on industrial FDM and Polyjet 3D printers, Epilogue Fusion laser cutters'
          ]
        },
      ]
    },
  ];



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
            <h1 style={{margin:'0px'}}>Professional Experience</h1>
          </div>

          <div>
          {jobData.map((job, index) => (
              <div key={index} style={{ backgroundColor: '#ddd', color:'black', margin: '5px' }}>
                <CardHeader title={job.company} style={{ paddingBottom: 0}} />
                <CardContent style={{ paddingTop: 0, paddingBottom: 20,}}>
                  {job.positions.map((position, index) => (
                    <div key={index}>
                      <span style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', paddingTop:5}}>
                        <b>{position.name}</b>
                        <b>{position.dates}</b>
                      </span>
                      <ul style={{ margin: 0, paddingBottom:5}}>
                        {position.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </div>
            ))}

          </div>
        </Paper>
    </div>
  );
}

export default Experience;
