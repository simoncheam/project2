import React, { useEffect, useState } from 'react';
import { CountrySeries } from '../client_types/country';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  timeSeries: CountrySeries;
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'US Summary',
    },
  },
};
const CountryChart = (data: ChartProps) => {
  const [dataset, setDataset] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  }>(null);

  useEffect(() => {
    //API stuff
    const labels = data?.timeSeries?.actualsTimeseries.map((ats) => ats.date);
    const deaths = data?.timeSeries?.actualsTimeseries.map((ats) => ats.deaths);
    const posTests = data?.timeSeries?.actualsTimeseries.map((ats) => ats.positiveTests / 1000);
    const hospitalizedCvdPts = data?.timeSeries?.actualsTimeseries.map(
      (ats) => ats.hospitalBeds.currentUsageCovid
    );
    const vaxCompleted = data?.timeSeries?.actualsTimeseries.map(
      (ats) => ats.vaccinationsCompleted / 1000
    );

    const dataset = {
      labels, //! X- axis
      datasets: [
        {
          label: 'Deaths',
          data: deaths, //! y- axis
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Vaccinations completed(1K)',
          data: vaxCompleted, //! y- axis
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Positive tests(1K)',
          data: posTests, //! y- axis
          borderColor: 'rgba(245, 223, 39, 0.8)',
          backgroundColor: 'rgba(245, 223, 39, 0.5)',
        },
        {
          label: 'Hospitalized Covid patients',
          data: hospitalizedCvdPts, //! y- axis
          borderColor: 'rgba(239, 180, 17, 0.83)',
          backgroundColor: 'rgba(239, 180, 17, 0.5)',
        },
      ],
    };
    setDataset(dataset);
    // console.log(dataset);
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-muted">
          Deaths, Vaccinations, Positive Tests, Hospitalized Covid Patients vs. time
        </h3>
      </div>
      <div className="row">{dataset && <Line data={dataset} options={options} />}</div>
    </div>
  );
};

export default CountryChart;
