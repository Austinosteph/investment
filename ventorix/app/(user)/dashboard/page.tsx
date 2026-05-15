'use client';

import Link from 'next/link';
import { GrowthOverview } from '@/components/growth-overview';
import { DashboardNav } from '@/components/navbars/DashboardNav';
import { RecentActivity } from '@/components/recent-activity';
import { Eye, ChartNoAxesCombined } from 'lucide-react';
import Footer from '@/components/footer';

export default function Dashboard() {
	return (
		<>
			<DashboardNav />

			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background text-brand-primary overflow-auto">
				<div className="max-w-7xl mx-auto mb-12 sm:mb-16">
					{/* Welcome Section */}
					<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-0">
						<div className="mb-4 sm:mb-6 lg:mb-8">
							<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black">
								Welcome back, Alex.
							</h1>
							<p className="text-brand-primary text-xs sm:text-sm md:text-base">
								Your portfolio performance is up 12.4% this quarter.
							</p>
						</div>
						{/* Buttons */}
						<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 xl:gap-6 p-4">
							<Link
								href="/invest"
								className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all hover:shadow-lg hover:scale-105 bg-brand-primary text-brand-secondary"
							>
								<ChartNoAxesCombined className="w-4 h-4 sm:w-5 sm:h-5" />
								Invest Now
							</Link>
							<Link
								href="/invest"
								className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all hover:scale-105 text-brand-primary border-2 border-brand-accent"
							>
								<Eye className="w-4 h-4 sm:w-5 sm:h-5" />
								View Investments
							</Link>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
						<div className="bg-brand-primary  rounded-lg p-3 sm:p-4 md:p-6">
							<div className="flex items-center justify-between mb-3 sm:mb-4">
								<span className="text-brand-secondary text-xs sm:text-sm">
									TOTAL INVESTED AMOUNT
								</span>
								<span className="text-base sm:text-lg lg:text-xl">🏦</span>
							</div>
							<div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
								$1,248,500.00
							</div>
							<div className="flex gap-2">
								<span className="text-lime-500 text-xs sm:text-sm font-medium">
									+2.4%
								</span>
								<span className="text-brand-secondary/50 text-xs sm:text-sm">
									LAST MONTH
								</span>
							</div>
						</div>

						<div className="bg-brand-primary border border-neutral-800 rounded-lg p-3 sm:p-4 md:p-6">
							<div className="flex items-center justify-between mb-3 sm:mb-4">
								<span className="text-brand-secondary text-xs sm:text-sm">
									TOTAL PROFIT EARNED
								</span>
								<span className="text-base sm:text-lg lg:text-xl">💰</span>
							</div>
							<div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-tertiary mb-2">
								$142,320.12
							</div>
							<div className="flex gap-2">
								<span className="text-lime-500 text-xs sm:text-sm font-medium">
									+18.2%
								</span>
								<span className="text-brand-secondary/50 text-xs sm:text-sm">
									ALL TIME YIELD
								</span>
							</div>
						</div>
					</div>

					{/* Growth Overview and Recent Activity */}
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
						<div className="xl:col-span-2">
							<GrowthOverview />
						</div>
						<div>
							<RecentActivity />
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
