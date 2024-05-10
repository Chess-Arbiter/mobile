import { SQLResultSet } from "expo-sqlite";
import { ITournament } from "../models/tournaments";

export default function formatSelectQueryResult(query: SQLResultSet) {
  let docs: ITournament[] = [];

  if (query.rows?._array) {
    docs = query.rows?._array;
  }

  return {
    docs,
  };
}
