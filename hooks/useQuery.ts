import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

type useQueryResult<T> = {
  error: string;
  isLoading: boolean;
  data: T | undefined;
  refetch: () => void;
  setData: any;
};

export default function useQuery<T>(runQuery: any): useQueryResult<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setError("");
      setIsLoading(true);
      const res = await runQuery();

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
    data,
    isLoading,
    error,
    refetch: fetchData,
    setData,
  };
}
