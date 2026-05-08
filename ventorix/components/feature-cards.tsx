'use client';

import { TrendingUp, Hourglass, Wallet } from 'lucide-react';

const features = [
	{
		id: 1,
		title: 'Invest',
		description:
			'Choose from our curated pools. Deposit assets instantly using multiple asset gateways and start your journey.',
		icon: Wallet,
		borderColor: 'border-brand-dark-green',
		iconColor: 'text-brand-dark-green',
		bgColor: 'bg-brand-dark-green/15',
	},
	{
		id: 2,
		title: 'Wait',
		description:
			'Let our institutional-tier algorithms work. We minimize risk through diversified exposure across global markets.',
		icon: Hourglass,
		borderColor: 'border-brand-light-blue',
		iconColor: 'text-brand-light-blue',
		bgColor: 'bg-brand-light-blue/15',
	},
	{
		id: 3,
		title: 'Track Growth',
		description:
			'Monitor performance in real-time with our advanced analytics dashboard. Withdraw your profits anytime.',
		icon: TrendingUp,
		borderColor: 'border-brand-dark-green',
		iconColor: 'text-white',
		bgColor: 'bg-white/15',
	},
];

export function FeatureCards() {
	return (
		<section className="w-full px-4 sm:px-8 lg:px-36 py-12 sm:py-16">
			<div className="text-center mb-8 sm:mb-12">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance text-white">
					The Ventorix Advantage
				</h1>
				<p className="mt-4 text-sm sm:text-base tracking-widest text-brand-light-green">
					SIMPLE • SECURE • SCALABLE
				</p>
			</div>
			<div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<div
							key={feature.id}
							className={`border ${feature.borderColor} rounded-xl bg-card p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all hover:scale-105`}
						>
							<div
								className={`mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg ${feature.borderColor} ${feature.bgColor}`}
							>
								<Icon
									className={`h-5 w-5 sm:h-6 sm:w-6 ${feature.iconColor}`}
								/>
							</div>
							<h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
								{feature.title}
							</h3>
							<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-brand-light-green">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
