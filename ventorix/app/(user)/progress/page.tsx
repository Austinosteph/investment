'use client';

import { FundHeader } from '@/components/fund/FundHeader';
import { PerformanceChart } from '@/components/fund/PerformanceChart';
import { MilestoneSection } from '@/components/fund/MilestoneSection';
import { DashboardNav } from '@/components/navbars/DashboardNav';
import FooterAuth from '@/components/footerauth';

export default function Home() {
	return (
		<>
			<DashboardNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 text-white overflow-auto">
				<div className="max-w-7xl mx-auto">
					{/* Content Sections */}
					<div className="space-y-6 sm:space-y-8 lg:space-y-12">
						{/* Fund Header */}
						<div className="mb-6 sm:mb-8">
							<FundHeader />
						</div>

						{/* Performance Chart */}
						<div className="mb-6 sm:mb-8 lg:mb-12">
							<div className="relative">
								<PerformanceChart />
							</div>
						</div>

						{/* Milestone Section */}
						<div className="mb-8 sm:mb-12">
							<MilestoneSection />
						</div>
					</div>
				</div>
				<FooterAuth />
			</main>
		</>
	);
}
