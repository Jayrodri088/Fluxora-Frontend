import HeroSection from "../components/landing-page/HeroSection";

interface LandingProps {
  theme?: "light" | "dark";
}

export default function Landing({ theme = "light" }: LandingProps) {
  return (
    <div className="flex flex-col">
      <HeroSection theme={theme} />
      {/* Spacer to compensate for absolutely-positioned sub-cards */}
      <div className="h-20 lg:h-20" />
    </div>
  );
}
