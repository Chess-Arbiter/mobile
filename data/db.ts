import { openDatabase, WebSQLDatabase } from "expo-sqlite/legacy"; // TODO import from expo-sqlite

const db: WebSQLDatabase = openDatabase("chess_arbiter_db");

export default db;
