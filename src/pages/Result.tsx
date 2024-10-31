/* eslint-disable @typescript-eslint/no-useless-template-literals */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import MapChart from 'components/MapChart';
import type { ReactElement } from 'react';

function Result(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-screen bg-white p-8 rounded-lg shadow-lg flex justify-between gap-4">
        <div className='grow'>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">The Road to 288</h1>
          <div className='party-vote-container flex flex-col gap-0.5'>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <h2 className="text-lg font-bold text-[#244999] m-0">Cat</h2>
                <p className="text-lg font-bold text-[#244999] m-0">{150 + 85 + 60}</p>
              </div>
              <div className='flex gap-4'>
                <p className="text-lg font-bold text-[#d22532] m-0">{55 + 80 + 130}</p>
                <h2 className="text-lg font-bold text-[#d22532] m-0">Dog</h2>
              </div>
            </div>
            <div className='vote-bar relative flex w-full h-8'>
              <div className="vote-item vote-c3 flex justify-center items-center text-sm text-white" style={{ width: `${150 / 575 * 100}%` }}>150</div>
              <div className="vote-item vote-c2 flex justify-center items-center text-sm text-white" style={{ width: `${85 / 575 * 100}%` }}>85</div>
              <div className="vote-item vote-c1 flex justify-center items-center text-sm text-white" style={{ width: `${60 / 575 * 100}%` }}>60</div>
              <div className="vote-item vote-t flex justify-center items-center text-sm text-white" style={{ width: `${15 / 575 * 100}%` }}>15</div>
              <div className="vote-item vote-d1 flex justify-center items-center text-sm text-white" style={{ width: `${55 / 575 * 100}%` }}>55</div>
              <div className="vote-item vote-d2 flex justify-center items-center text-sm text-white" style={{ width: `${80 / 575 * 100}%` }}>80</div>
              <div className="vote-item vote-d3 flex justify-center items-center text-sm text-white" style={{ width: `${130 / 575 * 100}%` }}>130</div>
              <div className='flex justify-center absolute top-0 left-0 w-full h-full -mt-5 font-bold'>
                I
              </div>
            </div>
          </div>
        </div>

        <MapChart />
      </div>
    </div>
  );
}

export default Result;