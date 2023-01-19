import { SQLResultSet } from "expo-sqlite";

export type SelectQueryResult = {
  docs: any;
};

export default function formatSelectQueryResult(
  query: SQLResultSet
): SelectQueryResult {
  let docs: any = [];
  if (query.rows?._array) {
    docs = query.rows?._array;
  }

  return {
    docs,
  };
}
