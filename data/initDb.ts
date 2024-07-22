import { SQLError, SQLTransaction } from "expo-sqlite/legacy"; // TODO import from expo-sqlite
import db from "./db";
const initDb = () => {
  return new Promise((resolve, reject) => {
    let errorsCount = 0;
    let successCount = 0;
    function onSuccess() {
      successCount++;
      if (errorsCount + successCount === 3) {
        if (errorsCount > 0) {
          reject();
        } else {
          resolve("Success");
        }
      }
    }

    function onError(_: SQLTransaction, err: SQLError) {
      reject(err);
      return false;
    }
    db.transaction((tx) => {
      const createSettingsTable =
        "create table if not exists settings(id integer primary key not null, setting varchar(255), value varchar(255))";
      const createUniqueIndexOnSettingsKey =
        "create unique index idx_settings_key on settings(key)";
      tx.executeSql(
        `${createSettingsTable};${createUniqueIndexOnSettingsKey}`,
        [],
        onSuccess,
        onError
      );
      tx.executeSql(
        `create table if not exists 
        tournaments(
            id integer primary key not null, 
            name varchar(255), 
            rating integer,
            k_value integer
            )`,
        [],
        onSuccess,
        onError
      );
      tx.executeSql(
        `create table if not exists 
        games(
            id integer primary key not null, 
            opponent_rating integer, 
            tournament_id integer not null,
            change integer not null, 
            FOREIGN KEY (tournament_id) REFERENCES tournaments(id)
            ON DELETE CASCADE
        ) `,
        [],
        onSuccess,
        onError
      );
    });
  });
};

export default initDb;
