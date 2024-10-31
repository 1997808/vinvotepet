/* eslint-disable @typescript-eslint/no-useless-template-literals */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import MapChart from 'components/MapChart';
import MarginBar from 'components/MarginBar';
import VotingForm from 'components/VotingForm';
import { ResultProvider } from 'pages/ResultContext';
import type { ReactElement } from 'react';

function Result(): ReactElement {
  return (
    <ResultProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-screen-xl w-full h-screen bg-white p-8 rounded-lg shadow-lg flex justify-between gap-4">
          <div className='grow flex flex-col items-center gap-4'>
            <MarginBar />
            <div className='py-4 h-full flex flex-col justify-center items-center'>
              <VotingForm />
            </div>
          </div>
          <MapChart />
        </div>
      </div>
    </ResultProvider>
  );
}

export default Result;