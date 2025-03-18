# Quickstart

Lunar is a low-code platform for the construction of **AI expert agents and systems**. It is designed to enable domain experts to directly build and adapt complex analytical AI-based workflows to approach domain-specific problems. Lunar facilitates the integration of generative AI within complex analytical areas, including but not limited to *bioinformatics*, *engineering*, *finance*, *marketing*, *media*, etc.
 
This quickstart shows how to have a local environment up and running with Lunar, enabling you to quickly start building and testing AI workflows.

## Overview

Lunar consists of three parts:
- The _Lunarcore_ service - the core of Lunar, a Python-based service that includes the backend functionalities including a CLI, an API and the lunar core framework.
- The _Lunarverse_ - Lunar is organized as a plugin-architecture and the [Lunarverse](https://github.com/lunarbase-labs/lunarverse) represents a collection of components (or plugins) available to create workflows and AI expert systems.
- The _Lunarflow_ interface - a React-based application that allows GUI-based interaction with Lunar workflows and their components.

You can access Lunar's repository on Github at https://github.com/lunarbase-ai/lunar/tree/v0.1. The following is an overview of Lunar's directory structure denoting the frontend and backend components:

lunar

├── LICENSES

├── README.md

├── lunarcore

├── lunarflow

└── scripts

The component library, Lunarverse, is organized in its own Github repository located at https://github.com/lunarbase-labs/lunarverse. 


## Standard install

:::note

The following setup works for Mac, Linux and Windows with WSL2

Windows users can install WSL2 by following the instructions [here](wsl_install)

:::


### Make sure all the requirements are satisfied

- Python 3.9.0
- Node.js between 18.19 and 20.0
- WSL (For Windows users)

### Clone lunar repository

First, clone the repository:
```bash
git clone -b v0.1 https://github.com/lunarbase-ai/lunar ./lunar
```

### Enter Lunar

Change to the Lunar directory:
```bash
cd lunar
```

### Enter lunarflow

Move into the lunarflow subdirectory:
```bash
cd lunarflow
```

### Install lunarflow

Run the installation script for Lunarflow:

```bash
source scripts/lunarflow_unix_install.sh
```


### Start lunarflow

To start Lunarflow, run:
```bash
yarn start
```

### Open new terminal and go to lunarcore

Open a new terminal window and change to the lunarcore directory:
```bash
cd lunarcore
```

### Install lunarcore

```bash
source scripts/lunarcore_unix_install.sh
```
### Start a poetry shell

Activate the Poetry shell:

```bash
poetry shell
```

### Start lunarcore

Finally, start Lunarcore with Poetry:

```bash
poetry run lunarcore start
```


## Install with Docker

To get started with Docker, ensure that Docker and Docker Compose are installed on your machine.

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

### Verify Installation

After installation, verify that Docker is running correctly with the following command:
```bash
docker info
```
This should display details about your Docker installation. If it doesn't, troubleshoot your Docker installation.

### Build and Run the Application

To build and start the services defined in the docker-compose.yml file, navigate to the project root directory and run:

```bash
docker compose up --build
```

This will build the lunarbase and lunarflow images and start the containers.

### Stopping the Services
For stopping the services, use the following command:

```bash
docker compose down
```
This will stop all running services and clean up any resources created during the build and runtime.

