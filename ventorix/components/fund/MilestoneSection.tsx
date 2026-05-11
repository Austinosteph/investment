'use client';

import { CheckCircle, Circle } from 'lucide-react';

export function MilestoneSection() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{/* Alpha Deviation */}
			<div className="bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
				<h3 className="text-lg font-bold text-white mb-6">Alpha Deviation</h3>

				<div className="space-y-4">
					<div>
						<div className="flex justify-between items-center mb-2">
							<span className="text-sm text-gray-400">
								PROJECTED YIELD (USD VALUE)
							</span>
							<span className="text-2xl font-bold text-white">$92,400</span>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex justify-between items-center mb-2">
							<span className="text-sm text-gray-300">
								ACTUAL YIELD (USD VALUE)
							</span>
							<span className="text-xl font-bold text-cyan-400">+$114,203</span>
						</div>
						<div className="w-full bg-gray-800 rounded-full h-1.5">
							<div
								className="bg-brand-light-green h-1.5 rounded-full"
								style={{ width: '85%' }}
							/>
						</div>
					</div>

					<p className="text-sm text-gray-400 mt-4">
						Strategy is currently outperforming the target alpha by 42.5% due to
						optimized liquidity routing and lower spot convergence.
					</p>
				</div>
			</div>

			{/* Roadmap Milestones */}
			<div className="bg-brand-light-green/5 rounded-lg p-6 border border-brand-light-green">
				<h3 className="text-lg font-bold text-white mb-6">
					Roadmap Milestones
				</h3>

				<div className="space-y-4">
					{/* Completed */}
					<div className="flex gap-3">
						<div className="pt-1">
							<CheckCircle className="w-5 h-5 text-brand-light-green" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-white">
										Deployment & Capital Lock
									</p>
									<p className="text-xs text-gray-400 mt-0.5">
										Q1 2024 • Completed
									</p>
								</div>
								<span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-dark-green/20 text-brand-light-green">
									VERIFIED
								</span>
							</div>
						</div>
					</div>

					{/* Active */}
					<div className="flex gap-3">
						<div className="pt-1">
							<CheckCircle className="w-5 h-5 text-brand-light-green" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-white">
										Mid-Term Rebalancing
									</p>
									<p className="text-xs text-gray-400 mt-0.5">
										Q3 Progress • 76% Volume
									</p>
								</div>
								<span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-light-green/20 text-brand-light-green">
									ACTIVE
								</span>
							</div>
						</div>
					</div>

					{/* Pending */}
					<div className="flex gap-3">
						<div className="pt-1">
							<Circle className="w-5 h-5 text-gray-600" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-gray-400">
										Principal Redemption
									</p>
									<p className="text-xs text-gray-500 mt-0.5">
										Q4 2025 • Scheduled
									</p>
								</div>
								<span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-800 text-gray-400">
									PENDING
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
