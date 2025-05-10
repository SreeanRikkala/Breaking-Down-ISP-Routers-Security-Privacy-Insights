# Breaking Down ISP Routers: Security & Privacy Insights

## Executive Summary
There is an expectation of privacy and security for marketed residential network devices. Consumers expect routers, modems, switches, IoT devices, and other smart home devices to be secure out of the box. Although there are industry standards for information security, such as NIST and SOC2, home routers often rely on the consumer's knowledge to apply proper security controls, such as performing updates and setting up secure wireless networks. With a wide range of technical proficiency, relying on consumers’ can lead to poor data governance, privacy concerns, vulnerabilities, and insecure networks. It is imperative that the best practices for data governance are in place by default to protect users’ data and keep their networks private.

## Project Goals
Our project research focuses on analyzing common security vulnerabilities and relevant controls in ISP routers and comparing them through a grid that offers an easy to understand overview of each router's strength and weaknesses. The results of our research will be displayed on a website which provides insights into consumer router security. The objectives are as follows:
- **Assess and Identify Security Risks**
    - Research security flaws for the routers that could expose users data and privacy such as default passwords or outdated firmware.
- **Develop a Grid for Comparison**
    - Create a methodology to rate the routers using key evaluation criteria sorted into categories, helping consumers easily compare router options.
- **Test Grid and Examine Results**
    - Perform mutliple rating tests using the grid against different routers to test its reliability as a security evaluation metric.
- **Research Router Usability**
    - Analyze how consumer friendly the ISP routers are with their interface, setup, and configuration.
- **Examine Performance Capabilities**
  - Research useful performance factors that users may be interested in such as Wi-Fi speed and coverage.
- **Evaluate Cost**
  - Review rental cost versus purchase cost and hidden fees
- **Give Actionable Recommendations**
  - Provide steps the user can follow to update their firmware if it's out of date or change default password based on the metrics from the router that was analyzed.
- **Post Findings on a Website**
    - Compile all the research and findings in a user friendly way on a webpage that includes detailed analysis and security tips.

The proposed approach would require reviewing a router device and researching a way to make it more secure such as allowing automatic firmware updates, setting configuration of the router to be the most secure settings, requiring default credentials to be changed, and strong password enforcement, more user friendly interface.

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

#### Evaluation Grid
Evaluation criteria and categories were formed from the literature review, standards, and documentation. The criteria were placed in a grid and weighted with a scoring system for various levels of control implementation. The resulting security section of the grid was used in the research paper for an inter-rater reliability assessment. The usability, performance, and cost sections were utilized in the website for additional information on the project website. 

#### Inter-Rater Reliability Assessment

### Technical Approach
#### Summary
The technical deliverable for this project is a website containing the results of our research and analysis of common consumer routers. This website contains easily readable information regarding our research with the intent of informing consumers of potential security flaws that may exist in their network. Additionally, this website has the results of our analysis on a sample of common consumer routers which are supported by major Internet Service Providers (ISPs) in the United States. The details of our analysis is readily available, and it involves a developed list of criteria sourced from our research. The purpose of this deliverable is to provide an objective, informative, and useful website to bolster security literacy amongst consmers.

#### Website Deployment and Access
![Website Deployment and Access](https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights/blob/main/Milestone_2/Diagrams/webapp-deployment-architecture.png?raw=true)

#### System Architecture

#### Router Hardening Example
![Router Hardening Example](https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights/blob/main/Milestone_2/Diagrams/RouterHardening.png?raw=true)

## Results / Findings
Our comprehensive evaluation of ISP router security revealed significant findings across security, performance, and
cost dimensions.

### Overview of Outcomes

We successfully evaluated multiple ISP-provided and third-party consumer routers using a quantifiable scoring matrix
based on industry standards. Our evaluation revealed important security gaps, performance variations, and cost
considerations that impact consumer router choices.

### Detailed Outcomes

- Applied evaluation criteria with weighted scoring: Security (40%), Performance (30%), Usability (20%), and Cost (10%)
- Evaluated the following ISP routers:
  - Arris G34
  - Arris G54 (Comcast version)
  - Arris G54 (Charter version)
  - Asus CMAX6000
  - Motorola MG8702
  - Motorola MT8733
  - NETGEAR CAX30
  - NETGEAR CBR750
  - TP-Link Archer AXE300
- Used Krippendorff's Alpha methodology to test consistency and minimize bias between reviewers
  - Suggested potential improvements to evaluation grid and gaps which may contribute to lower Krippendorff Alpha results
- Identified critical security findings:
  - Inconsistent WPA security implementation across router models
  - Many admin interfaces lacking HTTPS encryption
  - Poor documentation of firmware update frequency and practices
  - No documentation on encryption at rest for stored configurations
- Documented performance characteristics:
  - Premium routers delivered 90-100% of advertised speeds
  - Budget models only achieved 60-80% of promised performance
  - Higher-end models maintained sub-10ms latency
  - Budget models showed 10-100ms latency fluctuations
- Analyzed ISP business practices:
  - Monthly rental fees ranging from under $5 to over $10
  - Router restrictions limiting consumer choice
  - Hidden fees impacting total cost of ownership
- Created a public-facing website to share our router evaluation findings
- Compiled a comprehensive repository of router evaluations with transparent scoring metrics


## Lessons Learned
### Technical Challenges
During our project, we encountered and overcame several technical challenges:

1. **Router Documentation Availability**: Many ISP routers lack comprehensive documentation, requiring us to develop evaluation approaches that could work with limited information.

2. **Evaluation Consistency**: Creating consistent evaluation criteria across diverse router models with different feature sets required careful standardization of our metrics.

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
Our project involved a group of four members working across research, analysis, and technical implementation. We established an effective coordination system that leveraged several collaborative tools:

1. **Project Management Tools**: We utilized GitHub's Kanban board to track tasks, visualize our workflow, and manage our project backlog. This allowed us to clearly see which tasks were in progress, completed, or waiting to be started.

2. **Communication Channels**: Slack served as our primary communication platform for daily interactions, quick questions, and sharing resources. 

3. **Regular Synchronization**: We held weekly team meetings to discuss progress, address challenges, and realign on priorities. These meetings ensured everyone remained on the same page throughout the project lifecycle.

4. **Statistical Reliability Analysis**: For our router evaluations, we implemented Krippendorff's Alpha (K-Alpha) to measure inter-rater reliability. Each team member independently evaluated the same routers using our framework, and we used K-Alpha to statistically validate the consistency of our ratings across different evaluators.

5. **Distributed Responsibilities**: We assigned tasks based on team members' areas of expertise - with some focusing on security research, others on evaluation framework development, and others on website implementation.

## Future Work
As this project concludes our academic capstone requirements, we've identified several valuable directions others could pursue to build upon our work:

### Potential Research Extensions
- **Broader Router Coverage**: Our analysis covered a limited sample of ISP routers. Future researchers could expand this to include more brands, models, and router types to create a more comprehensive security landscape.
- **Temporal Security Analysis**: A valuable study would be examining how router security evolves over time through firmware updates and hardware revisions.
- **User Behavior Research**: Research into how consumers actually implement router security recommendations would provide insights into the effectiveness of security education efforts.

### Suggested Technical Enhancements
- **Evaluation Automation**: The manual evaluation process we developed could be partially automated through scripted assessment tools that check for common vulnerabilities.
- **Website Functionality Expansion**: The website framework we created could be enhanced to include user accounts, personalized recommendations, and community contributions.
- **Integration with Existing Platforms**: Our router evaluation framework could be integrated with existing consumer product review platforms to reach a wider audience.

### Industry Adoption Opportunities
- **Security Standards Development**: Our evaluation criteria could inform the development of simplified security standards for consumer networking equipment.

## Conclusion

## Install Instructions
### Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (LTS version)
- npm or Yarn

### Installation Instructions

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

## Getting Started

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

#### Production Deployment
Our production website is deployed on Microsoft Azure and accessible at https://router-security.mek-tech.net. The deployment uses Azure Web Apps with GitHub Actions for CI/CD pipeline.

For those wishing to deploy their own instance, we recommend:
- Azure Web App Service (Basic tier or higher)
- GitHub repository connection for automated deployment


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
├── Milestone_1/
├── Milestone_2/
├── Milestone_3/
├── Miscellaneous/
├── Presentations/
├── References_Citations/
├── Research_Materials/
├── react-website/
└── README.md

```
---

© 2025 BDIR. All rights reserved.

This project was completed as part of CYBR 4580/8950 Capstone Project at University of Nebraska Omaha.
