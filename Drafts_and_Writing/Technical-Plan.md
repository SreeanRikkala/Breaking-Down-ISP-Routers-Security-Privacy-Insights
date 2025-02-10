v0.1
### Hale Requirements:
**Technical Plan**
Once you have examined the relevant literature, you should prepare a technical plan that outlines and defines your methodology. 
Important consideration should be made to ensure that your methodology uses the literature to the best extent possible. 
Your technical plan should provide a detailed description of exactly what and how you will do what you plan to do.

Any data collection, testing/development methods, architectures, and data analysis techniques that you wish to use should all be included in your technical plan.

- Coverage	
  - The technical plan overviews all of the areas required to be successful in the project.
- Depth
  - The technical plan contains sufficient detail to understand and define exactly what will be done in the project.
- Soundness
  - The technical plan is rooted in scientific method and the plan is well designed.
- Scope
  - The technical plan is properly scoped for the duration of the class.

# Technical Plan
## Summary
The technical deliverable for this project will be the results of the prototyping, implementation, and testing of standards created from our research deliverable. The research deliverable will 
identify potential security gaps in the consumer networking equipment lifecycle. Taking the results of this research as it develops will allow us to create our primary deliverable: a consumer-friendly standard with procedures 
for securing a certain model of consumer networking equipment. The standard will be demonstrated with a guided configuration during onboarding which will allow the user to maximize their network security. **This configuration will be a user experience demonstration only**. It will not actually configure a device. 
Creating a fully working model utilizing device hardware would be outside the scope of the semester. 

The developed procedure will be verified using a simulated networking environment to demonstrate the mitigation of identified security gaps. Additional tests and procedures can be developed to 
fit the scope of the semester and showcase the effectiveness of the proposed controls. For example, additional tests could examine harddrive data security, field test a real environment, or display examples of attacks being used against insecure default equipment.

## Development of Standard
Parallel to the research plan, we will begin creating our standard. Our standard will take the results of the research plan to begin creating necessary configurations needed to secure a consumer networking device. The standard will prioritize
secure default settings for a number of common consumer networking device features. The standard will attempt to ensure that consumers have the ability to customize the device to their needs while keeping consumer data privacy and security 
as the top priority. The standard will attempt to address all major security gaps that we identify in our research. Any exceptions will be noted and documented to explain lack of coverage.

## Development of Procedures
In order to showcase the feasibility of our standard, we will use it to define a set of procedures for a specific consumer networking device model. This set of procedures will attempt to fully align with our standard. If there are any gaps in coverage, they will be documented
as a potential gap in consumer networking device security, or the standard will be revised due to feasibility restraints. Any exceptions, changes, or noticeable deviations will be documented. The set of procedures will be specific enough that a non-technical individual will be 
able to recreate them in an identical environment.

## Development of Guided Configuration
The guided configuration will be a proof of concept to showcase how a consumer networking device can be made more secure while maintaining user-friendly features. Depending on the remaining length of the semester, this will either be a series of images and diagrams or a simulated web GUI. 
The guided configuration will showcase features such as simple VLANs, the creation of a guest network, disabling unnecessary features, and other steps as showcased in the developed standard and procedures. The guided configuration will also be annotated in such a way as to inform the reader
of what configurations would be set on the device if it were a real hardware environment. Any deviations from our standard or procedure will be documented to show gaps in coverage.

## Simulated Network Environment
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

## Real Network Environment
If time permits, our standards and procedures can be tested a real environment to demonstrate real-life applications...
