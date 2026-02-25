import { streams } from "./sample-streams.tsx"; 
import StreamRow from "./StreamRow";
import { Stream } from "./Stream";

export default function StreamsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b border-gray-200">
            <th className="py-2">STREAM</th>
            <th className="py-2">RECIPIENT</th>
            <th className="py-2">RATE</th>
            <th className="py-2">STATUS</th>
            <th className="py-2">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {streams.map((s: Stream, i: number) => (
            <StreamRow key={i} stream={s} />
          ))}
        </tbody>
      </table>
    </div>
  );
}