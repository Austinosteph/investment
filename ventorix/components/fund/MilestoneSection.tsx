'use client';

import { CheckCircle, Circle } from 'lucide-react';

export function MilestoneSection() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{/* Alpha Deviation */}
			<div className="bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
				<h3 className="text-lg font-bold text-black mb-6">Alpha Deviation</h3>

				<div className="space-y-4">
					<div>
						<div className="flex justify-between items-center mb-2">
							<span className="text-sm text-brand-primary">
								PROJECTED YIELD (USD VALUE)
							</span>
							<span className="text-2xl font-bold text-brand-accent">
								$92,400
							</span>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex justify-between items-center mb-2">
							<span className="text-sm text-brand-primary">
								ACTUAL YIELD (USD VALUE)
							</span>
							<span className="text-xl font-bold text-brand-tertiary">
								+$114,203
							</span>
						</div>
						<div className="w-full bg-brand-primary rounded-full h-1.5">
							<div
								className="bg-brand-primary h-1.5 rounded-full"
								style={{ width: '85%' }}
							/>
						</div>
					</div>

					<p className="text-sm text-brand-primary/80 mt-4">
						Strategy is currently outperforming the target alpha by 42.5% due to
						optimized liquidity routing and lower spot convergence.
					</p>
				</div>
			</div>

			{/* Roadmap Milestones */}
			<div className="bg-brand-primary/15 rounded-lg p-6 border border-brand-primary">
				<h3 className="text-lg font-bold text-black mb-6">
					Roadmap Milestones
				</h3>

				<div className="space-y-4">
					{/* Completed */}
					<div className="flex gap-3">
						<div className="pt-1">
							<CheckCircle className="w-5 h-5 text-brand-primary" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-brand-primary">
										Deployment & Capital Lock
									</p>
									<p className="text-xs text-brand-primary/85 mt-0.5">
										Q1 2024 • Completed
									</p>
								</div>
								<span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-dark-green/20 text-brand-accent">
									VERIFIED
								</span>
							</div>
						</div>
					</div>

					{/* Active */}
					<div className="flex gap-3">
						<div className="pt-1">
							<CheckCircle className="w-5 h-5 text-brand-primary" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-brand-primary">
										Mid-Term Rebalancing
									</p>
									<p className="text-xs text-brand-primary/85 mt-0.5">
										Q3 Progress • 76% Volume
									</p>
								</div>
								<span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-primary text-brand-secondary">
									ACTIVE
								</span>
							</div>
						</div>
					</div>

					{/* Pending */}
					<div className="flex gap-3">
						<div className="pt-1">
							<Circle className="w-5 h-5 text-brand-primary" />
						</div>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-brand-primary">
										Principal Redemption
									</p>
									<p className="text-xs text-brand-primary/85 mt-0.5">
										Q4 2025 • Scheduled
									</p>
								</div>
								<span className="text-xs font-bold px-2 py-1 rounded-full bg-yellow-500 text-brand-primary">
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
