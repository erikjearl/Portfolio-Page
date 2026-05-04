---
---

# Erik Earl

<span class="iconify" data-icon="tabler:mail"></span> [erikjearl@gmail.com](mailto:erikjearl@gmail.com)
  : <span class="iconify" data-icon="tabler:brand-github"></span> [github.com/erikjearl](https://github.com/erikjearl)
  : <span class="iconify" data-icon="tabler:brand-linkedin"></span> [linkedin.com/in/erikjearl](https://linkedin.com/in/erikjearl)
  : <span class="iconify" data-icon="tabler:phone"></span> [(858) 650-9500](tel:8586509500)


## Experience

**Software Engineer, Platform & DevOps** | Qualcomm
  : **April 2025 – Present**

- Designed and implemented a Kubernetes-native Database as a Service platform, replacing manual VM provisioning with a fully self-service, API-driven system
- Developed a custom Kubernetes operator (Python, Kopf) and CRDs to enable declarative, on-demand database provisioning using Kubernetes control loop patterns and custom resources
- Enabled self-service database provisioning for engineering teams, eliminating ticket-driven workflows, improving platform adoption, and optimizing resource utilization by migrating from VMs to containerized databases
- Integrated ExternalDNS with a custom webhook service to automate DNS reconciliation between Kubernetes resources and internal BlueCat DNS, managing record lifecycle and ownership
- Delivered platform infrastructure using GitOps and CI/CD (Jenkins, Helm, Fleet, Terraform) across K8s clusters
- Implemented observability and alerting with Prometheus and Grafana to monitor and debug production systems
- Operated the Kubernetes platform including networking (Cilium/Calico), ingress and Gateway API, DNS, TLS/certificate management, firewall and VIP routing, cluster lifecycle management, and incident response

**DevOps & Platform Engineer Intern** | Qualcomm
  : **May 2024 – Aug 2024**
- Built an automated TLS certificate management system (Kubernetes, Cert-Manager), automating certificate issuance, renewal, and rotation, reducing manual overhead and improving security compliance
- Developed a Python Kubernetes operator to manage certificate lifecycle and automate resource provisioning
- Designed and implemented Jenkins CI/CD pipelines for automated testing and deployment
- Worked in Linux-based environments using CLI tools to manage containerized, cloud-native systems


**Software Engineer Intern** | Qualcomm
  : **May 2023 – Aug 2023**

- Implemented a backend IP lifecycle management system, reducing manual approval processes by ~80%
- Developed REST APIs using Python and Django to support a distributed, multi-service architecture


**Software Development Intern** | Lubrizol Corporation
  : **May 2022 – Aug 2022**

- Developed internal tools and automation workflows (Bash, C++) to streamline laboratory processes
- Built a mobile application for safety inspections using Power Apps and web technologies (HTML/CSS, JavaScript)


## Education
B.S. Computer Science, Minor in Artificial Intelligence | *Cum Laude*
: **Dec 2024**

Case Western Reserve University | *Cleveland, OH*
  : GPA: 3.85 / 4.00


## Projects

**Kubernetes Based Game Server Platform** *(Homelab)*

- Designed and implemented a Kubernetes-native platform to provision and manage containerized Minecraft servers via custom resources, automatically creating Deployments, Services, and PersistentVolumeClaims
- Developed a Kubernetes operator and CRDs to automate server provisioning, enabling fast deployment of  servers at scale through a configurable, declarative interface mapped to container runtime settings
- Built a Flask-based control plane exposing REST APIs to interface with the Kubernetes API, enabling server lifecycle management and routing requests between external clients and in-cluster services
- Built a multi-node Kubernetes homelab cluster using kubeadm on bare-metal hardware (repurposed PCs and Raspberry Pi), configuring CNI networking, port forwarding, and routing for external service exposure


**Manga Translation with Machine Learning and Computer Vision** *(Senior Capstone)*

- Developed a computer vision pipeline to automate manga translation with image detection & segmentation, optical character recognition (OCR), and language translation models
- Trained a binary segmentation model leveraging U-Net architecture using PyTorch for panel segmentation with transfer learning (ResNet34 backbone, dice loss function)
- Developed a web-based frontend (React, Next.js) and deployed via AWS Amplify


## Skills

**Certifications:** Kubernetes CKAD

**Languages:** Python, Go, JavaScript, SQL, Bash

**Cloud & Infrastructure:** Kubernetes (kubeadm, EKS), Docker, containerd, Terraform, AWS (EKS, S3), Helm

**CI/CD & Platform Engineering:** Jenkins, Git, GitOps (Fleet), Linux / Unix, Virtual Machines

**Observability & Networking:** Prometheus, Grafana, DNS, HTTP, REST APIs, Cilium CNI
