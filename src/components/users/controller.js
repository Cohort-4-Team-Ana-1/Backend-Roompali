const Users = require("./schema");
const bcrypt = require("bcrypt");
/**
 * Bring all users records
 */
const readUsers = () => {
  const users = Users.find({});
  return users;
};

const readUserByEmail = (userEmail) => {
  const lowerCaseEmail =
    user.email === undefined ? user.email : user.email.toLowerCase();
  const user = Users.findOne({ email: lowerCaseEmail });
  return user || [];
};

/**
 * Bring one user record
 */
const readOneUser = (userId) => {
  const user = Users.findById(userId);
  return user;
};

/**
 *
 * Create an new user
 *  */
const createUser = async (user) => {
  const userData = {
    username: user.username,
    password: await bcrypt.hash(user.password, 10),
    email: user.email.toLowerCase(),
  };
  const newUser = await Users.create(userData);
  return newUser;
};
/**
 * Update an user
 */

const updateUser = async (userId, user) => {
  const userChanges = {
    username: user.username,
    password:
      user.password === undefined
        ? user.password
        : await bcrypt.hash(user.password, 10),
    email: user.email === undefined ? user.email : user.email.toLowerCase(),
  };
  await Users.findByIdAndUpdate(
    userId,
    { $set: userChanges },
    { omitUndefined: true, upsert: true }
  );
  const userChanged = await Users.findById(userId);
  return userChanged;
};

/**
 * Delete an user record
 */
const deleteUser = async (userId) => {
  await Users.findByIdAndDelete(userId);
};

module.exports = {
  readUsers,
  readUserByEmail,
  readOneUser,
  createUser,
  updateUser,
  deleteUser,
};
