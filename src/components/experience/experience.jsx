import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent } from '@mui/material';


function Experience() {

  const jobData = [
    {
      company: 'Qualcomm',
      positions: [
        {
          name:'Software Engineering Intern',
          dates: 'May 2023 - Present',
          bullets: [
            'Utilized Django REST Framework to develop CRUD applications and expose REST API endpoints.',
            'Employed mySQL database for efficient data storage and retrieval.',
            'Proficiently utilized Linux and Bash scripting for system administration and automation tasks',
            'Leveraged various Python libraries, including Redis Pub Sub and Celery, to enhance software functionality.',
            'Demonstrated expertise in routing and URL configuration for web applications.',
            'Work alongside team members to design and implement Python-based software solutions, resulting in significantly improved efficiency and accuracy in project deliverables.',
            'Contributed to project management tasks by creating and updating JIRA tickets, attending Scrum meetings, and effectively communicating project progress to team members and stakeholders.'
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
            'Designed and developed custom Power Apps solutions that improved business processes and workflows, resulting in increased productivity and efficiency.',
            'Utilized Power Automate to automate repetitive tasks, such as data entry and notifications, resulting in reduced manual workload and improved accuracy.',
            'Leveraged Power Apps and Power Automate skills to develop a custom lab safety inspection protocol app, streamlining the inspection process and ensuring compliance with safety regulations.',
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
              <Card key={index} style={{ backgroundColor: '#eee', color:'black', margin: '5px' }}>
                <CardHeader title={<b>{job.company}</b>} style={{ paddingBottom: 0}}  />
                <CardContent style={{ paddingTop: 0, paddingBottom: 20,}}>
                  {job.positions.map((position, index) => (
                    <div key={index}>
                      <span style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', paddingTop:5}}>
                        <i>{position.name}</i>
                        <span>{position.dates}</span>
                      </span>
                      <ul style={{ margin: 0, paddingBottom:5}}>
                        {position.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

          </div>
        </Paper>
    </div>
  );
}

export default Experience;
