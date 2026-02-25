export default function DemoBanner() {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
      <div className="flex items-center gap-3 text-sm">
        <span className="text-yellow-900 font-medium">Demo state:</span>

        <span className="px-2 py-1 rounded bg-orange-900 text-white font-medium">
          Loaded
        </span>

        <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-900 font-medium">
          Empty
        </span>

        <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-900 font-medium">
          Loading
        </span>
      </div>
    </div>
  );
}