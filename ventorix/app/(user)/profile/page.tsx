'use client';

import { DashboardNav } from '@/components/navbars/DashboardNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit2, TrendingUp, Heart } from 'lucide-react';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function ProfileDashboard() {
	return (
		<>
			{' '}
			<DashboardNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background text-brand-primary overflow-auto">
				<div className="max-w-7xl mx-auto mb-12 sm:mb-16 space-y-6">
					{/* Header Section with Profile and Support */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Profile Card */}
						<Card className="md:col-span-2 bg-brand-primary border-border p-6">
							<div className=" gap-4">
								<div className="flex flex-row gap-4">
									<Image
										src="/invest.jpg"
										alt="Alex Rivers"
										width={80}
										height={80}
										className="w-20 h-20 rounded-lg object-cover"
									/>
									<div className="flex items-center flex-col md:flex-row gap-2 mb-2">
										<h1 className="text-2xl font-bold text-white">
											Alex Rivers
										</h1>
										<Badge className="text-brand-secondary text-xs font-semibold">
											AUTHORIZED
										</Badge>
									</div>
								</div>
								<div className="mt-4">
									<p className="text-sm text-brand-secondary mb-3">
										Wealth ID: NC-4820-0016 • Verified Member since 2019
									</p>
									<div className="flex gap-3">
										<button className="flex items-center gap-2 text-brand-secondary hover:text-accent-foreground transition-colors">
											<Edit2 className="w-4 h-4" />
											<span className="text-sm font-medium ">Edit Profile</span>
										</button>
									</div>
								</div>
							</div>
						</Card>

						{/* Risk Profile */}
						<Card className="bg-brand-primary/15 border-border p-6">
							<p className="text-xs font-semibold text-muted-foreground tracking-wider mb-3">
								RISK PROFILE
							</p>
							<div className="flex items-center justify-between">
								<h3 className="text-2xl font-bold text-foreground">Moderate</h3>
								<Heart className="w-10 h-10 text-accent" />
							</div>
						</Card>
					</div>

					{/* Portfolio Metrics Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Total Portfolio Value */}
						<Card className="bg-brand-primary/15 border-border p-6">
							<p className="text-xs font-semibold text-muted-foreground tracking-wider mb-3">
								TOTAL PORTFOLIO VALUE
							</p>
							<h2 className="text-4xl font-bold text-foreground mb-4">
								$2,840,192.00
							</h2>
							<div className="flex items-end gap-4">
								<div>
									<p className="text-sm text-muted-foreground mb-1">
										YTD Change
									</p>
									<p className="text-2xl font-bold text-accent">+12.4%</p>
								</div>
								<div className="flex gap-2 ml-auto">
									<button className="px-2 py-1 rounded text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
										1M
									</button>
									<button className="px-2 py-1 rounded text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
										6M
									</button>
									<button className="px-2 py-1 rounded text-sm font-medium text-accent bg-accent bg-opacity-10">
										1Y
									</button>
									<button className="px-2 py-1 rounded text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
										ALL
									</button>
								</div>
							</div>

							{/* Placeholder for Chart */}
							<div className="mt-6 h-48 bg-linear-to-b from-secondary to-background rounded-lg flex items-center justify-center relative overflow-hidden">
								<svg
									className="w-full h-full opacity-40"
									viewBox="0 0 400 200"
									preserveAspectRatio="none"
								>
									<path
										d="M0,150 Q50,120 100,130 T200,80 T300,100 T400,50"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-muted-foreground"
									/>
								</svg>
								<div className="absolute bottom-3 left-3 text-xs text-muted-foreground">
									OCT 2023
								</div>
								<div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
									PRESENT
								</div>
							</div>
						</Card>

						{/* Right Column */}
						<div className="space-y-6">
							{/* Active Assets */}
							<Card className="bg-brand-primary border-border p-6">
								<p className="text-xs font-semibold text-brand-secondary tracking-wider mb-3">
									ACTIVE ASSETS
								</p>
								<div className="flex items-end justify-between">
									<div>
										<p className="text-4xl font-bold text-white">14</p>
										<p className="text-sm text-brand-secondary mt-1">
											Positions
										</p>
									</div>
									<div className="flex items-center gap-2 p-3 rounded-lg">
										<div className="w-8 h-8 rounded border-2 border-brand-secondary flex items-center justify-center">
											<span className="text-xs font-bold text-brand-secondary">
												€
											</span>
										</div>
									</div>
								</div>
								<p className="text-xs text-brand-secondary/70 mt-4">
									Diversified Institutional Portfolios
								</p>
							</Card>

							{/* Growth Forecast */}
							<Card className="bg-brand-primary/15 text-accent-foreground p-8">
								<p className="text-xs font-semibold tracking-wider opacity-80 mb-2">
									GROWTH FORECAST
								</p>
								<div className="flex items-end justify-between">
									<div>
										<p className="text-5xl font-bold">+8.2%</p>
										<p className="text-sm opacity-80 mt-2">Est. 2024</p>
									</div>
									<TrendingUp className="w-12 h-12 text-brand-accent" />
								</div>
							</Card>
						</div>
					</div>

					{/* Security & Preferences */}
					<div className="mt-8 mb-4">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							Security & Preferences
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Personal Information */}
							<Card className="bg-brand-primary border-border p-4 hover:shadow-md transition-shadow cursor-pointer">
								<div className="flex items-start justify-between">
									<div>
										<p className="text-sm font-semibold text-brand-secondary mb-1">
											🔐
										</p>
										<h4 className="font-semibold text-brand-secondary mb-1">
											Personal Information
										</h4>
										<p className="text-xs text-brand-secondary/80">
											Manage names, emails, and phone numbers
										</p>
									</div>
									<span className="text-brand-secondary">›</span>
								</div>
							</Card>

							{/* Investment Preferences */}
							<Card className="bg-brand-primary/15 border-border p-4 hover:shadow-md transition-shadow cursor-pointer">
								<div className="flex items-start justify-between">
									<div>
										<p className="text-sm font-semibold text-muted-foreground mb-1">
											💰
										</p>
										<h4 className="font-semibold text-foreground mb-1">
											Investment Preferences
										</h4>
										<p className="text-xs text-muted-foreground">
											Set liquidity goals and asset class focus
										</p>
									</div>
									<span className="text-muted-foreground">›</span>
								</div>
							</Card>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
