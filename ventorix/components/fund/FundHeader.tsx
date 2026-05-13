'use client';

import { Download, ArrowUpRight } from 'lucide-react';

export function FundHeader() {
	return (
		<div className="space-y-8">
			{/* Breadcrumb and Buttons */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div className="text-sm text-black">
					INVESTMENTS <span className="mx-2">›</span> PROGRESS REPORT
				</div>
				<div className="flex gap-3">
					<button className="px-4 py-2 rounded-lg border-2 border-brand-accent text-brand-primary hover:scale-105 transition-all flex items-center gap-2 font-semibold">
						<Download size={18} />
						Download PDF
					</button>
					<button className="px-4 py-2 rounded-lg bg-brand-primary text-brand-secondary font-semibold hover:bg-brand-dark-green/90 transition-colors">
						Request
					</button>
				</div>
			</div>

			{/* Title and Description */}
			<div>
				<h1 className="text-4xl font-bold text-brand-primary mb-2">
					Aetherius Fund LP
				</h1>
				<p className="text-black max-w-2xl">
					High-precision institutional grade exposure to decentralized liquidity
					protocols and delta-neutral arbitrage strategies. Maturity scheduled
					for Q4 2025.
				</p>
			</div>

			{/* Metrics Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Total Value */}
				<div className="bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
					<div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
						Total Value
					</div>
					<div className="text-3xl font-bold text-brand-tertiary mb-2">
						$842,503.12
					</div>
					<div className="text-sm text-brand-accent font-semibold flex items-center gap-1">
						<ArrowUpRight size={16} />
						14.2% Total
					</div>
				</div>

				{/* Projected APR */}
				<div className=" bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
					<div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
						Projected APR
					</div>
					<div className="text-3xl font-bold text-brand-tertiary mb-2">
						18.4%
					</div>
					<div className="text-sm text-brand-accent">
						Baseline Target: 18.1%
					</div>
				</div>

				{/* Days Remaining */}
				<div className="bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
					<div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
						Days Remaining
					</div>
					<div className="text-3xl font-bold text-brand-tertiary mb-2">412</div>
					<div className="text-sm text-brand-accent">Until Q4 2025</div>
				</div>

				{/* Risk Score */}
				<div className="bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
					<div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
						Risk Score
					</div>
					<div className="text-3xl font-bold text-brand-tertiary mb-2">Low</div>
					<div className="text-sm text-brand-accent">
						Volatility Index: 2.3%
					</div>
				</div>
			</div>
		</div>
	);
}
