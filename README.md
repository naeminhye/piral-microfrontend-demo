# piral-microfrontend-demo

A demo for a webshop product page using microfrontends with Piral. :rocket:

**[View the demo online!](https://mife-demo.florian-rappl.de/products)**

## Prerequisites

For running the code you'll need Node.js with NPM. Nothing else is required.

Editing the code should work with convenience in any IDE capable of dealing with TypeScript. Personally, I've used Visual Studio Code.

## Installation

Each subdirectory contains a Node project and thus needs to be set up correctly, e.g., (for the `app-shell`):

```sh
cd app-shell
npm i
```

Alternatively, use the `./install.sh` script:

```sh
./install.sh
```

## Running

First, make sure you have access to a pilet feed. In the simplest case clone the [sample feed repository](https://github.com/smapiot/sample-pilet-service) and follow the instructions for running.

Start the debug version of the `app-shell`:

```sh
cd app-shell
npm start
```

You should see an empty page (with a red rectangle).

Now open another shell and publish the pilets:

```sh
./publish.sh
```

The upload assumes that the pilet feed service is running at `https://feed.piral.cloud/api/v1/pilet/products`. The used API Key is one of the standard ones. If these assumptions are not correct you'll need to correct the settings.

For simplicity, you can also just use the following command (required: `install.sh` must have been run):

```sh
./run.sh
```

This will clone, install, build, and run a sample feed service. Additionally, everything else will be build, published, and started.
