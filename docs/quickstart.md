# Quickstart

Lunar is a low-code platform for the construction of expert AI agents. It is designed to enable domain experts to directly build and adapt complex analytical AI-based workflows. Lunar facilitates the integration of generative AI within complex analytical areas, including but not limited to *bioinformatics*, *engineering*, *finance*, *marketing*, *media*, etc.

This quickstart shows how to:
- Setup Lunar on your local environment
- Use some of the Lunar components to create a first workflow
- Interact with a Lunar workflow
- Use a Lunar sub-workflow
- Create your first Lunar custom component

Let's get started ...


## Lunar setup

Lunar consists of two applications:
- The _Lunarflow_ interface - a React-based application that allows GUI-based interaction with Lunar workflows and components.
- The _Lunarcore_ service - a Python-based system that includes the core functionalities of Lunar.
    - The _Lunarverse_ - a collection of components used to create workflows or AI expert agents and systems.

### Lunarflow

Lunarflow is the web-based interface that offers effortless interaction with the universe of Lunar components. 

#### Installation and configuration

Lunarflow requires the following dependencies:
- [Node.js 18.19+](https://nodejs.org/en/blog/release/v18.19.0)
- Latest version of [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Once Node.js is ready install Lunarflow using:

__npm__: `lunarflow npm install command (to be added soon)`

__Docker__: `lunarflow docker install commands (to be added soon)`

__Github__:
```console
foo@bar:~$ git clone https://github.com/lunarbase-ai/lunarflow.git
foo@bar:~$ cd lunarflow
foo@bar:~$ yarn
foo@bar:~$ yarn build
foo@bar:~$ yarn start
```


The command above will make Lunarflow accessible at http://localhost:8080. To change the address or port number configure them in --CONFIG INSTRUCTIONS HERE--.

### Lunarcore

Lunarcore represents the backend logic of the Lunar AI expert platform. It includes core functionalities, orchestration engine (based on [Prefect](https://www.prefect.io/)).

#### Installation and configuration

Lunarverse is wirtten in Python so all dependencies are managed automatically. It requires
- [Python 3.9.0+](https://www.python.org/downloads/release/python-390/)

Once Python is ready install Lunarverse using:

__pip__: `lunarverse pip install command (to be added soon)`

__conda__: `lunarverse conda install command (to be added soon)`

__poetry__: `poetry install`

__Docker__: `lunarverse docker install commands (to be added soon)`

__Github__: 

Github installation requires Poetry. Installation instruction can be found on the [official page](https://python-poetry.org/docs/). Once Poetry is installed:

```console
foo@bar:~$ git clone https://github.com/lunarbase-labs/lunarcore
foo@bar:~$ cd lunarcore
foo@bar:~$ poetry install
foo@bar:~$ poetry run python lunarcore/app.py
```


The commands above will make Lunarverse's REST API available on all local interfaces and port `8088`. To change these settings modify the corresponding lines in `[EXAMPLE].env` and rename the file to `.env`. Upon startup Lunarverse will load the environment from `.env` assuming such file exists. The default values for the required variables are in `[EXAMPLE].env`. These include:


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
