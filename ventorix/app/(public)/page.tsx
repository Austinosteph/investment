'use client';
import { FeatureCards } from '@/components/feature-cards';
import InvestmentPlans from '@/components/investment-plans';
import Footer from '@/components/footer';
import Link from 'next/link';

const chartData = [
	{ name: 'Jan', value: 45 },
	{ name: 'Feb', value: 52 },
	{ name: 'Mar', value: 48 },
	{ name: 'Apr', value: 65 },
	{ name: 'May', value: 72 },
];

export default function Home() {
	return (
		<main className="bg-background items-center justify-center ">
			<div className="w-full px-4 sm:px-8 lg:px-36 py-8 sm:py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 items-center">
					{/* Left Section */}
					<div className="flex flex-col gap-6 lg:gap-8">
						{/* Badge */}
						<div className="flex items-center gap-2 w-fit border border-brand-dark-green px-3 py-1 rounded-full">
							<div className="w-2 h-2 rounded-full bg-brand-dark-green"></div>
							<span className="text-xs font-medium text-brand-dark-green">
								SEC Regulated Platform
							</span>
						</div>
						{/* Heading */}
						<div className="space-y-4">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
								Grow Your Money with{' '}
								<span className="block text-brand-dark-green">
									Secure Investments
								</span>
							</h1>
						</div>
						{/* Description */}
						<p className="text-sm sm:text-base leading-relaxed max-w-md text-brand-light-green">
							Access institutional-grade investment portfolios with Nexus
							Capital. Transparent, high-velocity growth powered by advanced
							algorithmic trading.
						</p>
						{/* Buttons */}
						<div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 pt-4">
							<Link
								href="/signup"
								className="w-full text-center sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:scale-105 bg-brand-dark-green text-brand-text-green"
							>
								Start Investing
							</Link>
							<Link
								href="/login"
								className="w-full text-center sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 text-brand-light-blue border-2 border-brand-light-blue"
							>
								Login
							</Link>
						</div>
					</div>
					{/* Right Section - Chart */}
					<div className="flex items-center justify-center lg:justify-end">
						<div
							className="w-full max-w-md p-4 sm:p-6 lg:p-8 rounded-2xl"
							style={{
								backgroundColor: 'rgba(67, 102, 41, 0.3)',
								borderColor: '#436629',
								borderWidth: '1px',
							}}
						>
							<div className="mb-6 sm:mb-8">
								<p className="text-xs font-medium tracking-widest uppercase text-brand-light-green mb-2">
									Global Portfolio Index
								</p>
								<div className="flex flex-row justify-between gap-2 sm:gap-3">
									<h2 className="text-2xl sm:text-3xl font-bold text-white">
										$428,901.00
									</h2>
									<span className="flex gap-1 px-3 py-1 rounded-lg text-brand-dark-green border border-brand-light-green bg-brand-dark-green/15">
										<span className="font-semibold text-xs sm:text-sm">
											+12.4%
										</span>
									</span>
								</div>
							</div>
							{/* Chart */}
							<div className="flex items-end justify-center gap-2 sm:gap-3 h-48 sm:h-64">
								{chartData.map((item, idx) => {
									let barColor = '#4a5568';
									if (item.name === 'Apr') barColor = '#d4ff00';
									if (item.name === 'May') barColor = '#00d9ff';
									return (
										<div
											key={idx}
											className="flex flex-col items-center gap-2 flex-1"
										>
											<div
												className="w-full rounded-t-lg transition-all hover:opacity-80"
												style={{
													height: `${item.value * 2}px`,
													backgroundColor: barColor,
												}}
											></div>
											<span className="text-xs font-medium text-gray-400">
												{item.name}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<FeatureCards />
			<InvestmentPlans />
			<Footer />
		</main>
	);
}
