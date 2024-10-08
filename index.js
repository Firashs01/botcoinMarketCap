const {Telegraf} = require("telegraf");
require('dotenv').config();
const axios = require('axios');


const Token = process.env.TOKEN;
const COINMARKETCAP = process.env.COINMARKETCAP;
const bot = new Telegraf(Token);

bot.start ((msg) => {
    const query = "coin_market_bot get coin data by using the command /coin Exemple /coin btc"

    msg.reply(query);
    
});

bot.command("coin", async (msg) => {
    const symbol = msg.payload;
    
    let response = await axios.get(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbol}`,
        {
            headers : {
                "X-CMC_PRO_API_KEY":COINMARKETCAP,  
            },
        }
    );

    const parse = symbol.toUpperCase();
    const data_1 = response.data.data[parse];
    const data = data_1[0];

    const message = `
  <b>${data.name}</b> : ${data.symbol} (${data.category})

  <i>${data.description}</i>

  Launched: ${data.date_launched}

  Infinite Supply: ${data.infinite_supply ? "Yes" : "No"}

  <a href="${data.urls.twitter[0]}">Twitter</a>
  <a href="${data.urls.website[0]}">Website</a>
  <a href="${data.urls.source_code[0]}">Source Code</a>
`;
  

   msg.telegram.sendMessage(msg.chat.id, message, {parse_mode:"HTML"});
    
});

bot.launch();