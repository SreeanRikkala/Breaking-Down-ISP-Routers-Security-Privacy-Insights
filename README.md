## Executive Project Summary
Consumer networking devices are expanding at an accelerating rate, introducing more routers, modems, IoT devices, and other smart home devices into the typical consumers’ home network. These devices often rely on consumers’ knowledge to apply the proper security configuration for a strong network. Relying on consumers’ knowledge can lead to poor data governance, privacy concerns, vulnerabilities, and insecure networks. It is imperative that the best practices for data governance are in place to protect users’ data and keep their networks private.

This research will look to see how best practices for data governance can be automated during the onboarding process of the devices as well as explore a way to make the process seamless to prevent user misconfiguration and minimize the reliance on the user’s knowledge. The objectives are as follows:
- **Reduce User Dependency** 
	- Minimize the reliance on the user's knowledge for applying proper security settings to consumer networking devices.
- **Increase Network Security** 
	- Automate security configurations to enforce the strongest network security.
- **Protect Users Privacy**
	- Automate privacy settings to ensure data is private.
- **Standardize Best Practices** 
	- Create a standard best practice for data governance for networking devices out-of-the-box to consistency between all networking devices.

The proposed approach would require reviewing a consumer’s networking device and researching a way to make it more secure such as allowing automatic firmware updates, setting configuration of the network device to be the most secure settings, requiring default credentials to be changed, and strong password enforcement, more user friendly interface.

The expected result of this research would significantly lessen the stress and end user experiences when they must set up a new networking device as well as grant them peace of mind that the device they set up is secure, and their network is private. This research could help to change the way consumer networking devices handle data governance and potentially make good data governance out of the box a new standard for networking devices.
<br>
<br>
<br>
<br>
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
#### **Annotated Bibliography (`annotated-bibliography.doc`)**
#### **Literature Review (`literature-review.doc`)**
