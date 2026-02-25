import { Metric } from "./Metric"; 

export default function MetricCard({ icon, label, value, desc }: Metric) {
  return (
    <div className="bg-gray-100  rounded-xl p-6">
      <div className="text-3xl mb-3">{icon}</div>

      <div className="text-gray-800 font-medium">{label}</div>

      <div className="text-2xl font-semibold text-black">{value}</div>

      <p className="text-gray-800 text-sm">{desc}</p>
    </div>
  );
}