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
          name:'DevOps & Platform Engineer Intern',
          dates: 'May 2024 – Aug 2024',
          bullets: [
            'Built an automated TLS certificate management system (Kubernetes, Cert-Manager), automating certificate issuance, renewal, and rotation, reducing manual overhead and improving security compliance',
            'Developed a Python Kubernetes operator to manage certificate lifecycle and automate resource provisioning',
            'Designed and implemented Jenkins CI/CD pipelines for automated testing and deployment',
            'Worked in Linux-based environments using CLI tools to manage containerized, cloud-native systems'
          ]
        },
        {
          name:'Software Engineer Intern',
          dates: 'May 2023 – Aug 2023',
          bullets: [
            'Implemented a backend IP lifecycle management system, reducing manual approval processes by ~80%',
            'Developed REST APIs using Python and Django to support a distributed, multi-service architecture'
          ]
        }
      ]
    },
    {
      company: 'The Lubrizol Corporation',
      positions: [
        {
          name:'Software Development Intern',
          dates: 'May 2022 – Aug 2022',
          bullets: [
            'Developed internal tools and automation workflows (Bash, C++) to streamline laboratory processes',
            'Built a mobile application for safety inspections using Power Apps and web technologies (HTML/CSS, JavaScript)'
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
