# Quickstart

Lunar is a low-code AI analytics platform that empowers domain-experts to build, scale and integrate AI algorithms into their analitycal processes, from domain-specific algorithms to latest machine learning (ML) and AI methods.

Lunar is an AI analytics platform dedicated to domain-experts and aims to democratise the integration and use of AI advancements, such as large language models (LLMs) in specialised settings, including but not limited to *bio-informatics*, *finance*, *energy*, *news*, etc.

This quickstart shows how to:
- Setup Lunar on your local environment
- Use some of the Lunar components to create a first workflow
- Interact with a Lunar workflow
- Use a Lunar subworkflow
- Create your first Lunar custom component

Let's get started ...


## Lunar setup

Lunar consists of two applications:
- The _Lunarflow_ interface - a React-based application that allows GUI-based interaction with Lunar workflows and components.
- The _Lunarverse_ service - a Python-based system that includes the core functionalities of Lunar.
    - The _Lunar component library_ - a collection of components used to create workflows or expert AI agents and systems (i.e., agentic state machines).

### Lunarflow

Lunarflow is the web-based interface that offers efortless interaction with the universe of Lunar components. 

#### Installation and configuration

Lunarflow requires the following dependencies:
- [Node.js 18.19+](https://nodejs.org/en/blog/release/v18.19.0)

Once Node.js is ready install Lunarflow using:

`lunarflow install command`

 The command above will make Lunarflow accessible at http://localhost:8080. To change the address or port number configure them in --CONFIG INSTRUCTIONS HERE--.


 ### Lunarverse

 Lunarverse represents the backend logic of the Lunar AI expert platform. It includes core functionalities, orchestration engine (based on [Prefect](https://www.prefect.io/)) and the component library.

 #### Installation and configuration

 Lunarverse is wirtten in Python so all dependencies are managed automatically. It requires
 - [Python 3.9.0+](https://www.python.org/downloads/release/python-390/)
 
 Once Python is ready install Lunarverse using:

 <details>
 <summary>pip</summary>
 `lunarverse pip install command`
 </details>
 <details>
 <summary>Conda</summary>
 `lunarverse conda install command`
 </details>