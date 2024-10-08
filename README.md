# CoinMarketCap Telegram Bot

A Telegram bot that provides real-time cryptocurrency data using the CoinMarketCap API.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## About the Project

This Telegram bot allows users to get real-time cryptocurrency prices and market data by interacting with the CoinMarketCap API. It is designed to be fast, simple, and user-friendly.

## Features

- Fetch real-time cryptocurrency prices
- Get market data like market cap, volume, and trends
- User-friendly commands for quick interactions

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/coinmarketcap-telegram-bot.git
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables in a `.env` file:
    ```bash
    TELEGRAM_TOKEN=your-telegram-bot-token
    COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
    ```

## Configuration

- **Telegram Token:** Obtain your bot token from [BotFather](https://core.telegram.org/bots#botfather).
- **CoinMarketCap API Key:** Sign up at [CoinMarketCap](https://coinmarketcap.com/api/) to get your API key.
  
    In your `.env` file, ensure the following keys are set:

    ```bash
    TELEGRAM_TOKEN=your-telegram-bot-token
    COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
    ```

## Usage

1. Start the bot by running:
    ```bash
    npm start
    ```

2. Open Telegram and search for your bot, then start interacting with it by using the following commands:

    - `/price <coin_symbol>`: Get the current price of a specific cryptocurrency.
    - `/marketcap <coin_symbol>`: Retrieve the market cap of the coin.
    - `/trends`: Get the latest market trends for top cryptocurrencies.

## Technologies

- **Node.js**: Backend
- **Telegram Bot API**: For interacting with Telegram
- **CoinMarketCap API**: To fetch real-time crypto data

  
## Contributing

Contributions are welcome! Feel free to open a pull request or create an issue for any bug fixes or feature requests.

## License

This project is licensed under the MIT License.
