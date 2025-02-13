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
Placeholder
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
The technical deliverable for this project will be the results of the prototyping, implementation, and testing of standards created from our research deliverable. The research deliverable will 
identify potential security gaps in the consumer networking equipment lifecycle. Taking the results of this research as it develops will allow us to create our primary deliverable: a consumer-friendly standard with procedures 
for securing a certain model of consumer networking equipment. The standard will be demonstrated with a guided configuration during onboarding which will allow the user to maximize their network security. **This configuration will be a user experience demonstration only**. It will not actually configure a device. 
Creating a fully working model utilizing device hardware would be outside the scope of the semester. 

The developed procedure will be verified using a simulated networking environment to demonstrate the mitigation of identified security gaps. Additional tests and procedures can be developed to 
fit the scope of the semester and showcase the effectiveness of the proposed controls. For example, additional tests could examine harddrive data security, field test a real environment, or display examples of attacks being used against insecure default equipment.

### Development of Standard
Parallel to the research plan, we will begin creating our standard. Our standard will take the results of the research plan to begin creating necessary configurations needed to secure a consumer networking device. The standard will prioritize
secure default settings for a number of common consumer networking device features. The standard will attempt to ensure that consumers have the ability to customize the device to their needs while keeping consumer data privacy and security 
as the top priority. The standard will attempt to address all major security gaps that we identify in our research. Any exceptions will be noted and documented to explain lack of coverage.

### Development of Procedures
In order to showcase the feasibility of our standard, we will use it to define a set of procedures for a specific consumer networking device model. This set of procedures will attempt to fully align with our standard. If there are any gaps in coverage, they will be documented
as a potential gap in consumer networking device security, or the standard will be revised due to feasibility restraints. Any exceptions, changes, or noticeable deviations will be documented. The set of procedures will be specific enough that a non-technical individual will be 
able to recreate them in an identical environment.

### Development of Guided Configuration
The guided configuration will be a proof of concept to showcase how a consumer networking device can be made more secure while maintaining user-friendly features. Depending on the remaining length of the semester, this will either be a series of images and diagrams or a simulated web GUI. 
The guided configuration will showcase features such as simple VLANs, the creation of a guest network, disabling unnecessary features, and other steps as showcased in the developed standard and procedures. The guided configuration will also be annotated in such a way as to inform the reader
of what configurations would be set on the device if it were a real hardware environment. Any deviations from our standard or procedure will be documented to show gaps in coverage.

### Simulated Network Environment
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
|Shared Ubuntu VM| Yes | Corey | 4 Core - 16GB RAM - 60GB Drive - Internet Access  |
|Cisco Packet Tracer| No | Corey | Cisco Packet Tracer for Linux VM|
|GNS3| No | Corey | GNS3 for Linux VM|
|Physical or Emulated Consumer Router| No | Corey | A consumer router with GUI for configuration examination and testing|

