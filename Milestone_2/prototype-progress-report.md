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
| #34 | Defined router evaluation categories and metrics | Completed |
| #14 | Created scoring model quantifiable grid | Completed |
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
| Quantifiable_Security_Grid | Researched backed framework for evaluating routers | .docx |
| Web Structure Draft | One page site layout with comparison, search, and recommendations |  |
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
- Need for of Public Documentation Reliance
- Lack of Performance Testing
- Opinion in Usability Scoring (Without real user testing or interface must rely on online feedback)
- Limited Privileges for Security Testing (Can't validate secure boot, firewall behavior, log and alert handling)
- Dynamic CVE data (data may change day to day)
- Inconsistent Cost Models Across ISPs (some routers are bundled into plans with no cost breakdown)

## Ongoing Risks

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Licensing/paywalls (42) | 7 | 6 | Licensing and paywalls are not as much of an ongoing risk as originally predicted. The original plan of running dynamic analysis on router firmware is now out-of-scope for Milestone 2. Many router configurations are explained vaguely in White Papers. In these cases, physical access to routers would yield better recommendations for scoring routers on the router scoring matrix. That roadblock will become more apparent in Milestone 3. For Milestone 2, we used highly-accessible, no-cost security standard resources, like NIST, with no issue. |
|Network delivery performance issues (2) | 2 | 1 | Our PoC (proof of concept) has changed scope since Milestone 1. Our team opted for a website over a virtualized network environment. Network delivery and performance issues are still a relevant risk; just applied differently. A website can experience performance problems stemming from remote attacks. If our website has an unmanaged field or form, then a DoS attack could bring down the website. Although the website is public-facing, the chances of an attack within the timeline of this semester is unlikely. Even so, Azure has default configurations to prevent DoS attacks. In the unlikely event that a DoS attack does slow or stop the website, then a simple deployment will fix the issue. |
|Missed deadline (12) | 6 | 2 | Deadlines might be missed. However, each team member has shown outstanding initiative. Dedication to the project is in no short supply. |
|Firmware EULAs (0) | 0 | 0 | This risk is deprecated. Firmware decompiling is out-of-scope for the rest of the project. |
|Low user satisfaction (18) | 3 | 6 | This is the only risk that grew since Milestone 1. Now that the technical deliverable is solely scoped to the website, it carries extra expectations on its user satisfaction. One of the listed hinderances is having no clear target audience for this website. What level of technical experience do we reasonably expect a user to have when they harden their router? This question burns a hole in our literature review. How far we translate technical security compliance standards to user-friendly language on the website is tough measure to unanimously agree on. |


