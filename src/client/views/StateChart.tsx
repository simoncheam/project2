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

const StateChart = (data: ChartProps) => {
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

    //! datasets

    setDataset(dataset);
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-muted">State Detail Chart</h3>
      </div>
      <div className="row"> LINE CHART</div>
    </div>
  );
};

export default StateChart;
