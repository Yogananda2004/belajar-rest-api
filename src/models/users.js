const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUsers = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address)
                      VALUES ('${body.name}','${body.email}','${body.address}')`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (body, idusers) => {
  const SQLQuery = `  UPDATE users 
                        SET name = '${body.name}', email= '${body.email}', address= '${body.address}' 
                        WHERE idusers = '${idusers}'`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (idusers) => {
  const SQLQuery = `DELETE FROM users WHERE idusers = '${idusers}'`;
  return dbPool.execute(SQLQuery);
};

const getUserById = (idusers) => {
  const SQLQuery = `SELECT * FROM users WHERE idusers = '${idusers}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
  getUserById,
};
