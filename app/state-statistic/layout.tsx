import { LandContext, StatisticContext } from "./statisticContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LandContext><div>{children}</div></LandContext>
}