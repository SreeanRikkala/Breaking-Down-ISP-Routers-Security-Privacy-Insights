## Executive Project Summary
Consumer networking devices are expanding at an accelerating rate, introducing more routers, modems, IoT devices, and other smart home devices into the typical consumers’ home network. These devices often rely on consumers’ knowledge to apply the proper security configuration for a strong network. Relying on consumers’ knowledge can lead to poor data governance, privacy concerns, vulnerabilities, and insecure networks. It is imperative that the best practices for data governance are in place to protect users’ data and keep their networks private.

## Goals and Objectives
This research will look to see how best practices for data governance can be automated improved during the onboarding process of the devices as well as explore a way to make the process seamless to prevent user misconfiguration and minimize the reliance on the user’s knowledge. The objectives are as follows:
- **Reduce User Dependency** 
	- Minimize the reliance on the user's knowledge for applying proper security settings to consumer networking devices.
- **Increase Network Security** 
	- Harden security configurations to enforce the strongest network security.
- **Protect Users Privacy**
	- Harden privacy settings to ensure data is private.
- **Standardize Best Practices** 
	- Define success criteria for best practices out of the box based off of current best practices. 

The proposed approach would require reviewing a consumer’s networking (router?) device and researching a way to make it more secure such as allowing automatic firmware updates, setting configuration of the network device to be the most secure settings, requiring default credentials to be changed, and strong password enforcement, more user friendly interface.

## Merit
The expected result of this research would significantly lessen the stress and end user experiences when they must set up a new networking device as well as grant them peace of mind that the device they set up is secure, and their network is private. This research could help to change the way consumer networking (routers?) devices handle data governance and potentially make good data governance out of the box a new standard for (routers?) networking devices.
<br>

## Proposed Project Timeline
![image](https://github.com/user-attachments/assets/bbafcf73-e368-4299-8967-62daef4c0a2f)
<br>

## Risk List
|Risk name (value)  | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Licensing/paywalls (63) | 7 | 9 | Licensing/paywalls may prohibit us from performing a technical analysis. Cybersecurity tools often require paid licensing. Even if there are free tools to simulate a network topology in the technical analysis, it may not have the features necessary to cover our use cases. We need to simulate a large variety of attacks to prove the resilience of our proposed methodology. Licensing could also prohibit our research in other ways, such as the researching existing onboarding processes of home network devices. |
|Network delivery performance issues (20) | 10 | 2 | The finalized PoC (proof of concept) may have performance issues. To preface, the team is still defining the scope of the PoC. At minimum, it will be a simulated network with the configurations of our proposed methodology. As of now, the planned PoC is going to be simulated virtually. The idea is that its network topology could be implemented into a marketable home networking device with confidence. The problem is that there is a diverging market in network delivery. Our PoC can be future proof only if it is polymorphic to fiber, 5G, and StarLink compatibility. The extra memory dedicated to security configurations may also come at a sacrifice to packet delivery, causing outages and latency for our PoC. |
|Missed deadline (18) | 6 | 3 | Deadlines might be missed. A natural consequence of any group project is member avilability. Life circumstances can shift focus away from this class, causing deliverables to miss their deadlines. |
|Firmware EULAs (16) | 2 | 8 | Legal restrictions may prevent us from researching firmware of existing network devices. It is unclear what questions can be answered through white papers alone. The network topology of marketed home network devices may only be discoverable through the decompiling of their firmware. The team is fully dedicated to upholding the law and honor all EULAs. Because of this, the team may hit legal roadblocks when researching home network firmware. |
|Low user satisfaction (10) | 2 | 5 | The finalized PoC may have low user satisfaction. The onboarding process of our PoC would be longer and more complicated than that of existing network devices on the market. The risk is that our extended onboarding process will require a level of technical knowledge that confuses and frustrates our target audience of everyday home network users. Low satisfaction would be predictable, but not based on any empirical evaluations because the team has no plans for collecting user feedback. |


## Project Methodology
### Literature Review
Our literature review followed a **thematic analysis method** with a systematic approach to identify, analyze, and synthesize relevant literature on consumer networking device security. This involved a comprehensive review of academic publications, technical documentation, and industry standards published between **2002 and 2023**.

#### **PRISMA Technique**
We used PRISMA technique for screening the research papers and to achieve clear inclusion/exclusion criteria.
<div align="center">
    <img src="Miscellaneous/prisma.png" alt="PRISMA Flowchart" width="60%">
</div>

#### Documentation
**[View Annotated Bibliography](References_Citations)** 

**[View Literature Review](Research_Materials/Literature-review.docx)**  

## Technical Plan
### Summary
The technical deliverable for this project will be a website containing the results of our research and analysis of common consumer routers. This website will contain easily readable information regarding our research 
with the intent of informing consumers of potential security flaws that may exist in their network. Additionally, this website will contain the results of our analysis on a sample of common consumer routers which are supported 
by major Internet Service Providers (ISPs) in the United States. The details of our analysis will be readily available, and it will involve a developed list of criteria sourced from our research. The purpose of this deliverable 
is to provide an objective, informative, and useful website to bolster security literacy amongst consmers. 

### Development of Evaluation Criteria
Parallel to the research plan, we will begin creating our evaluation criteria. Our evaluation criteria will take the results of the research plan to identify core aspects of router security, usability, consumer privacy, and value. For example, 
core aspects of "security" could include patching cadence, manufacturer responses to vulnerabilities, and secure defaults out of the box. The criteria will be scoped to cover essential components of each category, but they will also be refined a limited 
scope to avoid breaching the project's timeline.

### Data Collection and Testing
Once we have properly defined our evaluation criteria, we can begin our data collection process. Our process will roughly follow these stages:
1. Selection of Routers
2. Evaluation of Router Specifications
3. Evaluation of Router GUI
4. Scoring Based on Findings
5. Final Consensus

The selection of routers will be done via publicly available "supported routers" lists from the most common ISPs in the United States. A sample of consumer routers will be chosen from each price point and internet connection type. If the data collection and 
analysis portion of this project proves too time consuming, routers from the most widely adopted connection types will be prioritized. The evaluation of router specifications and GUIs will be done via publicly available manuals and specification sheets. Devices 
which do not support this evaluation method will not be prioritized for analysis. The data gathered from these manuals and sheets will be compared against our criteria. If needed, the criteria may be updated if it proves insufficient in covering any gaps which may 
be uncovered during our analysis. 

### Development of Webpage
The guided configuration will be a proof of concept to showcase how a consumer networking device can be made more secure while maintaining user-friendly features. Depending on the remaining length of the semester, this will either be a series of images and diagrams or a simulated web GUI. 
The guided configuration will showcase features such as simple VLANs, the creation of a guest network, disabling unnecessary features, and other steps as showcased in the developed standard and procedures. The guided configuration will also be annotated in such a way as to inform the reader
of what configurations would be set on the device if it were a real hardware environment. Any deviations from our standard or procedure will be documented to show gaps in coverage.

### Final Results and Review
The simulated network environment will be created virtually. Depending on needs, this could be created in one of two ways:
1. Using GNS3 on a virtual Ubuntu Linux machine
2. Using Cisco's Packet Tracer

Our preferred method is method 1. Method 1 would allow us to create a virtual network topology as complex as needed using a free, open-source tool. GNS3's network simulation will then 
allow us to showcase how the created standard protects data on the consumer's network. There are limitations to this software, however, as it will only simulate the network topology. Configuration changes which affect 
how one interacts with the device physically will not be able to be simulated. In order to ensure all teammates can access and utilize GNS3, we will host the executable on an Ubuntu Virtual Machine utilizing 
the University of Nebraska at Omaha's VMware infrastructure. One of our technical implementers will ensure the device is configured appropriately and that proper data backup procedures are being followed to prevent loss of
configuration data. 

Method 2 can be used in a similar manner, but it will have less features available. Cisco's Packet Tracer would allow us to only simulate a network using Cisco's devices, and it is not as feature rich as GNS3. An example of loss functionality would be the 
inability to access simulated GUIs. 

The obvious drawback to these methodologies is that we would not be simulating the environment using actual consumer equipment. Unfortunately, many consumer networking equipment manufacturers do not include virtual machines which can be used
to emulate a virtual environment. However, through examination of technical specfications, available GUIs, and networking knowledge, we will be able to build a virtual environment which is logically equivalent to configuration changes made
on the physical consumer router. For network related items in the standard and procedure we have created, this will allow us to showcase that our proposed changes sufficiently address the security gaps identified.

### Real Network Environment
If time permits, our standards and procedures can be tested on a real environment to demonstrate a real-world application. This would be done by taking a physical model of our chosen networking device and configuring it in a home network. After following our 
procedures, we would then verify that the device aligns to our standards and identify any potential gaps in coverage. This report would require access to a user's home network. If not feasible, or denied due to privacy concerns, a small home network using 
personal computers can be simulated in a real-world scenario. 

## Resources Needed
|Resource  | Dr. Hale needed? | Investigating Team member | Description |
|-------------------|---------|---------------------------|-------------|
|Shared Ubuntu VM| Yes | Corey | 4 Core - 16GB RAM - 60GB Drive - Internet Access|
|Cisco Packet Tracer| No | Corey | Cisco Packet Tracer for Linux VM|
|GNS3| No | Corey | GNS3 for Linux VM|
|Physical or Emulated Consumer Router| No | Corey | A consumer router with GUI for configuration examination and testing|
|Azure Web Server| No | Corey | Web server for hosting site contents|

