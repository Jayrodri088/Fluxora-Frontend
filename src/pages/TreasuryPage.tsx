import DemoBanner from "../components/treasuryOverviewPage/DemoBanner";
import Header from "../components/treasuryOverviewPage/Header"
import Metrics from "../components/treasuryOverviewPage/Metrics"; 
import RecentStreams from "../components/treasuryOverviewPage/RecentStreams";

export default function TreasuryPage() {
  return (
    <div className="p-6 flex flex-col gap-8 bg-gray-50 min-h-screen">
      <DemoBanner />
      <Header />
      <Metrics />
      <RecentStreams />
    </div>
  );
}