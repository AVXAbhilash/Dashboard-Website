import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble, Pie, Line, Doughnut, Radar, Bar, PolarArea } from 'react-chartjs-2';

// Register ALL the components needed for different chart types
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Needed for Radar & PolarArea
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Needed for Pie, Doughnut & PolarArea
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // --- Data Configurations (Ported from your HTML script) ---

  const polarData = {
    labels: ["18-25", "26-35", "36-45", "46-60", "60+"],
    datasets: [{
      data: [25, 30, 20, 15, 10],
      backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
      borderWidth: 0,
    }],
  };

  const bubbleData = {
    datasets: [{
      label: "Projects",
      data: [
        { x: 10, y: 20, r: 10 },
        { x: 15, y: 25, r: 12 },
        { x: 8, y: 15, r: 8 },
        { x: 20, y: 30, r: 14 },
      ],
      backgroundColor: "rgba(37,99,235,0.6)",
    }],
  };

  const pieData = {
    labels: ["Organic", "Social Media", "Referral", "Email"],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
      hoverOffset: 10,
    }],
  };

  // Mixed Chart (Bar + Line)
  const mixedData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: 'bar',
        label: "Sales",
        data: [400, 600, 800, 700, 900, 1000],
        backgroundColor: "rgba(37,99,235,0.6)",
        borderRadius: 6,
      },
      {
        type: 'line',
        label: "Profit",
        data: [150, 200, 300, 250, 400, 450],
        borderColor: "#10b981",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Monthly Sales",
      data: [120, 190, 300, 250, 280, 400],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.1)",
      tension: 0.4,
      fill: true,
    }],
  };

  const doughnutData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: ["#2563eb", "#10b981", "#f59e0b"],
      hoverOffset: 8,
    }],
  };

  const radarData = {
    labels: ["Speed", "Quality", "Support", "Price", "Design"],
    datasets: [{
      label: "Performance",
      data: [80, 90, 70, 60, 95],
      fill: true,
      backgroundColor: "rgba(37,99,235,0.2)",
      borderColor: "#2563eb",
      pointBackgroundColor: "#2563eb",
    }],
  };

  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [{
      label: "User Growth",
      data: [300, 500, 700, 900],
      backgroundColor: ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"],
      borderRadius: 4,
    }],
  };

  // Common Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  const noLegendOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-6 dark:text-accent">Charts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Bubble Chart */}
        <ChartCard title="Project Performance">
          <Bubble data={bubbleData} options={{...options, scales: { x: { title: { display: true, text: "Efficiency" } }, y: { title: { display: true, text: "Output" } } }}} />
        </ChartCard>

        {/* Pie Chart */}
        <ChartCard title="Traffic Sources">
          <Pie data={pieData} options={options} />
        </ChartCard>

        {/* Mixed Chart (Using Bar component to render mixed types) */}
        <ChartCard title="Sales vs Profit">
          <Bar data={mixedData} options={options} />
        </ChartCard>

        {/* Line Chart */}
        <ChartCard title="Monthly Report">
          <Line data={lineData} options={noLegendOptions} />
        </ChartCard>

        {/* Doughnut Chart */}
        <ChartCard title="Revenue Split">
          <Doughnut data={doughnutData} options={options} />
        </ChartCard>

        {/* Radar Chart */}
        <ChartCard title="Performance Overview">
          <Radar data={radarData} options={options} />
        </ChartCard>

        {/* Bar Chart */}
        <ChartCard title="User Growth">
          <Bar data={barData} options={noLegendOptions} />
        </ChartCard>

        {/* Polar Area Chart */}
        <ChartCard title="Customer Demographics">
          <PolarArea data={polarData} options={options} />
        </ChartCard>

      </div>
    </div>
  );
};

// Reusable Card Component for consistent styling
const ChartCard = ({ title, children }) => (
  <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300">
    <div className="bg-blue-600 text-white px-4 py-3 font-semibold text-sm sm:text-base">
      {title}
    </div>
    <div className="p-4 h-[300px] w-full relative">
      {children}
    </div>
  </div>
);

export default Charts;