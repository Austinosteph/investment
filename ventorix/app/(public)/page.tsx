'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import BTCChart from '@/components/charts/btcchart';

export default function Home() {
	return (
		<main className="bg-background items-center justify-center ">
			<div className="w-full px-4 sm:px-8 lg:px-24 py-8 sm:py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
					{/* Left Section */}
					<div className="flex flex-col gap-6 lg:gap-8">
						{/* Badge */}
						<div className="flex items-center gap-2 w-fit border bg-brand-secondary border-brand-primary px-3 py-1 rounded-lg">
							<span className="text-sm font-semibold text-brand-primary">
								Digital Wealth Velocity
							</span>
						</div>
						{/* Heading */}
						<div className="space-y-4">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
								Grow Your Money with{' '}
								<span className="block text-brand-accent">
									Secure Investments
								</span>
							</h1>
						</div>
						{/* Description */}
						<p className="text-base sm:text-lg leading-relaxed max-w-md text-brand-primary">
							Access institutional-grade investment portfolios with Nexus
							Capital. Transparent, high-velocity growth powered by advanced
							algorithmic trading.
						</p>
						{/* Buttons */}
						<div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 pt-4">
							<Link
								href="/signup"
								className="w-full text-center sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:scale-105 bg-brand-primary text-brand-secondary"
							>
								Start Investing
							</Link>
							<Link
								href="/login"
								className="w-full text-center sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 text-brand-accent border-2	 border-brand-accent"
							>
								Login
							</Link>
						</div>
					</div>
					{/* Right Section - Chart */}

					<div className="w-full h-full rounded-2xl">
						{/* Chart */}
						<BTCChart />
					</div>
				</div>
			</div>

			<section className="px-4 py-12 sm:px-6 md:px-12 lg:px-16 lg:py-16">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
						Engineered Alpha Strategies
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-brand-primary">
						Our proprietary models leverage institutional datasets to identify
						market inefficiencies before they&apos;re known to the masses.
					</p>
				</div>
			</section>

			{/* Bento Grid Section 1 */}
			<section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-12 sm:pb-16">
				<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
					{/* Momentum Velocity Card */}
					<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-64 itemc">
						<div>
							<div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full mb-4 sm:mb-6 flex items-center justify-center">
								<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
							</div>
							<h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
								Momentum Velocity
							</h3>
							<p className="text-xs sm:text-sm text-brand-primary">
								High-frequency micro-signals capturing market dynamics in
								real-time aggregated liquidity.
							</p>
						</div>
						<button className="text-brand-accent font-medium flex items-center gap-1 transition-all hover:scale-105 mt-4 sm:mt-6 text-sm sm:text-base">
							Explore Returns <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
						</button>
					</div>

					{/* Deep Core Card */}
					<div className="sm:col-span-2 lg:col-span-2 bg-brand-primary rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-64 text-white">
						<div>
							<div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full mb-4 sm:mb-6 flex items-center justify-center">
								<Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
							</div>
							<h3 className="text-xl sm:text-2xl font-bold mb-3">Deep Core</h3>
							<p className="text-xs sm:text-sm text-brand-secondary">
								Deep-seated fundamental tailwinds for steady, compounding
								returns with minimal volatility. Powered by our in-house
								research initiative.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 sm:mt-8">
							<span className="text-3xl sm:text-4xl font-bold">6.4%</span>
							<button className="px-4 py-2 bg-accent text-primary rounded font-medium transition-all hover:scale-105 w-full sm:w-auto">
								View Analysis
							</button>
						</div>
					</div>

					{/* Crypto Yield Card */}
					<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-64">
						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
								Crypto Yield
							</h3>
							<p className="text-xs sm:text-sm text-brand-primary">
								Algorithmic strategies and dynamic exposure across quantitative
								finance.
							</p>
						</div>
						<button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-brand-accent text-brand-accent transition-all hover:scale-105 rounded font-medium w-full mt-4 sm:mt-6 text-sm sm:text-base">
							Unlock Data
						</button>
					</div>
				</div>
			</section>

			{/* Pioneering Digital Wealth Section */}
			<section className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 bg-brand-primary/10">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 text-balance">
								Pioneering Digital Wealth
							</h2>
							<p className="text-sm sm:text-base md:text-lg text-brand-primary mb-6 sm:mb-8">
								Versed Counsel assures in the forefront of established-group
								digital assets. Leverage both our institutional-grade technology
								and proprietary research to access emerging opportunities that
								institutional allocators have been searching for.
							</p>
							<Link
								className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-brand-accent text-brand-accent rounded font-bold hover:scale-105 transition text-sm sm:text-base"
								href="/about"
							>
								Read More
							</Link>
						</div>
						<div className="rounded-lg h-48 sm:h-64 lg:h-96">
							<Image
								src="/invest.jpg"
								alt="Invest"
								width={700}
								height={900}
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Institutional Trust Section */}
			<section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
						Institutional Trust
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{/* Testimonial 1 */}
						<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8">
							<p className="text-2xl sm:text-3xl font-bold text-brand-accent mb-3 sm:mb-4">
								99
							</p>
							<p className="text-xs sm:text-sm text-muted-foreground">
								&quot;Focus on institutional-level set approach. With our
								advanced management algorithms and execution.&quot;
							</p>
							<div className="flex items-center gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
								<Image
									src="/invest.jpg"
									alt="Mariana Chen"
									width={40}
									height={40}
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-brand-accent text-sm">
										Mariana Chen
									</p>
									<p className="text-xs text-muted-foreground">
										Portfolio Manager
									</p>
								</div>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-brand-primary rounded-lg p-4 sm:p-6 lg:p-8 text-white">
							<p className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">99</p>
							<p className="text-xs sm:text-sm text-gray-300">
								&quot;The speed of deployment and the quality of our algorithms
								strictly optimizes potential returns.&quot;
							</p>
							<div className="flex items-center gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
								<Image
									src="/invest.jpg"
									alt="Alex Jordan"
									width={40}
									height={40}
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-sm">Alex Jordan</p>
									<p className="text-xs text-gray-400">
										Chief Investment Officer
									</p>
								</div>
							</div>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8">
							<p className="text-2xl sm:text-3xl font-bold text-brand-accent mb-3 sm:mb-4">
								99
							</p>
							<p className="text-xs sm:text-sm text-brand-primary">
								&quot;A seamless bridge to prime liquidity. Efficient and
								superior to every digital platform execution.&quot;
							</p>
							<div className="flex items-center gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
								<Image
									src="/invest.jpg"
									alt="Sofia Rodriguez"
									width={40}
									height={40}
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-brand-accent text-sm">
										Sofia Rodriguez
									</p>
									<p className="text-xs text-muted-foreground">
										Wealth Investment Services
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Frictionless Bridge Section */}
			<section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
						{/* Left Section - Heading */}
						<div className="flex-1">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
								A Frictionless Bridge to Prime Liquidity
							</h2>
							<p className="text-sm sm:text-base md:text-lg text-brand-primary max-w-2xl">
								We are orchestrated to carry the entire financial models in
								untrue financial services, bringing together market data,
								algorithms, analytics, and opportunities as a unified
								integrated.
							</p>
						</div>

						{/* Right Section - Stats */}
						<div className="flex gap-6 sm:gap-8 lg:flex-row">
							<div className="flex flex-col">
								<p className="text-lg sm:text-xl md:text-3xl font-bold text-foreground">
									3min
								</p>
								<p className="text-xs sm:text-sm text-brand-primary mt-2">
									Average deployment time
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
									0%
								</p>
								<p className="text-xs sm:text-sm text-brand-primary mt-2">
									Minimized transaction costs
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Grid Section */}
			<section className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{/* Feature 1 */}
						<div className="bg-brand-primary rounded-lg p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center text-center transition-all hover:scale-105">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center mb-3 sm:mb-4 border-2 border-brand-secondary p-2">
								<span className="font-bold text-primary text-base sm:text-lg">
									1
								</span>
							</div>
							<h3 className="font-semibold mb-2 p-2 rounded-md text-brand-secondary text-sm sm:text-base">
								Direct Link
							</h3>
							<p className="text-xs sm:text-sm text-gray-300">
								Connect your primary capital account with seamless real-time
								access.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center transition-all hover:scale-105">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-full flex items-center justify-center mb-3 sm:mb-4 border-2 border-brand-accent p-2">
								<span className="font-bold text-brand-accent text-base sm:text-lg">
									2
								</span>
							</div>
							<h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
								Pre-Filtering
							</h3>
							<p className="text-xs sm:text-sm text-muted-foreground">
								Our algorithm determines your optimal fit strategy for
								successful liquidity.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="bg-brand-primary rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center transition-all hover:scale-105">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-full flex items-center justify-center mb-3 sm:mb-4 border-2 border-brand-secondary p-2 ">
								<span className="font-bold text-background text-base sm:text-lg">
									3
								</span>
							</div>
							<h3 className="font-semibold text-brand-secondary mb-2 text-sm sm:text-base">
								Data Deployment
							</h3>
							<p className="text-xs sm:text-sm text-brand-secondary">
								Select your preferred data strategies in minutes, executable
								24/7.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="bg-brand-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center transition-all hover:scale-105">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center mb-3 sm:mb-4 border-2 border-brand-accent p-2 ">
								<span className="font-bold text-brand-accent text-base sm:text-lg">
									4
								</span>
							</div>
							<h3 className="font-semibold mb-2 text-sm sm:text-base">
								Real-Time Growth
							</h3>
							<p className="text-xs sm:text-sm text-brand-primary">
								Monitor every transaction and performance metrics in our
								real-time dashboard.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
