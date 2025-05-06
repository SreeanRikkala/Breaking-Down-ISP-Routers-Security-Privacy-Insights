
# Progress Report

## Overview
This project evaluates ISP provided and compatible third party consumer routers using a quantifiable grid across our four categories: Security, Usability, Performance, and Cost.

## Outcomes
- Reviewed literature on existing efforts to improve home router security across public and private organizations with vested interest in information security. 
- Evaluated widely-used routers in the Omaha Metropolitan region to make our findings accessible to a wide target audience of everyday security-conscious home router users. 
- Compared routers based on their topologies in security, usability, and performance while using K-Alpha to minimize biases. 
- Provided a public-domain website to share the router evaluation findings with the aim of improving consumer confidence for undecided buyers. 
- Posted the website materials as an open-source project on GitHub, with included self-help resources for installation instructions. 
- Wrote the background, methodology, and results in a concise research paper with a target audience of security and data analysts. 

## Hinderances
The main hinderance of the router evaluations was limited documentation. Security controls recommended by NIST and other federal agencies were often technical, and not specified in the user guides for several routers. For example, CableLabs security, following NIST guidelines, requires a router manufacturer to "upgrade any software components/libraries with known applicable security vulnerabilities in a timely manner" (SBOM-010). But some router manufacturers, such as Asus, do not release version histories on their firmware. The same went for encryption at rest; no user guides specified that security control. 

It was also difficult to find resources on router performance. Most routers advertise their Mbps, but few show their Wi-Fi signal strength (dBm) or ping (ms). Without these metrics, we were not able to build a performance topology for the Arris G34. 
