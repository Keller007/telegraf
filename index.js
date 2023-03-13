const { Markup, Scenes, session } = require("telegraf");
const bot= require("./api/connection/token.connection");
//command
require("./api/middleware/command/start");
//scene
const vacancyScene = require("./api/scenes/vacancyScene");
//stage scene
const stage = new Scenes.Stage([vacancyScene]);
bot.use(session());
bot.use(stage.middleware());
 
//trigers
bot.hears(`Разместить вакансию`, (ctx) => ctx.scene.enter(`vacancyWizard`));











// bot.on("text", (ctx) =>
//   ctx.reply(
//     `Выберите раздел, ${username}`,
//     Markup.keyboard([
//       [`Разместить вакансию`],
//       [`Разместить резюме`, `Заказать рекламу`],
//     ])
//       .oneTime()
//       .resize()
//   )
// );

bot.launch();
