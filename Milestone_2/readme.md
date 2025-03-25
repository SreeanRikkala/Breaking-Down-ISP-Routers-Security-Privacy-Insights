# Progress Report 03-22-2025
## Overview
### Individual Contributions
#### Corey Mekelburg
- Created Azure Web App
  - All services
    - Azure Web App Service
    - Custom Domain
- Started GitHub Action Deployment
- Started Research Paper Outline
  - Introduction
  - Literature Review
- Diagram
  - Azure Services Diagram

#### Alexandria Simonson


#### Sreean Reddy Rikkala


#### Ryan King


## Outcomes
* Website Prototype (Sreean, Corey)
  * Environment Set-up (Sreean, Corey)
  * Basic Navigation (Sreean)
    * Pseudo Content (Sreean, Alexandria)
  * Diagrams for End-Goal (Alexandria, Sreean, Corey)
  * GitHub Actions for Deployment to Cloud Service (Corey, Sreean)
* Research Paper Outline (Alexandria, Corey)
  * Research Question Explored (Ryan, Corey)
    * What quantifiable metrics can be used to assess the security of home routers? 
  * Abstract
  * Skeleton w/ Defined Headings (Corey)
  * Quality Literature Review
    * Studied core research studies and documents for analysis
    * Objective Criteria

## Hinderances
- Corey being five minutes late every meeting

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Licensing/paywalls (42) | 7 | 6 | Licensing and paywalls are not as much of an ongoing risk as originally predicted. The original plan of running dynamic analysis on router firmware is now out-of-scope for Milestone 2. Many router configurations are explained vaguely in White Papers. In these cases, physical access to routers would yield better recommendations for scoring routers on the router scoring matrix. That roadblock will become more apparent in Milestone 3. For Milestone 2, we used highly-accessible, no-cost security standard resources, like NIST, with no issue. |
|Network delivery performance issues (2) | 2 | 1 | Our PoC (proof of concept) has changed scope since Milestone 1. Our team opted for a website over a virtualized network environment. Network delivery and performance issues are still a relevant risk; just applied differently. A website can experience performance problems stemming from remote attacks. If our website has an unmanaged field or form, then a DoS attack could bring down the website. Although the website is public-facing, the chances of an attack within the timeline of this semester is unlikely. Even so, Azure has default configurations to prevent DoS attacks. In the unlikely event that a DoS attack does slow or stop the website, then a simple deployment will fix the issue. |
|Missed deadline (12) | 6 | 2 | Deadlines might be missed. However, each team member has shown outstanding initiative. Dedication to the project is in no short supply. |
|Firmware EULAs (0) | 0 | 0 | This risk is deprecated. Firmware decompiling is out-of-scope for the rest of the project. |
|Low user satisfaction (18) | 3 | 6 | This is the only risk that grew since Milestone 1. Now that the technical deliverable is solely scoped to the website, it carries extra expectations on its user satisfaction. One of the listed hinderances is having no clear target audience for this website. What level of technical experience do we reasonably expect a user to have when they harden their router? This question burns a hole in our literature review. How far we translate technical security compliance standards to user-friendly language on the website is tough measure to unanimously agree on. |
