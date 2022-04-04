import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const axios = require('axios').default;

const options: {
  legend: {
    display: boolean;
  };
  elements: {
    point: {
      radius: number;
    };
  };
  maintainAspectRatio: boolean;
  tooltips: {
    mode: string;
    intersect: boolean;
    callbacks: {
      label: (tooltipItem: any, data: any) => any;
    };
  };
  scales: {};
} = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType = 'cases') => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const LineGraph = ({ casesType }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/api/country/timeseries')
        .then((res) => {
          return res;
        })
        .then((data: any) => {
          let chartData = buildChartData(data.data.actualTimeseries, casesType);
          setData(chartData);
          console.log(chartData);
          // buildChart(chartData);
        })
        .catch((e: any) => alert(e));
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      LineGraph
      <h1>this is a graph</h1>
      <div>
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: 'rgba(204, 16, 52, 0.5)',
                  borderColor: '#CC1034',
                  data: data,
                },
              ],
            }}
            options={options}
          />
        )}
      </div>
    </div>
  );
};

export default LineGraph;
