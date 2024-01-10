// PieChartComponent.tsx

import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: 'Categoria 1', value: 30 },
  { name: 'Categoria 2', value: 45 },
  { name: 'Categoria 3', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartOnly: React.FC = () => {
  return (
    <PieChart width={60} height={60}>
      <Pie
        data={data}
        cx={30}
        cy={30}
        labelLine={false}
        outerRadius={20}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartOnly;
