const  bot  = require("../../connection/token.connection");
const { Markup } = require("telegraf");
const { saveUser } = require("../../common/saveUser.sequelize");

module.exports = bot.start(async (ctx) => {
  try {
    const login = String(ctx.chat.id);
    const username = ctx.chat.username || "anon";
    const result = saveUser(login, username);

    ctx.reply(`Добро пожаловать, ${username}`);
    return;
  } catch (e) {
    console.log(e);
  }

  //   is_bot = message.is_bot;
  //   language_code = message.language_code;

  //   if (is_bot || language_code !== "ru") {
  //     block = id;
  //     return;
  //   }

  //   ctx.reply(
  //     `Добро пожаловать, ${username}`,
  //     Markup.keyboard([
  //       [`Разместить вакансию`],
  //       [`Разместить резюме`, `Заказать рекламу`],
  //     ])
  //       .oneTime()
  //       .resize()
  //   );
});
