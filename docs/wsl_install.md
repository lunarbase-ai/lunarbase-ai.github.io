# WSL Install

Currently, the Lunar environment only supports Unix operating systems. Therefore, Windows users will need to install the Windows Subsystem for Linux (WSL) to run Lunar in their local environment.

This guide will walk you through the steps to install and set up WSL on your Windows machine.

## Pre-requisites

You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11 to use the commands below. If you are on earlier versions, you will need to follow this [manual install guide](https://learn.microsoft.com/en-us/windows/wsl/install-manual).


## Step 1: Install WSL


1. **Open PowerShell as Administrator**:
   - Press `Win + X` and select `Windows PowerShell (Admin)`.
  
2. **Run the following command to install WSL and set up a default Linux distribution (Ubuntu)**:
    - `wsl --install`


For more information, check the [Microsoft official documentation ](https://learn.microsoft.com/en-us/windows/wsl/install) on how to install WSL on your local machine


## Step 2: Setup your Linux Environment

### Create username and password:

After installation, you’ll be prompted to create a Linux username and password. You’ll use this username for starting WSL sessions:

 ```powershell
 wsl -d Ubuntu -u <username>
 ```

### Update and upgrade packages

Once your username and password are set up, update and upgrade your Linux distribution packages:


 ```bash
 sudo apt update && sudo apt upgrade
 ```

## Step 3: Install Lunar requirements on your distribution

Even if you already have Python and Node.js on Windows, you’ll need to install them in your new WSL environment.

### Install Node.js

To install Node.js, run the following commands:

 ```bash
 curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
 ```

 ```bash
 sudo apt install -y nodejs
 ```

### Python Install

We recommend installing Python with pyenv for better version management in your WSL environment.

#### Install pip
  
```bash
sudo apt install python3-pip
```

#### Install pyenv

To install pyenv for managing Python versions:

```bash
curl https://pyenv.run | bash
```

#### Configure pyenv in your shell

Add pyenv to your shell by updating your `.bashrc` or `.zshrc`:

```bash
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

#### Install pyenv dependencies

Run the following commands to install the required dependencies for pyenv:

```bash
sudo apt update
sudo apt install -y \
  build-essential \
  libssl-dev \
  zlib1g-dev \
  libbz2-dev \
  libreadline-dev \
  libsqlite3-dev \
  libffi-dev \
  libgdbm-dev \
  liblzma-dev \
  libncurses5-dev \
  libncursesw5-dev \
  libgdbm-dev \
  liblzma-dev \
  libgdbm-compat-dev \
  curl \
  git
```

#### Install Python 3.9 with pyenv

```bash
pyenv install 3.9.0
```

#### Set Python 3.9 as the Default Version

```bash
pyenv global 3.9.0
```


---

Your WSL environment is now set up and ready for Lunar installation on your Windows machine.