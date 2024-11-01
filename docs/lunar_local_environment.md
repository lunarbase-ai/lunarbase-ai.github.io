# Local environment

## Configuring your local environment 

:::note

The following setup works for Mac, Linux and Windows with WSL2

Windows users can install WSL2 by following the instructions [here](wsl_install)

:::

### Lunarflow

Lunarflow is the web-based interface that offers effortless interaction with the universe of Lunar components. 


#### Local installation and configuration

Lunarflow requires the following dependencies:
- [Node.js between 18.19 and 20.0](https://nodejs.org/en/blog/release/v18.19.0)

Once Node.js is ready the easiest way to install Lunarflow locally is using the provided installation scripts from the **scripts** directory under `./lunarflow/scripts`:

__lunarflow_unix_install.sh__: `source lunarflow_unix_install.sh` 

The command above will install lunarflow. 

Once it is installed, you can change the address or port number of lunarflow by opening the `.env` file at the root directory. Modify the corresponding lines and save the file. Upon startup Lunarflow will load the environment from `.env` assuming such file exists. The default values for the required variables in `.env` include:

| Variable name | Default value| Description |
| ----------- | ----------- | ----------- |
| NEXT_PUBLIC_LUNARVERSE_ADDRESS | http://0.0.0.0:8088 | The URL of the LunarCore API. |
| NEXT_PUBLIC_HOST | http://localhost:8080 | The host URL for the frontend application (LunarVerse). |
| NEXTAUTH_URL | http://localhost:8080 | The callback URL for NextAuth authentication, normally pointing to the frontend application's host. |

#### Start

For starting lunarflow, make sure you're at `./lunarflow` and run `yarn start`. This command will open lunarflow using the host and port number set at the environment file. 


### Lunarcore

Lunarcore represents the backend logic of the Lunar AI expert platform. It includes core functionalities and orchestration engine (based on [Prefect](https://www.prefect.io/)).

#### Local installation and configuration

Lunarverse is written in Python so all dependencies are managed automatically. It requires
- [Python 3.9.0+](https://www.python.org/downloads/release/python-390/)

Once Python is installed the easiest way to install Lunarcore locally is using the provided installation scripts from the **scripts** directory under `lunarcore/scripts`:

__lunarcore_unix_install.sh__: `source lunarcore_unix_install.sh` 

The commands above will make Lunarcore's REST API available on all local interfaces and port `8088`. To change these settings, modify the corresponding lines in `[EXAMPLE].env` and rename the file to `.env`. Upon startup Lunarcore will load the environment from `.env` assuming such file exists. The default values for the required variables are in `[EXAMPLE].env`. These include:


| Variable name | Default value| Description |
| ----------- | ----------- | ----------- |
| LUNAR_STORAGE_TYPE | "LOCAL" | The type of storage used by Lunarverse for various data storage needs, e.g., file uploads, workflow persistence, etc. At the moment local and S3 storage are supported |
| LUNAR_STORAGE_BASE_PATH | "/tmp/lunar" | The root location of where data will be stored |
| LUNARCORE_ADDRESS | "0.0.0.0" | The default API IP address (i.e., defaults to listening on all interfaces) |
| LUNARCORE_PORT | 8088 | The default API port |

On install we will automatically fill `PERSISTENT_REGISTRY_STARTUP_FILE` dynamically with the full path of the default components registry startup file that is located under `./lunarcore/components.json`. If you desire to use a different file on startup, you can always overwrite it at the generated `.env` file. 

:::note
If you want to import components from a private github repo extending the lunarverse, you'll need to add `REGISTER_GITHUB_TOKEN="your github token"` to the  `.env` file.
:::

:::note
For working with co-pilot, you will also need to add 3 environment variables to the `.env` file:

- AZURE_ENDPOINT="your azure endpoint"
- AZURE_DEPLOYMENT="your azure deployment"
- OPENAI_API_KEY="your open api key"
:::

#### Start

For starting lunarcore, make sure you're at `./lunarcore`, enter the installed poetry environment with `poetry shell` and run `poetry run lunarcore start`.