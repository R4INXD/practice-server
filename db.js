const { DatabaseSync } = require("node:sqlite");
const database = new DatabaseSync("database.db");

database.exec(`
  CREATE TABLE IF NOT EXISTS users (
    key INTEGER PRIMARY KEY AUTOINCREMENT,
    id TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  ) STRICT
`);

const insert = database.prepare(`INSERT INTO users (id, password, name) VALUES (?, ?, ?)`);
const select = database.prepare(`SELECT * FROM users WHERE id = ?`);

module.exports = {
  insert,
  select,
};
