/* eslint-disable unicorn/no-null */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export interface IContextValuesProperties {
  votingData?: string | null;
  setVotingData: React.Dispatch<React.SetStateAction<string | null>>;
}

const ResultContext = createContext<IContextValuesProperties>({
  votingData: null,
  setVotingData: () => { },
});

export function ResultProvider({ children }: PropsWithChildren) {
  const [votingData, setVotingData] = useState<string | null>(
    localStorage.getItem('votingData')
  );

  // overview 
  // const { data: dataOverview, isLoading: loadingOverview } = useQuery(
  //   [`get-data-overview`, filter.from_date, filter.to_date, filter.type],
  //   async () => {
  //     const result = await getDataOverviewResult(filter);
  //     return result.data;
  //   },
  //   {
  //     retry: 1,
  //   }
  // );

  return (
    <ResultContext.Provider
      value={useMemo(() => ({
        votingData,
        setVotingData
      }), [votingData, setVotingData])}
    >
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext = () => {
  const context = useContext(ResultContext);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!context) {
    throw new Error("useContext must be used within a Provider");
  }
  return context;
};