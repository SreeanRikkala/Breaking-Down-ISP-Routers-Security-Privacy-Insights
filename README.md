# Breaking Down ISP Routers: Security & Privacy Insights

## Executive Summary
There is an expectation of privacy and security for marketed network devices. Routers, modems, switches, IoT devices, and other smart home devices are expected to keep PII (Personal Identifiable Information) secure. Although there are industry standards for information security, such as NIST and SOC2, routers often rely on consumers’ knowledge to apply the proper security configuration. Relying on consumers’ knowledge can lead to poor data governance, privacy concerns, vulnerabilities, and insecure networks. It is imperative that the best practices for data governance are in place to protect users’ data and keep their networks private.

## Project Goals

## Project Methodology
### Literature Review
Our literature review followed with a systematic approach to identify, analyze, and synthesize relevant literature on ISP router security. This involved a comprehensive review of academic publications, technical documentation, and industry standards.

**Keywords Used for literature search:** ISP router security, SOHO router vulnerabilities, Router hardening automation, Smart home security, IoT router security, Router security standardization.

#### **PRISMA Technique**
We used PRISMA technique for screening the research papers and to achieve clear inclusion/exclusion criteria.
<div align="center">
    <img src="Miscellaneous/prisma.png" alt="PRISMA Flowchart" width="60%">
</div>

#### Documentation
**[View Annotated Bibliography](References_Citations)**

**[View Literature Review](Research_Materials)**

### Technical Approach
### Summary
The technical deliverable for this project will be a website containing the results of our research and analysis of common consumer routers. This website will contain easily readable information regarding our research with the intent of informing consumers of potential security flaws that may exist in their network. Additionally, this website will contain the results of our analysis on a sample of common consumer routers which are supported by major Internet Service Providers (ISPs) in the United States. The details of our analysis will be readily available, and it will involve a developed list of criteria sourced from our research. The purpose of this deliverable is to provide an objective, informative, and useful website to bolster security literacy amongst consmers.


### Evaluation Framework
### System Architecture
#### Website Deployment and Access
![Website Deployment and Access](https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights/blob/main/Milestone_2/Diagrams/webapp-deployment-architecture.png?raw=true)

#### Router Hardening Example
![Router Hardening Example](https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights/blob/main/Milestone_2/Diagrams/RouterHardening.png?raw=true)

## Results / Findings
### Router Security Analysis
### Router Usability Findings
### Performance Testing Results
### Cost Analysis
### Comprehensive Router Evaluation Grid
### Actionable Security Recommendations
### Website Implementation

## Deliverables

## Lessons Learned
### Technical Challenges
### Scope Adjustments
#### Methodology Refinement

As our research progressed from Milestone 1 to Milestone 3, we refined our evaluation framework based on findings from our literature review and preliminary assessments. One significant refinement was in our evaluation criteria weighting:

**Initial Weighting (Milestone 2):**
- Security: 50%
- Performance: 25% 
- Usability: 17%
- Cost: 8%

**Refined Weighting (Milestone 3):**
- Security: 40%
- Performance: 30%
- Usability: 20%
- Cost: 10%

This refinement comes from our research ehich revealed that performance and usability factors have greater influence on security outcomes than initially estimated, as they directly impact whether users maintain recommended security configurations.

### Team Coordination

## Future Work
### Research Extensions
### Tool Development Opportunities
### Industry Recommendations

## Conclusion

## Install Instructions

### Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (LTS version)
- npm or Yarn

### Installation Guide

#### Cloning the Repository
To download the project, run:

```sh
git clone https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights.git
cd Breaking-Down-ISP-Routers-Security-Privacy-Insights/react-website
```

#### Installing Dependencies
Once inside the `react-website` directory, install all required dependencies:

**Using npm - most recomended**
```sh
npm install
```

If you need to update Node.js, ensure you find an appropriate way to update for your machine. One way to update is:

```sh
npm install -g n
n stable
```

**Using Yarn**
```sh
yarn install
```

### Getting Started

#### Running the Development Server
Start the application in development mode:

**With npm**
```sh
npm start
```

**With Yarn**
```sh
yarn start
```
The application should now be accessible at `http://localhost:3000/` in your browser.

##### Production Deployment
Our production website is deployed on Microsoft Azure and accessible at https://router-security.mek-tech.net. The deployment uses Azure Web Apps with GitHub Actions for CI/CD pipeline.

For those wishing to deploy their own instance, we recommend:
- Azure Web App Service (Basic tier or higher)
- GitHub repository connection for automated deployment


### Troubleshooting Common Issues

* **Port Already in Use**
    * If port 3000 is busy, run:
  ```sh
  npx kill-port 3000
  ```

* **Dependency Issues**
    * Delete `node_modules/` and reinstall:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

* **Command Not Found Errors**
    * Ensure Node.js and npm are correctly installed:
  ```sh
  node -v
  npm -v
  ```

## Troubleshooting

### Common Installation Issues
* **Port Already in Use**
   * If port 3000 is busy, run:
     ```sh
     npx kill-port 3000
     ```

* **Dependency Issues**
   * Delete `node_modules/` and reinstall:
     ```sh
     rm -rf node_modules package-lock.json
     npm install
     ```

* **Command Not Found Errors**
   * Ensure Node.js and npm are correctly installed:
     ```sh
     node -v
     npm -v
     ```

### Website Navigation Issues
* **Pages Not Loading**
   * Clear your browser cache and cookies
   * Try a different browser
   * Check your internet connection

* **Images Not Displaying**
   * Verify you have a stable internet connection
   * Try refreshing the page
   * Clear your browser cache
 

## Project Repository Structure
```
Breaking-Down-ISP-Routers-Security-Privacy-Insights/
├── Administration/
├── Drafts_and_Analysis/
├── Drafts_and_Writing/
├── Ideas/
│   └── Brainstorming/
├── Milestone_1/
├── Milestone_2/
│   ├── Diagrams/
│   └── paper-outline/
├── Milestone_3/
│   ├── K-Alpha/
│   ├── Research_Paper/
│   └── Router-Evaluations/
├── Miscellaneous/
├── Presentations/
├── References_Citations/
├── Research_Materials/
│   ├── Reviews/
│   └── Standards/
├── react-website/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
└── README.md

```

## References

## Appendices
