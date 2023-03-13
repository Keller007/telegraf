const { Markup, Composer, Scenes } = require("telegraf");

const startStep = new Composer();
startStep.on(`text`, async (ctx) => {
  try {
    ctx.wizard.state.data = {};
    ctx.wizard.state.data.userName = ctx.message.from.username;
    await ctx.replyWithHTML(
      `Какого <b>специалиста</b> Вы ищите, ${ctx.message.from.username} ?`
    );

    return ctx.wizard.next();
  } catch (e) {
    console.log(e);
  }
});

const titleStep = new Composer();
titleStep.on(`text`, async (ctx) => {
  try {
    ctx.wizard.state.data.title = ctx.message.text;
    await ctx.replyWithHTML(
      `Форма занятости ?`,
      Markup.inlineKeyboard([Markup.button.callback(`Дистанционно`, "remote")])
        .oneTime()
        .resize()
    );

    return ctx.wizard.next();
  } catch (e) {
    console.log(e);
  }
});

const cityStep = new Composer();
cityStep.on(`text`, async (ctx) => {
  try {
    ctx.wizard.state.data.form = ctx.message.text;
    await ctx.replyWithHTML(`Укажите <b>заработную плату </b>`);
    return ctx.wizard.next();
  } catch (e) {
    console.log(e);
  }
});
cityStep.action("remote", async (ctx) => {
  ctx.wizard.state.data.form = `Дистанционно`;
  await ctx.answerCbQuery();
  await ctx.replyWithHTML(`Укажите <b>заработную плату </b>`);
  return ctx.wizard.next();
});

const zapStep = new Composer();
zapStep.on(`text`, async (ctx) => {
  try {
    ctx.wizard.state.data.zap = ctx.message.text;
    await ctx.replyWithHTML(`Информация `);
    return ctx.scene.leave();
  } catch (e) {
    console.log(e);
  }
});

const vacancyScene = new Scenes.WizardScene(
  `vacancyWizard`,
  startStep,
  titleStep,
  cityStep,
  zapStep
);
module.exports = vacancyScene;
// return ctx.scene.leave()
