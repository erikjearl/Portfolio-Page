import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent } from '@mui/material';


function Experience() {

  const jobData = [
    {
      company: 'Qualcomm',
      positions: [
        {
          name:'Software Engineer, Platform & DevOps',
          dates: 'April 2025 – Present',
          bullets: [
            'Designed and implemented a Kubernetes-native Database as a Service platform, replacing manual VM provisioning with a fully self-service, API-driven system',
            'Developed a custom Kubernetes operator (Python, Kopf) and CRDs to enable declarative, on-demand database provisioning using Kubernetes control loop patterns and custom resources',
            'Enabled self-service database provisioning for engineering teams, eliminating ticket-driven workflows, improving platform adoption, and optimizing resource utilization by migrating from VMs to containerized databases',
            'Integrated ExternalDNS with a custom webhook service to automate DNS reconciliation between Kubernetes resources and internal BlueCat DNS, managing record lifecycle and ownership',
            'Delivered platform infrastructure using GitOps and CI/CD (Jenkins, Helm, Fleet, Terraform) across K8s clusters',
            'Implemented observability and alerting with Prometheus and Grafana to monitor and debug production systems',
            'Operated the Kubernetes platform including networking (Cilium/Calico), ingress and Gateway API, DNS, TLS/certificate management, firewall and VIP routing, cluster lifecycle management, and incident response'
          ]
        },
        {
          name: 'DevOps & Platform Engineer Intern',
          dates: 'May 2024 – Aug 2024',
          bullets: [
            'Implemented an automated TLS certificate management system using Kubernetes and Cert-Manager, automating issuance, renewal, and rotation to reduce manual overhead and enhance security compliance across internal applications.',
            'Developed a custom Kubernetes Operator in Python to streamline web application certificate management, automating cluster resource provisioning and lifecycle management.',
            'Orchestrated Kubernetes resources across hybrid and multi-cluster environments using KubeCtl, writing YAML manifests, deploying containerized Docker applications, and administering RBAC security roles.',
            'Deployed Jenkins CI/CD pipelines for automated testing, deployment, and monitoring, improving system stability, scalability, and deployment velocity across dev and production environments.',
            'Worked in Linux-based environments using CLI tools for development and system administration of containerized, cloud-native infrastructure.',
          ]
        },
        {
          name:'Software Engineering Intern',
          dates: 'May 2023 – Aug 2023',
          bullets: [
            'Utilized Django REST Framework to develop CRUD applications and expose REST API endpoints.',
            'Employed mySQL database for efficient data storage and retrieval.',
            'Proficiently utilized Linux and Bash scripting for system administration and automation tasks',
            'Leveraged various Python libraries, including Redis Pub Sub and Celery, to enhance software functionality.',
            'Demonstrated expertise in routing and URL configuration for web applications.',
            'Work alongside team members to design and implement Python-based software solutions, resulting in significantly improved efficiency and accuracy in project deliverables.',
            'Contributed to project management tasks by creating and updating JIRA tickets, attending Scrum meetings, and effectively communicating project progress to team members and stakeholders.'
          ]
        }
      ]
    },
    {
      company: 'The Lubrizol Corporation',
      positions: [
        {
          name: 'Software Engineering Co-op',
          dates: 'January 2023 – May 2023',
          bullets: [
            'Developed a custom mobile application for laboratory safety inspection using Microsoft Power Apps and Power Automate, providing inspectors an interface to access checklists and efficiently upload results.',
            'Maintained codebase and wrote tests for applications built on the Microsoft .NET framework using C#, HTML, CSS, and jQuery.',
            'Developed automation software leveraging Python and VB scripting with Automation Anywhere cloud deployment.',
          ]
        },
        {
          name: 'Robotic Process Automation Intern',
          dates: 'May 2022 – August 2022',
          bullets: [
            'Built RPA solutions using Automation Anywhere with Python and VB scripting, following structured workflow principles to ensure maintainable and scalable automation.',
            'Consulted with department leads across the company to identify automation opportunities, then designed and delivered efficient solutions tailored to each team\'s needs.',
            'Authored solution design documentation capturing process architecture and high-level automation overviews, enabling clear handoff and long-term maintainability.',
            'Maintained and improved existing automation processes, documenting best practices for configuration and deployment.',
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
