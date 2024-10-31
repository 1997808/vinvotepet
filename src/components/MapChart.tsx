/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { population } from "components/constant";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import { useEffect, useState } from "react";
import mapVN from "./vn-all.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const optionsInit: any = {
  chart: {
    animation: false,
  },
  title: {
    text: "",
  },
  mapNavigation: {
    enabled: true,
    enableButtons: false,
  },
  legend: {
    enabled: false,
  },
  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 1_000_000,
      color: '#0200D0',
      name: 'Clinton'
    }, {
      from: 1_000_000,
      to: 10_000_000,
      color: '#C40401',
      name: 'Trump'
    }]
  },
};

function MapChart(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [optionsChart, setOptionsChart] = useState<any>(optionsInit);

  useEffect(() => {
    setOptionsChart({
      ...optionsInit,
      series: [
        {
          joinBy: ["iso_3166_2", "iso"],
          name: "Vote",
          mapData: mapVN,
          data: population,
        },
      ],
    });
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="mapChart"
      allowChartUpdate
      // immutable={true}
      options={optionsChart}
    />
  );
}

export default MapChart;
