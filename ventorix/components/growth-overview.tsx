'use client';

import React, { useState } from 'react';

export function GrowthOverview() {
	const [timePeriod, setTimePeriod] = useState('ALL');

	const periods = ['1D', '1W', '1M', 'ALL'];

	return (
		<div className="bg-brand-primary border border-brand-primary/60 rounded-lg p-4 sm:p-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
				<h2 className="text-lg sm:text-xl font-semibold text-brand-secondary">
					Growth Overview
				</h2>
				<div className="flex gap-1 sm:gap-2">
					{periods.map((period) => (
						<button
							key={period}
							onClick={() => setTimePeriod(period)}
							className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded transition-colors ${
								timePeriod === period
									? 'bg-neutral-700 text-brand-secondary'
									: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
							}`}
						>
							{period}
						</button>
					))}
				</div>
			</div>

			{/* Chart */}
			<div className="h-48 sm:h-56 lg:h-64 flex items-end justify-between px-2 sm:px-4 gap-1 sm:gap-2 bg-linear-to-t from-lime-500/20 to-transparent rounded">
				<div className="flex-1 h-20 sm:h-24 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-80"></div>
				<div className="flex-1 h-24 sm:h-32 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-70"></div>
				<div className="flex-1 h-32 sm:h-40 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-75"></div>
				<div className="flex-1 h-28 sm:h-36 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-65"></div>
				<div className="flex-1 h-36 sm:h-44 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-80"></div>
				<div className="flex-1 h-40 sm:h-48 bg-linear-to-t from-brand-secondary to-lime-400 rounded-sm opacity-70"></div>
			</div>
		</div>
	);
}
