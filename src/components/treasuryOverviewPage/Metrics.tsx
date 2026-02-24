import MetricCard from "./MetricCard"; 
import { metricsData } from "./sample-streams.tsx"; 
import { Metric } from "./Metric"; 

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metricsData.map((m: Metric, i: number) => (
        <MetricCard key={i} {...m} />
      ))}
    </div>
  );
}