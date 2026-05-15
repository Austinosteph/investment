import { ArrowRight } from 'lucide-react';

export function ArticleSection() {
	return (
		<div className="bg-brand-primary/10 rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 max-w-full md:max-w-2xl lg:max-w-3xl">
			<div className="text-xs md:text-sm text-gray-600 font-medium tracking-wide mb-4 md:mb-6">
				INSTITUTIONAL ALLOCATION NARRATIVE
			</div>

			<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4">
				Sustained Growth Patterns in Tier-1 Digital Assets
			</h2>

			<p className="text-sm md:text-base text-brand-primary leading-relaxed mb-4 md:mb-6">
				The current market cycle demonstrates significant institutional
				resilience. Large-scale capital flows are pivoting toward verified
				value-anchors like BTC and the XRP Index. Our proprietary analysis
				suggests a structural shift in mid-market wealth management desks.
			</p>

			<a
				href="#"
				className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:scale-105 transition-all text-sm md:text-base"
			>
				Read Full Thesis
				<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
			</a>
		</div>
	);
}
