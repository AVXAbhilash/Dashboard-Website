import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend, Filler);

// Helper for Gradient Charts
const createGradient = (ctx, colorStart, colorEnd) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
};

const Dashboard = () => {
  // 1. State for Real-time Metrics
  const [metrics, setMetrics] = useState({
    sales: 1450,
    revenue: 3264000,
    clients: 12440
  });

  // 2. State for Real-time Chart Data
  const [lineChartData, setLineChartData] = useState({
    labels: ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25", "10:30"],
    datasets: [{
      label: "Live Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension: 0.4,
      borderColor: "#2563eb",
      borderWidth: 2,
      pointRadius: 4,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        return createGradient(ctx, 'rgba(37, 99, 235, 0.4)', 'rgba(37, 99, 235, 0.0)');
      },
    }]
  });

  // 3. Simulation Logic (Runs every 2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      
      // A. Randomize Metrics
      setMetrics(prev => ({
        sales: Math.max(0, Math.floor(prev.sales + (Math.random() - 0.5) * 20)), // Fluctuate by +/- 10
        revenue: Math.max(0, Math.floor(prev.revenue + (Math.random() - 0.5) * 500)), // Fluctuate by +/- 250
        clients: Math.max(0, Math.floor(prev.clients + (Math.random() - 0.5) * 5)), // Fluctuate by +/- 2
      }));

      // B. Update Chart (Shift old data out, push new data in)
      setLineChartData(prev => {
        const oldData = [...prev.datasets[0].data];
        const oldLabels = [...prev.labels];
        
        // Remove first point
        oldData.shift();
        oldLabels.shift();
        
        // Add new random point
        const newValue = Math.floor(Math.random() * 60) + 40; // Random value between 40 and 100
        oldData.push(newValue);
        
        // Add new time label
        const now = new Date();
        const newLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        oldLabels.push(newLabel);

        return {
          ...prev,
          labels: oldLabels,
          datasets: [{
            ...prev.datasets[0],
            data: oldData,
          }]
        };
      });

    }, 2000); // Updates every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Card Configuration using dynamic metric state
  const cardStats = [
    { title: "Sales | Today", value: metrics.sales, change: "+12%", icon: "🛒", color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Revenue | Month", value: `₹${metrics.revenue}`, change: "+8%", icon: "₹", color: "text-green-600", bg: "bg-green-100" },
    { title: "Clients | Year", value: metrics.clients, change: "-12%", icon: "👥", color: "text-orange-600", bg: "bg-orange-100" },
  ];

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Overview</p>
          <h1 className="text-3xl font-bold text-[#012970] dark:text-white tracking-tight">Dashboard</h1>
        </div>
        <div className="flex gap-2">
            <span className="flex h-3 w-3 relative mt-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-600">Live Updates</span>
        </div>
      </div>

      {/* Stats Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardStats.map((stat, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 card-hover relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.title}</p>
                <h3 className="text-3xl font-bold text-[#012970] dark:text-white mt-2 transition-all duration-300">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} text-2xl`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-bold ${stat.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-gray-400 ml-2">vs last period</span>
            </div>
            {/* Decoration Circle */}
            <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10 ${stat.bg.replace('100', '400')}`}></div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Live Chart */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#012970] dark:text-white mb-6">Live Revenue Analytics</h3>
          <div className="h-[350px] w-full">
            <Line 
                data={lineChartData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  animation: { duration: 1000, easing: 'linear' }, // Smooth animation for live effect
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { 
                        grid: { color: 'rgba(0,0,0,0.05)' }, 
                        border: { display: false },
                        beginAtZero: true
                    },
                    x: { 
                        grid: { display: false }, 
                        border: { display: false } 
                    }
                  }
                }} 
            />
          </div>
        </div>

        {/* Side Chart (Static for contrast) */}
        <div className="glass rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-[#012970] dark:text-white mb-6">Traffic Sources</h3>
          <div className="flex-1 flex items-center justify-center relative">
             <Doughnut 
              data={{
                labels: ["Search", "Direct", "Social"],
                datasets: [{
                  data: [55, 30, 15],
                  backgroundColor: ["#2563eb", "#22c55e", "#f59e0b"],
                  borderWidth: 0,
                  hoverOffset: 10
                }]
              }} 
              options={{
                cutout: '75%',
                plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } } }
              }}
             />
             <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-bold text-[#012970] dark:text-white">10k</span>
                <span className="text-xs text-gray-500">Visitors</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;