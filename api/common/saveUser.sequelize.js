const db = require("../connection/db.connection");
const UserModel = require("../../models/user.model");

exports.saveUser = async (login, username) => {
  await db.sync();

  const foundUser = await UserModel.findOne({ where: { login } });
  const textSaving = `User ${login} is saved`;
  const textUpdate = `User ${login} is updated`;
  const textInclude = `User ${login} is has already`;

  if (!foundUser) {
    await UserModel.create({
      login,
      username,
    });
    console.log(textSaving);
    return;
  }

  if (foundUser.username !== username) {
    await UserModel.update(
      {
        username,
      },
      { where: { login } }
    );
    console.log(textUpdate);
    return;
  }
 return console.log(textInclude);
};
