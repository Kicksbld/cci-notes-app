import { useEffect, useState } from "react";

export const useIsAppReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return ready;
};
