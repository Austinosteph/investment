import { Leadership } from '@/components/leadership';
import { Button } from '@/components/ui/button';
import {
	Clock,
	Users,
	ShieldCheck,
	Scale,
	Lock,
	Building2,
} from 'lucide-react';
import Image from 'next/image';

const features = [
	{
		icon: ShieldCheck,
		title: 'SEC-Registered',
		description: 'SEC Investment Adviser (401k)',
	},
	{
		icon: Scale,
		title: 'Full Compliance',
		description: 'FINRA standards on FINRA-regulated entity',
	},
	{
		icon: Lock,
		title: 'Financial Safety',
		description: 'Annual security reviews by third parties',
	},
	{
		icon: Building2,
		title: 'Institutional Grade',
		description: 'Custody through institutional-tier providers',
	},
];

const AboutUs = () => {
	return (
		<div>
			<div className="min-h-screen relative w-full py-8 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 bg-background">
				{/* hero */}
				<section className=" mx-auto mb-2 md:mb-16 lg:mb-24">
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
						{/* Left content */}
						<div className="flex-1 space-y-4 md:space-y-6">
							<p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-brand-primary">
								Digital Ventures Resources
							</p>

							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
								Institutional-Grade Growth for the Digital Frontier
							</h1>

							<p className="text-base md:text-lg lg:text-xl text-brand-primary leading-relaxed max-w-xl">
								Bridge the gap between traditional asset management and the
								high-velocity digital economy. Nova Capital provides the
								security of institutional infrastructure with the agility of
								cryptoactive strategy.
							</p>

							<div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
								<Button
									size="lg"
									className="bg-brand-primary hover:scale-105 text-brand-secondary transition-transform px-6 py-4 md:px-8 md:py-7 text-base md:text-lg"
								>
									OPEN ACCOUNT
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-brand-accent text-brand-accent font-semibold border-2 hover:scale-105 transition-transform px-6 py-4 md:px-8 md:py-7 text-base md:text-lg"
								>
									EXECUTIVE SUMMARY
								</Button>
							</div>
						</div>

						{/* Right image */}
						<div className="flex-1 relative h-56 md:h-72 lg:h-96 xl:h-125 w-full rounded-lg overflow-hidden">
							<Image
								src="/invest.jpg"
								alt="Digital circuit board representing technology infrastructure"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</section>
				{/* Mission statement */}
				<section className=" mx-auto mb-10 md:mb-16 lg:mb-20">
					<div className="space-y-4 md:space-y-10">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
							Our Mission & History
						</h2>

						<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
							<div className="space-y-4">
								<p className="text-base md:text-lg text-brand-primary leading-relaxed">
									Established 2018, Nova Capital emerged from the belief that
									the future of asset management lies at the intersection of
									institutional rigor and digital innovation. We pioneered
									blockchain-native strategies for small accounts.
								</p>
								<p className="text-base md:text-lg text-brand-accent leading-relaxed">
									Our core philosophy is &quot;Security through
									Transparency,&quot; ensuring every transaction and allocation
									is auditable and clear. We combine algorithmic oversight with
									human judgment to bridge blockchain and traditional finance.
								</p>
							</div>

							{/* Timeline highlights */}
							<div className="space-y-6 md:space-y-8">
								<div className="space-y-2">
									<div className="flex items-center gap-3 md:gap-4">
										<div className="rounded-md bg-brand-primary p-2 md:p-3 shrink-0 mt-2">
											<Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary shrink-0" />
										</div>
										<div>
											<p className="font-semibold text-brand-accent text-sm md:text-base">
												Est. 2018
											</p>
											<p className="text-brand-primary text-xs md:text-sm">
												Born from institutional networks
											</p>
										</div>
									</div>
								</div>

								<div className="space-y-2">
									<div className="flex items-center gap-3 md:gap-4">
										<div className="rounded-md bg-brand-primary p-2 md:p-3 shrink-0 mt-2">
											<Users className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary shrink-0" />
										</div>
										<div>
											<p className="font-semibold text-brand-accent text-sm md:text-base">
												140+ Clients
											</p>
											<p className="text-brand-primary text-xs md:text-sm">
												Across 50+ jurisdictions
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* regulated Excellence */}
				<section className=" mx-auto space-y-8 md:space-y-12">
					<div className="text-center space-y-3 md:space-y-4">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
							Regulated Excellence
						</h2>
						<p className="text-base md:text-lg text-brand-primary max-w-2xl mx-auto">
							Operating at the intersection of innovation and compliance, we
							maintain rigorous regulatory oversight across all operations.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<div
									key={index}
									className="flex flex-col items-center text-center space-y-2 p-4 md:p-6 rounded-lg bg-brand-primary/15 shadow-sm shadow-brand-primary border border-brand-primary hover:scale-105 transition-all"
								>
									<div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
										<Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
									</div>
									<h3 className="font-semibold text-foreground text-base md:text-lg">
										{feature.title}
									</h3>
									<p className="text-xs md:text-sm text-brand-accent">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</section>

				{/* global network */}
				<section className="mx-auto mt-12 md:mt-16 bg-brand-primary p-4 md:p-6">
					<div className="space-y-8 md:space-y-12">
						<div>
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
								Global Liquidity Network
							</h2>
							<p className="text-base md:text-lg text-brand-secondary">
								Access to 24/7 global markets, powered by proprietary matching
								engines.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
							{/* Total Assets */}
							<div className="bg-brand-secondary/75 rounded-lg border border-brand-secondary shadow-sm shadow-brand-secondary p-6 md:p-8 space-y-2 transition-all hover:scale-105">
								<p className="text-xs uppercase tracking-wide text-foreground font-semibold">
									Total Assets Under Management
								</p>
								<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary">
									$4.2B+
								</p>
								<p className="text-xs md:text-sm text-brand-accent pt-2">
									AUM across global markets
								</p>
							</div>

							{/* Client Count */}
							<div className="bg-brand-secondary/75 rounded-lg border border-brand-secondary shadow-sm shadow-brand-secondary p-6 md:p-8 space-y-2 transition-all hover:scale-105">
								<p className="text-xs uppercase tracking-wide text-foreground font-semibold">
									Institutional Clients
								</p>
								<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary">
									140+
								</p>
								<p className="text-xs md:text-sm text-brand-accent pt-2">
									Active institutional partners
								</p>
							</div>

							{/* Speed */}
							<div className="bg-brand-secondary/75 rounded-lg border border-brand-secondary shadow-sm shadow-brand-secondary p-6 md:p-8 space-y-2 transition-all hover:scale-105">
								<p className="text-xs uppercase tracking-wide text-foreground font-semibold">
									Execution Speed
								</p>
								<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary">
									12ms
								</p>
								<p className="text-xs md:text-sm text-brand-accent pt-2">
									Average trade latency
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* leadership section */}
				<Leadership />
			</div>
		</div>
	);
};

export default AboutUs;
