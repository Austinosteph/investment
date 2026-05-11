'use client';

import React from 'react';

interface Activity {
	id: string;
	title: string;
	description: string;
	timestamp: string;
	icon: 'investment' | 'growth' | 'dividend';
}

const activities: Activity[] = [
	{
		id: '1',
		title: 'New Investment Seeded',
		description: 'Allocated $50,000 to Alpha Quantum Yield Fund.',
		timestamp: '2 HOURS AGO',
		icon: 'investment',
	},
	{
		id: '2',
		title: 'Growth Update',
		description: 'Real Estate Trust B-9 reported 4.2% increase this week.',
		timestamp: 'YESTERDAY, 4:30 PM',
		icon: 'growth',
	},
	{
		id: '3',
		title: 'Dividend Reinvested',
		description: '$1,240 from High-Yield Debt re-allocated.',
		timestamp: 'OCT 04, 2025',
		icon: 'dividend',
	},
];

function ActivityIcon({
	type,
}: {
	type: 'investment' | 'growth' | 'dividend';
}) {
	const iconClasses =
		'w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0';

	switch (type) {
		case 'investment':
			return (
				<div className={`${iconClasses} bg-lime-500/20`}>
					<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-lime-500 rounded-full"></div>
				</div>
			);
		case 'growth':
			return (
				<div className={`${iconClasses} bg-cyan-500/20`}>
					<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full"></div>
				</div>
			);
		case 'dividend':
			return (
				<div className={`${iconClasses} bg-neutral-500/20`}>
					<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-400 rounded-full"></div>
				</div>
			);
	}
}

export function RecentActivity() {
	return (
		<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-6">
			<h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
				Recent Activity
			</h2>

			<div className="space-y-3 sm:space-y-2">
				{activities.map((activity) => (
					<div key={activity.id} className="flex gap-3 sm:gap-4">
						<ActivityIcon type={activity.icon} />
						<div className="flex-1 min-w-0">
							<h3 className="text-white font-medium text-xs sm:text-sm">
								{activity.title}
							</h3>
							<p className="text-neutral-400 text-xs sm:text-xs mt-1">
								{activity.description}
							</p>
							<p className="text-neutral-500 text-xs mt-1 sm:mt-2">
								{activity.timestamp}
							</p>
						</div>
					</div>
				))}
			</div>

			<button className="w-full mt-2 sm:mt-3 py-2 text-brand-dark-green hover:text-brand-dark-green/80 font-medium text-xs sm:text-sm transition-colors">
				VIEW FULL HISTORY
			</button>
		</div>
	);
}
