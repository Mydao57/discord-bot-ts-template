# Discord.JS Bot | Typescript template

[![Node Version](https://img.shields.io/badge/Node.js-%5E18-green)](https://nodejs.org/en/)
[![Symfony Version](https://img.shields.io/badge/discord.js-%5E14-green)](https://discord.js.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

A simple Discord bot template built with TypeScript and Discord.js.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Command handling
- TypeScript support
- Basic structure for a Discord.js bot

## Getting Started

### Prerequisites

- Node.js (at least version 14)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/discord-ts-bot.git
   ```

2. Navigate to the project directory:

    ```bash
   cd discord-ts-bot
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Go to `data` folder and open/create the file `config.local.json`
2. Set all your bot information (production bot and development bot)

## Usage

### Scripts

1. Clean:

    ```bash
      npm run clean
    ```
clean the build folder

2. Build:

    ```bash
      npm run build
    ```
Compile the typescript into build folder

3. Start:

    ```bash
      npm run start
    ```

Start the bot in production mode (config.json)

4. Start no clean:

    ```bash
      npm run startNoClean
    ```

Start the bot in production mode (config.json) without cleaning the build folder

3. Dev Start:

    ```bash
      npm run devStart
    ```

Start the bot in development mode (config.local.json)

4. Dev start no clean:

    ```bash
      npm run devStartNoClean
    ```

Start the bot in development mode (config.local.json) without cleaning the build folder

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
