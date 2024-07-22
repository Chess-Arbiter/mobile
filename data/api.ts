import { SQLResultSet } from "expo-sqlite/legacy"; // TODO import from expo-sqlite
import { ID } from "../models/global.js";
import formatSelectQueryResult from "../util/sql";
import db from "./db";

function runQuery(
  query: string,
  params: (string | number)[] = []
): Promise<SQLResultSet> {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        params,
        (tx, result) => resolve(result),
        (tx, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
}

export const createTournament = ({
  name,
  rating,
  k_value,
}: {
  name: string;
  rating: number;
  k_value: number;
}) => {
  return runQuery(
    "INSERT INTO tournaments(name,rating,k_value) VALUES(?,?,?)",
    [name, rating, k_value]
  );
};

export async function searchTournament(name = "") {
  const queryRes = await runQuery(
    "select * from tournaments where name like ? order by id desc",
    [`${name}%`]
  );

  return formatSelectQueryResult(queryRes);
}

export const deleteTournament = (id: ID) => {
  return new Promise((resolve, reject) => {
    runQuery("delete from games where tournament_id=?", [id])
      .then(() => {
        runQuery("delete from tournaments where id=?", [id])
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

export const getGames = async (tournamentId: ID) => {
  const queryRes = await runQuery(
    `select * from  games where tournament_id=?`,
    [tournamentId]
  );

  return formatSelectQueryResult(queryRes);
};

export const createGame = (
  tournament_id: ID,
  opponent_rating: number,
  change: number
) => {
  return runQuery(
    `insert into games(tournament_id,opponent_rating,change) values(?,?,?)`,
    [tournament_id, opponent_rating, change]
  );
};

export const deleteGame = (id: ID) => {
  return runQuery(` delete from games where id = ?`, [id]);
};

export const getSettings = () => {
  return runQuery("select * from settings");
};

export const updateOrCreateSetting = (key: string, value: string) => {
  return runQuery("REPLACE INTO settings(setting, value) VALUES(?, ?)", [
    key,
    value,
  ]);
};
