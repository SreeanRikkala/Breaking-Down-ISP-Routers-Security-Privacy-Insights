# Progress Report (03/22/2025)
## Overview

We’ve followed a research methodology aligned with best practices from:

- NIST 8425A (Security Requirements for Consumer Routers)

- NIST 800-128 (Security-Focused Configuration Management)

- RFC 2544 (Network Performance Testing)

- CVSS (Common Vulnerability Scoring System)

- BSI TR-03148 Secure Broadband Router

- CL-GL-GDS-BCP-V01-211007: Gateway Device Security Best Practices

- TR-124: Functional Requirements for Broadband Residential Gateway Devices

- System Usability Scale (SUS)

Methodological Steps Completed So Far:

- Defined quantifiable security metrics based on research-backed standards.

- Created a weighted scoring system for router evaluation.

- Established a research-informed performance evaluation method (via extracting data from documents & third-party benchmarks).

- Created base website

- Started research paper
  
- Structured router reviews into four main categories: Security, Usability, Performance, Cost.


## Outcomes - Tasks Achieved from the Backlog
| Task ID | Description | Status |
| --- | --- | --- |
| #12, #16 | Literature review of NIST, ISO, CVSS, BSI TR-03148, CL-GL-GDS-BCP-V01-211007, NIST IR 8425A, TR-124, and RFC standards | Completed |
| #34 | Defined router evaluation categories and sub-metrics | Completed |
| #14 | Created security scoring model quantifiable grid | Completed |
| #35 | Collected documentation from major ISPs (router specs) | In Progress |
| #31 | Setup Codebase | In Progress |
| #32 | Evaluate Deployment Strategy | In Progress |
| #37 | Create Skeleton Website | In Progress |
| #36 | Created comparison matrix template | Completed |
| #23 | Create Research Paper | In Progress |
| #38 | Create Literature Review Summary | Completed |
| #39 | Create Project Realization Documents for Milestone 2 Submission | Completed |
| #40 | Created Methodology explaining the reasoning for the router grid scoring | Completed |
| #41 | Create Scoring Criteria explaining scoring of each item | Completed |
| #46 | Create Visual Diagrams Document diagrams in main README.md file for conveying project details | In Progress |
| #36 | Ensure Issues and Projects are updated and reflected in Github Kaban | In Progress |
| #37 | Create PowerPoint of Project for Milestone 2 | In Progress |
| #38 | Environment Setup - Update README.md file with setup instructions in main repository | In Progress |
| #47 | Create Video for M2 Submission | In Progress |

## Product Increments (Deliverables in This Milestone)


| Deliverable | Description | Format |
| --- | --- | --- |
| Evaluated_Router_Matrix | Quantifiable scoring system with weighted criteria | .docx |
| Quantifiable_Security_Grid | Researched-backed framework for evaluating routers | .docx |
| Web Structure Draft | One-page site layout with comparison, search, and recommendations |  |
| Literature Review Summary | Summarized References from NIST, IEEE, ISO, CVE databases | .docx |
| Research Paper | Skeleton of research paper with summary | .docx |
| Methodology | Created Methodology explaining the reasoning for the router grid scoring | .md |
| Scoring_Criteria | Create Scoring Criteria explaining scoring of each item | .md |
| Project_Realization_Document | Document prototype-progress-report.md Outlining Milestone 2 Requirement of Progress | .md |
| Visual_Diagrams | Document diagrams in main README.md file for conveying project details | .md |
| Issue Tracking | Ensure Issues and Projects are updated and reflected in Github Kaban | Github |
| Presentation_M2 | Create powerpoint of project including 1) conveying a sense of interest and excitement about your project 2) cool product demos, and 3) interesting intermediate findings of conducting your projects. | .pptx |
| Environment Setup | Update README.md file with setup instructions in main repository | .md |
| Video Presentation | Video Reviewing PowerPoint |  |

## Binding Tasks, Code, and Documentation Together

| Task ID | Description | Code / Artifact | Documentation |
| --- | --- | --- | --- |
| #12, #16 | Literature review of NIST, ISO, CVSS, BSI TR-03148, CL-GL-GDS-BCP-V01-211007, NIST IR 8425A, TR-124, and RFC standards |  | Literature_Review_Summary.docx |
|  | Defined router evaluation categories and sub-metrics | Evaluated_Router_Matrix.docx | Scoring_criteria.md |
| #14 | Created security scoring model quantifiable grid | Quantifiable_Security_Grid.docx |  |
| #35 | Collected documentation from major ISPs (router specs) |  | Breaking-Down-ISP-Routers-Security-Privacy-Insights\Research_Materials\Router_Review_Documents |
| #31 | Setup Codebase |  |  |
| #32 | Evaluate Deployment Strategy |  |  |
| #37 | Create Skeleton Website |  |  |
| #36 | Created comparison matrix template | Router_Comparison_Matrix.xlsx | Methology.md |
| #23 | Create Research Paper |  |  |
| #38 | Create Literature Review Summary |  | Literature_Review_Summary.docx |
| #39 | Create Project Realization Documents for Milestone 2 Submission |  | prototype-progress-report.md |
| #40 | Created Methodology explaining the reasoning for the router grid scoring |  | Methodology.md |
| #41 | Create Scoring Criteria explaining scoring of each item |  | Scoring_Criteria.md |
| #42 | Research CVEs Found |  | CVE_Data.xlsx |
| #46 | Create Visual Diagrams Document diagrams in main README.md file for conveying project details |  | README.md |
| #36 | Ensure Issues and Projects are updated and reflected in Github Kaban |  | Github |
| #37 | Create PowerPoint of Project for Milestone 2 |  |  |
| #38 | Environment Setup - Update README.md file with setup instructions in main repository |  | README.md |
| #47 | Create Video for M2 Submission |  |  |

## Hinderances

- No Physical Access to Routers
- Reliance of Public Documentation
- Lack of Performance Testing
- Subjectivity in Usability Scoring (Without real user testing or interface must rely on online feedback)
- Limited Privileges for Security Testing (Can't validate secure boot, firewall behavior, log and alert handling)
- Dynamic CVE data (data may change day to day)
- Inconsistent Cost Models Across ISPs (some routers are bundled into plans with no cost breakdown)

## Ongoing Risks

|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Licensing/paywalls (63) | 5 | 6 | Licensing/paywalls may prohibit us from performing a technical analysis. Cybersecurity tools often require paid licensing. Even if there are free tools to simulate a network topology in the technical analysis, it may not have the features necessary to cover our use cases. We need to simulate a virtual environment to find hardening methods for our networking devices. Without paid tools, research into hardening methods may present researching roadblocks. Licensing could also prohibit our research in other ways, such as the researching the firmware of home network devices. |
|Network delivery performance issues (20) | 10 | 2 | The finalized PoC (proof of concept) may have performance issues. To preface, the team is still defining the scope of the PoC. At minimum, it will be a simulated network with the configurations of our proposed methodology. As of now, the planned PoC is going to be simulated virtually. The idea is that its hardening topology could be implemented into a home networking device with confidence. The problem is that there is a diverging market in network delivery. Our PoC can be future proof only if it is polymorphic to fiber, 5G, and StarLink compatibility. The extra memory dedicated to security configurations may also come at a sacrifice to packet delivery, causing outages and latency for our PoC. |
|Missed deadline (18) | 6 | 4 | Deadlines might be missed. A natural consequence of any group project is member avilability. Life circumstances can shift focus away from this class, causing deliverables to miss their deadlines. |
|Firmware EULAs (16) | 2 | 8 | Legal restrictions may prevent us from researching firmware of existing network devices. It is unclear what questions can be answered through white papers alone. The network topology of marketed home network devices may only be discoverable through the decompiling of their firmware. The team is fully dedicated to upholding the law and honor all EULAs. Because of this, the team may hit legal roadblocks when researching home network firmware. |
|Low user satisfaction (10) | 2 | 4 | The finalized website may have low user satisfaction. Even with detailed explanations, the hardening methods presented on the website may be too technical for those without IT experience. The risk is that website will require a level of technical knowledge that confuses and frustrates our target audience of everyday home network users. Low satisfaction would be predictable, but not based on any empirical evaluations because the team has no plans for collecting user feedback. |


