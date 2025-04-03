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
Our largest hinderance for M2 is defining our target audience. What kind of folk will visit our website for router security evaluations? In M1, we defined our target audience as non-technical. But this definition has proved unhelpful in our paper outline. What level technical understanding do we expect for an audience consulting our website for legacy hashing encryption, blocking network protocols, and configuring network segmentation? At minimum, we should expect our website visitors to have a basic understanding of routers and firewalls before they can make use of our evaluations and recommendations. Whether such verbiage can be achievable for those without technical knowledge is a point of contention. 

Similarly, another hinderance is defining "router security". It is easy enough to pull a definition online. But the router evaluation process has forced our team to consider the full scope of router security. We have labeled certain router controls to fall under umbrella terms of usability, performance, and cost, while still tieing strings to security concepts. For instance, an expensive small-business router has strictor accessibility than a home router. Is this consideration fall into our scope of router security? Or is this a redundant expectation of marketing? Another example, some routers have additional drivers alongside their expected network drivers which help make the router user-friendly. Are these additional drivers a consideration of security or usability? This level of granularity has led to lengthy internal discussions within our team. 

A final hinderance is finding documentation for routers that we are evaluating. Some controls in our router evaluation is so specific that even technical White Papers do not provide an answer. For instance, our control titled "Remote Access" references REQ OOB-008, which demands that remote access into the router's admin interface is disabled until the user replaces the default password with one that is policy-compliant. Specific controls like this may force our team to download router firmware and test for these controls. This hinderance will grow in M3 as our team evaluates more routers. 

## Ongoing Risks
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Licensing/paywalls (42) | 7 | 6 | Licensing and paywalls are not as much of an ongoing risk as originally predicted. The original plan of running dynamic analysis on router firmware is now out-of-scope for Milestone 2. Many router configurations are explained vaguely in White Papers. In these cases, physical access to routers would yield better recommendations for scoring routers on the router scoring matrix. That roadblock will become more apparent in Milestone 3. For Milestone 2, we used highly-accessible, no-cost security standard resources, like NIST, with no issue. |
|Network delivery performance issues (2) | 2 | 1 | Our PoC (proof of concept) has changed scope since Milestone 1. Our team opted for a website over a virtualized network environment. Network delivery and performance issues are still a relevant risk; just applied differently. A website can experience performance problems stemming from remote attacks. If our website has an unmanaged field or form, then a DoS attack could bring down the website. Although the website is public-facing, the chances of an attack within the timeline of this semester is unlikely. Even so, Azure has default configurations to prevent DoS attacks. In the unlikely event that a DoS attack does slow or stop the website, then a simple deployment will fix the issue. |
|Missed deadline (12) | 6 | 2 | Deadlines might be missed. However, each team member has shown outstanding initiative. Dedication to the project is in no short supply. |
|Firmware EULAs (0) | 0 | 0 | This risk is deprecated. Firmware decompiling is out-of-scope for the rest of the project. |
|Low user satisfaction (18) | 3 | 6 | This is the only risk that grew since Milestone 1. Now that the technical deliverable is solely scoped to the website, it carries extra expectations on its user satisfaction. One of the listed hinderances is having no clear target audience for this website. What level of technical experience do we reasonably expect a user to have when they harden their router? This question burns a hole in our literature review. How far we translate technical security compliance standards to user-friendly language on the website is tough measure to unanimously agree on. |
