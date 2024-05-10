import { useCallback, useEffect, useState } from "react";
import { IGame } from "../models/tournaments";

type useQueryResult<T> = {
  error: string;
  isLoading: boolean;
  data: { docs: IGame[] };
  refetch: () => void;
  setData: Function;
};

export default function useQuery<T>(runQuery: Function): useQueryResult<T[]> {
  const [data, setData] = useState<{ docs: IGame[] }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setError("");
      setIsLoading(true);
      const res: { docs: IGame[] } = await runQuery();

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
    data: data as { docs: IGame[] },
    isLoading,
    error,
    refetch: fetchData,
    setData,
  };
}
