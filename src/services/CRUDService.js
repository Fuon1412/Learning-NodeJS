const connection = require("../config/database");
const createUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return results;
};
const getAllUsers = async () => {
  let [results, fields] = await connection.query(`SELECT * FROM Users`);
  return results;
};
const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = ?`,
    [id]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const updateUserById = async (ID, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
    [email, name, city, ID]
  );
  return results.affectedRows;
};
const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [id]
  );
  return results.affectedRows;
};
module.exports = {createUser, getAllUsers, getUserById, updateUserById, deleteUserById};
