# The Bengal Chefs' Pantry - Server Side

Welcome to the server-side repository of The Bengal Chefs' Pantry, a dedicated website showcasing the finest recipes from the best chefs. This server handles API requests.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Live Server](#live-server)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Also Checkout The Bengal Chefs' Pantry - Client](#also-checkout-the-bengal-chefs-pantry-client)
- [Contributing](#contributing)

## Features

- RESTful API for banner dishes, headlines, chefs, tips and tricks, and health tips.
- Secure environment-based configuration.
- Data retrieval and management for various culinary data.

## Technologies Used

- Node.js
- Express.js

## Prerequisites

- Node.js and npm installed.

## Project Structure

```
├── .gitignore          # Lists files for Git to ignore
├── README.md           # Project documentation
├── index.js            # Main entry point of the application
├── package-lock.json   # Exact dependency tree
├── package.json        # Project metadata and dependencies
├── vercel.json         # Vercel deployment settings
├── data                # Directory containing JSON files with mock data
│   ├── bannerDishes.json
│   ├── chefs.json
│   ├── healthTips.json
│   ├── headlines.json
│   └── tipsAndTricks.json
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Tanzeebul-Tamim/The-Bengal-Chefs-Pantry-Server
    cd the-chefs-pantry-server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=5000
```

## Live Server

The server is deployed [at this following URL](https://chefs-pentry-server-4lg1rnncd-tamim-200091-yahoocom.vercel.app/)

## Running the Application

- Start the server:
    ```bash
    npm start
    ```

## API Endpoints

- ***GET*** `/`: Health check endpoint. Returns a simple message indicating the server is running.
- ***GET*** `/bannerdishes`: Retrieve all banner dishes.
- ***GET*** `/headlines`: Retrieve all headlines.
- ***GET*** `/chefs`: Retrieve all chefs.
- ***GET*** `/tips`: Retrieve all tips and tricks.
- ***GET*** `/healthtips`: Retrieve all health tips.

## Also checkout The-Bengal-Chefs-Pantry-Client

Visit the client-side repository of [The Bengal Chefs' Pantry](https://github.com/Tanzeebul-Tamim/The-Bengal-Chefs-Pantry-Client) website

## Contributing

Feel free to contribute by submitting a pull request. Please ensure that your code follows the project's coding standards and includes relevant tests.
