import React, {
  FunctionComponent,
  createContext,
  useState,
  useEffect,
} from "react";
import { InnovatorType } from "../types";
import { Payload } from "../api-types";
import { LIST_INNOVATORS, ADD_INNOVATORS } from "../models/innovatorsModel";
import axios, { AxiosError } from "axios";
import useResource from "../hooks/useResource";

type InnovatorsContextType = {
  innovators: InnovatorType[];
  loadingInnovators: boolean;
  error: AxiosError | null;
  addInnovator: (payload: Payload) => void;
};

export const InnovatorsContext = createContext<InnovatorsContextType>({
  innovators: [],
  loadingInnovators: false,
  error: null,
  addInnovator: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const InnovatorsContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [innovators, setInnovators] = useState<InnovatorType[]>([]);
  const [loadingInnovators, setLoadingInnovators] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const { APICaller } = useResource();

  const getInnovators = async () => {
    setLoadingInnovators(true);

    try {
      const res = await APICaller(LIST_INNOVATORS);
      setInnovators(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      }
    } finally {
      setLoadingInnovators(false);
    }
  };

  const addInnovator = async (payload: Payload) => {
    console.log(payload);
    try {
      await APICaller(ADD_INNOVATORS(payload));
      getInnovators();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getInnovators();
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const contextValues: InnovatorsContextType = {
    innovators,
    loadingInnovators,
    error,
    addInnovator,
  };

  return (
    <InnovatorsContext.Provider value={contextValues}>
      {children}
    </InnovatorsContext.Provider>
  );
};

export default InnovatorsContextProvider;
