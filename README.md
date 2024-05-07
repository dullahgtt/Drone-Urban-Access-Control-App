# Human-Factors-Group-Project

Utilizing research found in: https://dl.acm.org/doi/10.1145/3565287.3617633

## Introduction: 

The proliferation of Unmanned Aerial Systems (UAS), commonly known as drones, in both commercial and personal domains has experienced a rapid surge in recent years. In the United States alone, there are over 900,000 drones registered with the Federal Aviation Administration (FAA). Despite the widespread accessibility and use of drones, concerns persist regarding regulations governing their security and privacy implications. Instances of people seizing drones flying over private property, unauthorized hijackings, and near collisions with other aircraft and objects underscore the need for heightened security measures. 

We propose an initial exploration of this issue to address these concerns on a wider scale by introducing a model that not only evaluates access to environments based on designated attributes, but also helps companies direct their drones safely in public spaces. This model allows for the restriction or permission of drone flyovers in specific physical spaces, termed as zones. Unlike existing federal software applications like B4UFLY, which are limited to federal regulations, our proposal provides a centralized source for all flight preferences of the average citizen. This ensures that drone operators cannot invade private areas without prior authorization, aligning with both FAA policies and property owner preferences. This is used to protect people who may be threatened by drone presence or other drone-related security concerns. The contributions of our proposal to human-drone security are manifold. Firstly, it introduces an advanced zoning system for seamless drone navigation in populated regions. The application architecture will utilize Attribute-Based Access Control (ABAC) to collect airspace restrictions and essential factors, enhancing path planning accuracy and overall operational efficiency for drone operators. We intend to prioritize safety for passersby first, followed by efficiency and adaptability, laying the groundwork for a comprehensive implementation into rural and urban areas in the future. 

To underscore the significance of our proposed work, we will proceed to analyze recent papers on drone path planning and security. We will then break down the key components and proposed methods of our work. A desired implementation of our approach will be provided, followed by a basic outline of testing methods to be used.  

## Running the Application:

To run this project, clone it in Github

Once cloned, navigate to the project directory using the terminal of your choice 
    Here is the path we are using: frontend/

Once you've navigated to the directory path, run: 
    'npm i' 

After the required packages are installed, run: 
    'npm start'



