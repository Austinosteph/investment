import Link from 'next/link';

export function ArticleSection() {
	return (
		<div className="bg-brand-primary/10 rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 max-w-full md:max-w-2xl lg:max-w-3xl">
			<div className="text-xs md:text-sm text-gray-600 font-medium tracking-wide mb-4 md:mb-6">
				STRATEGIC ALLOCATION INSIGHTS
			</div>

			<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-6">
				Sustained Growth Patterns Across Tier-1 Digital Assets
			</h2>

			<p className="text-sm md:text-base text-brand-primary leading-relaxed mb-8 md:mb-12 flex flex-col">
				<span className="mb-3">
					Institutional capital continues to rotate toward high-liquidity
					digital assets as market confidence strengthens across major sectors.
					Current allocation trends indicate increased exposure to established
					value anchors, supported by stable liquidity conditions and long-term
					positioning strategies.
				</span>
				<span>
					Our internal market intelligence framework identifies sustained
					participation from institutional trading desks, with capital flows
					favoring assets demonstrating resilience, network strength, and
					consistent market depth.
				</span>
			</p>

			<Link
				href="/signup"
				className="w-full text-center sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:scale-105 bg-brand-primary text-brand-secondary"
			>
				Start Investing
			</Link>
		</div>
	);
}
