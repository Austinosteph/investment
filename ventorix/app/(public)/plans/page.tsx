import { PricingCard } from '@/components/pricing-card';
import { FeatureComparison } from '@/components/feature-comparison';
import { CustodyArchitecture } from '@/components/custody-architecture';

const tiers = [
	{
		tier: 'Basic',
		apy: '8.5%',
		description:
			'Precision-engineered capital allocation strategies tailored for institutional funders and retail velocity.',
		features: [
			'90-day Lock-up Period',
			'Standard Asset Tokenization',
			'DAO Participation Rights',
			'API Integration - Webhooks',
		],
		buttonText: 'Start Journey',
		accentColor: 'green' as const,
	},
	{
		tier: 'Standard',
		apy: '14.2%',
		description:
			'Premium investment tier engineered for sophisticated portfolio managers seeking enhanced yields.',
		features: [
			'60-Day Lock-up Period',
			'Advanced Yield Harvesting',
			'DAO Participation Rights',
			'API Integration - REST',
		],
		buttonText: 'Start Journey',
		highlighted: true,
		accentColor: 'yellow' as const,
	},
	{
		tier: 'Premium',
		apy: '21.8%',
		description:
			'Institutional-grade capital strategies with premium features for sophisticated investors.',
		features: [
			'No Lock-up Unused Tier',
			'Advanced Yield Harvesting',
			'Tier-four 90 Streaming',
			'AI Governance Analytics',
		],
		buttonText: 'Contact Lead',
		accentColor: 'cyan' as const,
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20">
				{/* Header Section */}
				<div className="text-center">
					<h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
						<span className="text-balance">Investment Tiers</span>
					</h1>

					<p className="mx-auto mt-4 max-w-3xl text-balance text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
						Precision-engineered capital allocation strategies tailored for
						institutional funders and retail velocity. Choose your entry point
						risk basis.
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="mt-12 grid gap-6 sm:gap-8 md:mt-16 lg:grid-cols-3 xl:gap-10">
					{tiers.map((tier, index) => (
						<PricingCard
							key={index}
							tier={tier.tier}
							apy={tier.apy}
							description={tier.description}
							features={tier.features}
							buttonText={tier.buttonText}
							highlighted={tier.highlighted}
							accentColor={tier.accentColor}
						/>
					))}
				</div>

				{/* Feature Comparison */}
				<div className="mt-16 sm:mt-20 md:mt-24">
					<h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
						<span className="text-balance">Feature Comparison</span>
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-center text-gray-400 text-sm sm:text-base">
						Compare our comprehensive feature set across all investment tiers.
					</p>
					<FeatureComparison />
				</div>

				{/* Custody Architecture */}
				<CustodyArchitecture />
			</div>
		</main>
	);
}
