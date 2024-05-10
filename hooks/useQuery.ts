import { useCallback, useEffect, useState } from "react";
import { ITournament } from "../models/tournaments";

type useQueryResult<T> = {
  error: string;
  isLoading: boolean;
  data: { docs: ITournament[] };
  refetch: () => void;
  setData: Function;
};

export default function useQuery<T>(runQuery: Function): useQueryResult<T[]> {
  const [data, setData] = useState<{ docs: ITournament[] }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setError("");
      setIsLoading(true);
      const res: { docs: ITournament[] } = await runQuery();

      setData(res);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [runQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: data as { docs: ITournament[] },
    isLoading,
    error,
    refetch: fetchData,
    setData,
  };
}
