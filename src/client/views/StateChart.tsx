import React, { useEffect, useState } from 'react';
import { SingleStateSeries } from '../client_types/singlestate';
import { Line } from 'react-chartjs-2';

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

interface ChartProps {
  timeSeries: SingleStateSeries;
}

const StateChart = (data: ChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `State Summary - ${data.timeSeries.state} `,
      },
    },
  };

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
    //! labels - dates, deaths, posTests, hospCvd, vaxComplete
    const labels = data?.timeSeries?.actualsTimeseries.map((ats) => ats.date);
    const deaths = data?.timeSeries?.actualsTimeseries.map((ats) => ats.deaths);
    const posTests = data?.timeSeries?.actualsTimeseries.map((ats) => ats.positiveTests / 1000);

    const hospitalizedCvdPts = data?.timeSeries?.actualsTimeseries.map(
      (ats) => ats.hospitalBeds.currentUsageCovid
    );

    const vaxCompleted = data?.timeSeries?.actualsTimeseries.map(
      (ats) => ats.vaccinationsCompleted / 1000
    );

    // ! add weekly admissions
    const weeklyCovidAdmissions = data?.timeSeries?.actualsTimeseries.map(
      (ats) => ats.hospitalBeds.weeklyCovidAdmissions
    );

    //! datasets
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
        {
          label: 'Weekly Covid admissions',
          data: weeklyCovidAdmissions, //! y- axis
          borderColor: 'rgba(41, 223, 61, 0.42)',
          backgroundColor: 'rgba(41, 223, 61, 0.5)',
        },
      ],
    };

    setDataset(dataset);
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        {/* <h3 className="text-muted">State Detail Chart</h3> */}
        <h3 className="text-muted">
          Deaths, Vaccinations, Positive Tests, Hospitalized Covid Patients vs. time
        </h3>
      </div>
      <div className="row">{dataset && <Line data={dataset} options={options} />}</div>
    </div>
  );
};

export default StateChart;
