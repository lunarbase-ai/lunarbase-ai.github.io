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


### Step 1: Make sure all the requirements are satisfied

- Python 3.9.0+
- Node.js between 18.19 and 20.0
- WSL (For Windows users)

### Step 2: Clone lunar repository

`git clone -b v0.1 https://github.com/lunarbase-ai/lunar ./lunar`

### Step 3: Enter Lunar repository

`cd lunar`

### Step 4: Enter lunarflow repository

`cd lunarflow`

### Step 5: Install lunarflow

`source scripts/lunarflow_unix_install.sh`


### Step 6: Start lunarflow

`yarn start`

### Step 7: Open new terminal and go to lunarcore

`cd lunarcore`

### Step 8: Install lunarcore

`source scripts/lunarcore_unix_install.sh`

### Step 9: Start a poetry shell

`poetry shell`

### Step 10: Start lunarcore

`poetry run lunarcore start`


## Install with Docker

:::warning

Currently the docker compose setup only work with Linux or WSL2 on Windows

:::

:::note

Windows users can install WSL2 by following the intructions [here](https://learn.microsoft.com/en-us/windows/wsl/install)

:::

Clone lunarecore and move inside the docker directory

```bash
git clone https://github.com/lunarbase-labs/lunarcore
cd lunarcore
cd docker
```

:::tip

You can install git from [here](https://github.com/git-guides/install-git) if it's not already available on your system.

:::

Edit the file `lunarflow_env.env` then add your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

:::note

`GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` will be optional soon, but in the meantime, you can generate them by configuring a project [here](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid?hl=fr)

:::

Run the `prepare.py` script

```bash
python prepare.py
```

:::tip

You can install python from [here](https://wiki.python.org/moin/BeginnersGuide/Download) if it's not already available on your system.

:::

Build and run the lunarbase docker compose

```bash
docker compose build && docker compose up
```

:::tip

You can install docker with the compose plugin from [here](https://docs.docker.com/compose/install/) if it's not already available on your system.

:::

Then click on this [link](http://localhost:8080)
