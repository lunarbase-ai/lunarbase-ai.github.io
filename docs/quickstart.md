# Quickstart

Lunar is a low-code platform for the construction of **AI expert agents and systems**. It is designed to enable domain experts to directly build and adapt complex analytical AI-based workflows to approach domain-specific problems. Lunar facilitates the integration of generative AI within complex analytical areas, including but not limited to *bioinformatics*, *engineering*, *finance*, *marketing*, *media*, etc.

This quickstart shows how to:
- Setup Lunar on your local environment
- Use some of the Lunar components to create a first workflow
- Interact with a Lunar workflow
- Use a Lunar sub-workflow
- Create your first Lunar custom component

Let's get started ...


## Local Lunar setup

:::note

The following setup works for Mac, Linux and Windows with WSL2

Windows users can install WSL2 by following the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install)

:::

Lunar consists of three parts:
- The _Lunarcore_ service - the core of Lunar, a Python-based service that includes the backend functionalities.
- The _Lunarverse_ - Lunar is organized as a plugin-architecture and the [Lunarverse](https://github.com/lunarbase-labs/lunarverse) represents a collection of components (or plugins) available to create workflows and AI expert systems.
- The _Lunarflow_ interface - a React-based application that allows GUI-based interaction with Lunar workflows and their components.

The following is an overview of Lunar's directory structure denoting the frontend and backend components. The component library, Lunarverse, is organized in its own Github repository located at https://github.com/lunarbase-labs/lunarverse. 

lunar

├── LICENSES

├── README.md

├── lunarcore

├── lunarflow

└── scripts

### Lunarflow

Lunarflow is the web-based interface that offers effortless interaction with the universe of Lunar components. 

#### Local installation and configuration

Lunarflow requires the following dependencies:
- [Node.js between 18.19 and 20.0](https://nodejs.org/en/blog/release/v18.19.0)

Once Node.js is ready the easiest way to install Lunarflow locally is using the provided installation scripts from the **scripts** directory (see above):

__lunarflow_unix_install.sh__: `source lunarflow_unix_install.sh` 

The command above will install and make Lunarflow accessible at http://localhost:8080. To change the address or port number configure, navigate to `lunar/lunarflow/` and open `.env` (or create a new `.env` file by copying `[EXAMPLE].env`). Modify the corresponding lines and save the file. Upon startup Lunarflow will load the environment from `.env` assuming such file exists. The default values for the required variables in `[EXAMPLE].env` include:

| Variable name | Default value| Description |
| ----------- | ----------- | ----------- |
| NEXT_PUBLIC_LUNARVERSE_ADDRESS | http://0.0.0.0:8088 | The URL of the LunarCore API. |
| NEXT_PUBLIC_HOST | http://localhost:8080 | The host URL for the frontend application (LunarVerse). |
| NEXTAUTH_URL | http://localhost:8080 | The callback URL for NextAuth authentication, normally pointing to the frontend application's host. |

The `.env` file should also set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. These will be optional soon, but in the meantime, you can generate them by configuring a project [here](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid?hl=fr).

### Lunarcore

Lunarcore represents the backend logic of the Lunar AI expert platform. It includes core functionalities and orchestration engine (based on [Prefect](https://www.prefect.io/)).

#### Local installation and configuration

Lunarverse is written in Python so all dependencies are managed automatically. It requires
- [Python 3.9.0+](https://www.python.org/downloads/release/python-390/)

Once Python is installed the easiest way to install Lunarcore locally is using the provided installation scripts from the **scripts** directory (see above):

__lunarcore_unix_install.sh__: `source lunarcore_unix_install.sh` 

The commands above will make Lunarcore's REST API available on all local interfaces and port `8088`. To change these settings, modify the corresponding lines in `[EXAMPLE].env` and rename the file to `.env`. Upon startup Lunarcore will load the environment from `.env` assuming such file exists. The default values for the required variables are in `[EXAMPLE].env`. These include:


| Variable name | Default value| Description |
| ----------- | ----------- | ----------- |
| FLOW_STORAGE | "LOCAL" | The type of storage used by Lunarverse for various data storage needs, e.g., file uploads, workflow persistence, etc. At the moment local and S3 storage are supported |
| FLOW_STORAGE_BASE_PATH | "/tmp/lunarverse" | The root location of where data will be stored |
| LUNARVERSE_ADDRESS | "0.0.0.0" | The default API IP address (i.e., defaults to listening on all interfaces) |
| LUNARVERSE_PORT | 8088 | The default API port |
| FLOW_ROOT_DIR | "workflows" | The main directory to save workflows. The full path will be `<FLOW_STORAGE_BASE_PATH>/<user_name>/<FLOW_ROOT_DIR>/<workflow_id>`|


## Lunar with Docker compose

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
