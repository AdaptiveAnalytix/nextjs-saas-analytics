import React, { useState, useEffect } from 'react';
import { Card, Title, AreaChart } from '@tremor/react'; // Hypothetical UI lib usage

// Typescript interface for strict typing
interface MetricData {
  date: string;
  revenue: number;
  churn: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<MetricData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulated API fetch
  useEffect(() => {
    const fetchData = async () => {
      // In production, this fetches from our FastAPI backend
      const mockData = [
        { date: "Jan 23", revenue: 2400, churn: 12 },
        { date: "Feb 23", revenue: 1398, churn: 8 },
        { date: "Mar 23", revenue: 9800, churn: 23 },
      ];
      setData(mockData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Executive Overview
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revenue Card */}
          <Card className="p-4 shadow-lg rounded-xl bg-white">
            <Title>Monthly Recurring Revenue (MRR)</Title>
            <div className="h-72 mt-4">
              {loading ? (
                <p>Loading...</p> 
              ) : (
                <AreaChart 
                  data={data} 
                  index="date" 
                  categories={["revenue"]} 
                  colors={["indigo"]} 
                />
              )}
            </div>
          </Card>

          {/* User Activity Card */}
          <Card className="p-4 shadow-lg rounded-xl bg-white">
            <Title>Churn Velocity</Title>
            <div className="h-72 mt-4 bg-gray-100 rounded flex items-center justify-center">
               <span className="text-gray-500">Visualization Component</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
