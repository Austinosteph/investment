'use client';

import { useState } from 'react';
import { Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ActivityTabs from '@/components/activity/ActivityTabs';
import ActivityTimeline from '@/components/activity/ActivityTimeline';
import { DashboardNav } from '@/components/navbars/DashboardNav';
import FooterAuth from '@/components/footerauth';

const ACTIVITIES = [
	{
		id: 1,
		date: 'OCT 24, 2024',
		title: 'Strategic Alpha Fund Allocation',
		description: 'Investment Payment • TXID: 9821-XCA-001',
		amount: -50000.0,
		status: 'SUCCESS',
		icon: 'investment',
		accent: true,
	},
	{
		id: 2,
		date: 'OCT 24, 2024',
		title: 'Growth Credit Adjustment',
		description: 'System Update • Compounded Monthly Yield',
		amount: 1240.42,
		status: 'SETTLED',
		icon: 'growth',
		accent: false,
	},
	{
		id: 3,
		date: 'OCT 23, 2024',
		title: 'Liquidity Pool Deposit',
		description: 'Nexus Global Yield • Pending Clearing',
		amount: -12000.0,
		status: 'PENDING',
		icon: 'deposit',
		accent: false,
	},
	{
		id: 4,
		date: 'OCT 23, 2024',
		title: 'Identity Verification Update',
		description: 'System Confirmation • KYC Tier 3',
		amount: 0,
		status: 'COMPLETED',
		icon: 'verification',
		accent: false,
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState('all');

	return (
		<>
			<DashboardNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 text-white overflow-auto">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="mb-6 sm:mb-8 lg:mb-12">
						<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
							Activity Ledger
						</h1>
						<p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl lg:max-w-3xl">
							Comprehensive vertical history of your institutional investment
							activities, capital growth credits, and fund confirmations.
						</p>
					</div>

					{/* Controls Section */}
					<div className="mb-6 sm:mb-8">
						{/* Mobile Layout - Stacked */}
						<div className="flex flex-col sm:hidden gap-4">
							<ActivityTabs activeTab={activeTab} onTabChange={setActiveTab} />
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="sm"
									className="flex-1 border-brand-light-green hover:bg-brand-light-green/10 text-brand-light-green"
								>
									<Filter className="w-4 h-4 mr-2" />
									Filter
								</Button>
								<Button
									size="sm"
									className="flex-1 bg-brand-dark-green text-brand-text-green hover:bg-brand-dark-green/90 font-semibold"
								>
									<Download className="w-4 h-4 mr-2" />
									Export
								</Button>
							</div>
						</div>

						{/* Tablet & Desktop Layout - Horizontal */}
						<div className="hidden sm:flex items-center justify-between gap-4">
							<div className="flex-1 min-w-0">
								<ActivityTabs
									activeTab={activeTab}
									onTabChange={setActiveTab}
								/>
							</div>
							<div className="flex gap-2 sm:gap-3 shrink-0">
								<Button
									variant="outline"
									size="sm"
									className="border-brand-light-green hover:bg-brand-light-green/10 text-brand-light-green"
								>
									<Filter className="w-4 h-4 mr-2" />
									Filter
								</Button>
								<Button
									size="sm"
									className="bg-brand-dark-green text-brand-text-green hover:bg-brand-dark-green/90 font-semibold"
								>
									<Download className="w-4 h-4 mr-2" />
									Export CSV
								</Button>
							</div>
						</div>
					</div>

					{/* Activity Timeline */}
					<div className="mb-8 sm:mb-12">
						<ActivityTimeline activities={ACTIVITIES} />
					</div>

					{/* Load More Button */}
					<div className="flex justify-center mb-8 sm:mb-12">
						<Button
							variant="outline"
							className="border-brand-light-green hover:bg-brand-light-green/10 text-brand-light-green px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
						>
							Load Historical Activity
						</Button>
					</div>
				</div>
				<FooterAuth />
			</main>
		</>
	);
}
