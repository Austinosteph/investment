'use client';

import { Download, ArrowUpRight } from 'lucide-react';

export function FundHeader() {
	return (
		<div className="space-y-8">
			{/* Breadcrumb and Buttons */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div className="text-sm text-gray-400">
					INVESTMENTS <span className="mx-2">›</span> PROGRESS REPORT
				</div>
				<div className="flex gap-3">
					<button className="px-4 py-2 rounded-lg border border-brand-light-green text-brand-light-green hover:bg-brand-light-green/10 transition-colors flex items-center gap-2">
						<Download size={18} />
						Download PDF
					</button>
					<button className="px-4 py-2 rounded-lg bg-brand-dark-green text-brand-text-green font-semibold hover:bg-brand-dark-green/90 transition-colors">
						Request
					</button>
				</div>
			</div>

			{/* Title and Description */}
			<div>
				<h1 className="text-4xl font-bold text-white mb-2">
					Aetherius Fund LP
				</h1>
				<p className="text-gray-400 max-w-2xl">
					High-precision institutional grade exposure to decentralized liquidity
					protocols and delta-neutral arbitrage strategies. Maturity scheduled
					for Q4 2025.
				</p>
			</div>

			{/* Metrics Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Total Value */}
				<div className="bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
					<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
						Total Value
					</div>
					<div className="text-3xl font-bold text-white mb-2">$842,503.12</div>
					<div className="text-sm brand-light-green font-semibold flex items-center gap-1">
						<ArrowUpRight size={16} />
						14.2% Total
					</div>
				</div>

				{/* Projected APR */}
				<div className=" bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
					<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
						Projected APR
					</div>
					<div className="text-3xl font-bold text-white mb-2">18.4%</div>
					<div className="text-sm text-gray-400">Baseline Target: 18.1%</div>
				</div>

				{/* Days Remaining */}
				<div className="bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
					<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
						Days Remaining
					</div>
					<div className="text-3xl font-bold text-white mb-2">412</div>
					<div className="text-sm text-gray-400">Until Q4 2025</div>
				</div>

				{/* Risk Score */}
				<div className="bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
					<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
						Risk Score
					</div>
					<div className="text-3xl font-bold text-white mb-2">Low</div>
					<div className="text-sm text-gray-400">Volatility Index: 2.3%</div>
				</div>
			</div>
		</div>
	);
}
