const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
let message,
  username,
  block = "";
let id,
  is_bot,
  language_code = null;

bot.start((ctx) => {
  message = ctx.message.from;
  username = message.username;
  id = message.id;
  is_bot = message.is_bot;
  language_code = message.language_code;

  if (is_bot || language_code !== "ru") {
    block = id;
    return;
  }

  ctx.reply(`Добро пожаловать, ${username}`);
});

bot.on("sticker", (ctx) => ctx.reply(`Добро, ${username}`));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
