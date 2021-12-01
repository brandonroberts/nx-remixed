

# Remixed

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Setup

Install dependencies

```sh
yarn
```

## Running the app

Nx uses `npm scripts` to run custom commands
Run the `dev` npm script from `packages/my-remix/package.json`

```sh
yarn nx dev my-remix
```

Navigate to http://localhost:3000

## Building the app

Nx caches computations builds, so the same command run multiple times with the same changes produces artifacts from the cache.

```sh
yarn nx build my-remix
```
## Generate a new route

This repo includes a workspace generator for remix routes. To generate a route, use the `remix-route` generator.

```sh
yarn nx workspace-generator remix-route my-remix my-route
```

Learn more at [https://nx.dev](https://nx.dev)