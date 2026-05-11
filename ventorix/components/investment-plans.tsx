'use client';

import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type PricingPlan = {
	name: string;
	tier: string;
	roi: string;
	deposit: string;
	features: string[];
	highlighted: boolean;
	badge?: string;
	icon?: React.ReactNode;
};

const PLANS: PricingPlan[] = [
	{
		name: 'Basic Plan',
		tier: 'RETAIL TIER',
		roi: '8.5%',
		deposit: '$500',
		features: ['Min. Deposit $500', 'Weekly Analytics', 'Standard Support'],
		highlighted: false,
		icon: (
			<svg
				className="w-12 h-12 sm:w-16 sm:h-16 opacity-30"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
				<polyline points="17 6 23 6 23 12"></polyline>
			</svg>
		),
	},
	{
		name: 'Standard Plan',
		tier: 'GROWTH TIER',
		roi: '14.2%',
		deposit: '$5,000',
		features: [
			'Min. Deposit $5,000',
			'Daily Yield Reports',
			'Priority Support',
			'Tax Optimization Tools',
		],
		highlighted: true,
		badge: 'MOST POPULAR',
	},
	{
		name: 'Premium Plan',
		tier: 'INSTITUTIONAL TIER',
		roi: '22.8%',
		deposit: '$50,000',
		features: [
			'Min. Deposit $50,000',
			'Dedicated Fund Manager',
			'Early Access Pools',
			'Institutional API Access',
		],
		highlighted: false,
		icon: (
			<svg
				className="w-12 h-12 sm:w-16 sm:h-16 opacity-30"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M12 3l2.4 7.2h7.6l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z"></path>
			</svg>
		),
	},
];

export default function InvestmentPlans() {
	const [isAnnual, setIsAnnual] = useState(true);
	const router = useRouter();

	return (
		<div className="w-full text-white">
			{/* Header */}
			<header className="w-full px-4 sm:px-8 lg:px-36 py-8 sm:py-10">
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
					<div>
						<h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-white">
							Investment Plans
						</h1>
						<p className="text-sm sm:text-base text-brand-light-green">
							Tailored solutions for every tier of investor.
						</p>
					</div>
					<div className="flex gap-3 bg-brand-navdark rounded-md p-1">
						<button
							onClick={() => setIsAnnual(true)}
							className={`px-4 sm:px-6 py-2 text-xs rounded-lg font-medium transition-colors ${
								isAnnual
									? 'bg-white/20 text-white'
									: 'text-white/50 hover:text-white/70'
							}`}
						>
							ANNUAL
						</button>
						<button
							onClick={() => setIsAnnual(false)}
							className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-medium transition-colors ${
								!isAnnual
									? 'bg-white/20 text-white'
									: 'text-white/50 hover:text-white/70'
							}`}
						>
							MONTHLY
						</button>
					</div>
				</div>
			</header>

			{/* Pricing Cards */}
			<main className="w-full px-4 sm:px-8 lg:px-36 py-2 sm:py-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{PLANS.map((plan, index) => (
						<div
							key={index}
							className={`relative rounded-2xl backdrop-blur-sm transition-all ${
								plan.highlighted
									? 'border-2 border-lime-400 bg-black/50'
									: 'border border-white/10 bg-white/5 hover:bg-white/8'
							}`}
						>
							{/* Icon Background */}
							<div className="absolute top-6 sm:top-8 right-6 sm:right-8">
								<div
									className={`${
										index === 0
											? 'text-white/20'
											: index === 1
												? 'text-lime-400/20'
												: 'text-cyan-400/20'
									}`}
								>
									{plan.icon}
								</div>
							</div>

							<div className="p-4 sm:p-6 relative z-10">
								<div className="flex flex-col sm:flex-row sm:justify-between gap-2">
									{/* Tier */}
									<p
										className={`text-xs font-medium mb-2 sm:mb-3 ${
											plan.highlighted
												? 'text-brand-dark-green'
												: 'text-brand-light-green'
										}`}
									>
										{plan.tier}
									</p>

									{/* Badge */}
									{plan.badge && (
										<div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-2 sm:mb-4">
											{plan.badge}
										</div>
									)}
								</div>

								{/* Plan Name */}
								<h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
									{plan.name}
								</h2>

								{/* ROI */}
								<div className="mb-4 sm:mb-6">
									<div
										className={`text-2xl sm:text-3xl font-semibold mb-2 ${
											plan.highlighted ? 'text-lime-400' : 'text-white'
										}`}
									>
										{plan.roi}
										<span className="text-xs text-brand-light-green font-medium ml-2">
											EST. ROI
										</span>
									</div>
								</div>

								{/* Features */}
								<div className="space-y-3 mb-6 sm:mb-8">
									{plan.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-start gap-3">
											<CircleCheck
												className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0 ${
													plan.highlighted ? 'text-lime-400' : 'text-cyan-400'
												}`}
											/>
											<span className="text-xs sm:text-sm text-white/80">
												{feature}
											</span>
										</div>
									))}
								</div>

								{/* CTA Button */}
								<button
									onClick={() => {
										router.push('/login');
									}}
									className={`w-full py-3 rounded-lg font-bold transition-all text-sm sm:text-base hover:scale-105 ${
										plan.highlighted
											? 'bg-brand-dark-green text-black hover:bg-brand-dark-green/80'
											: 'text-white border-2 border-brand-light-green hover:bg-brand-light-green/5'
									}`}
								>
									{plan.highlighted
										? 'Select Standard'
										: plan.name === 'Basic Plan'
											? 'Get Started'
											: 'Contact Sales'}
								</button>
							</div>
						</div>
					))}
				</div>
			</main>

			{/* Chart Section */}
			<div className="w-full px-4 sm:px-8 lg:px-36 py-8 sm:py-12 flex items-center justify-center">
				<div className="w-full max-w-6xl">
					<Image
						src="/chart.png"
						alt="Chart"
						width={1300}
						height={600}
						className="w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
}
