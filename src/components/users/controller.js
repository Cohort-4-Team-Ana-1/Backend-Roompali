const Users = require("./schema");

/**
 * Bring all users records
 */
const readUsers = () => {
  const users = Users.find({});
  return users;
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
 * Create a new user
 *  */
const createUser = (user) => {
  const newUser = new Users({
    username: user.username,
    password: user.password,
    email: user.email,
  });
  newUser.save();
  return newUser;
};

/**
 * Update a user
 */

const updateUser = async (userId, user) => {
  const userChanges = {
    username: user.username,
    password: user.password,
    email: user.email,
  };
  await Users.findByIdAndUpdate(
    userId,
    { $set: userChanges },
    { omitUndefined: true, upsert: true }
  );
  const userChanged = await Users.findById(userId);
  return userChanged;
};

const deleteUser = async (userId) => {
  const userDeleted = {
    deleted: true,
  };
  await Users.findByIdAndUpdate(
    userId,
    { $set: userDeleted },
    { omitUndefined: true, upsert: true }
  );
};

module.exports = { readUsers, readOneUser, createUser, updateUser, deleteUser };
