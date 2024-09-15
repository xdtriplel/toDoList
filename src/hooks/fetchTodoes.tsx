import { useEffect } from "react";

const useFetchTodoes = (callback: () => void, dependencies: any[]) => {
  useEffect(() => {
    const fetchData = async () => {
      await callback();
    };
    fetchData();
  }, dependencies);
};

export default useFetchTodoes;
