import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Services",
  description: "Explore our full range of automated solutions including Gantry Robots, Conveyor Systems, Palletizing Robotics, and Special Purpose Machines (SPM).",
  keywords: ["Gantry Automation", "Robotic Solutions", "Conveyor Systems", "SPM Automation", "Mech Space Services"],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
