export function MarketSentimentCard() {
	return (
		<div className="bg-brand-primary/15 rounded-lg border border-brand-primary shadow-lg shadow-brand-primary p-4 md:p-6 lg:p-8 w-full">
			<div className="text-xs md:text-sm text-brand-primary font-medium tracking-wide mb-4">
				MARKET SENTIMENT
			</div>

			<div className="mb-6 md:mb-8">
				<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6">
					Bull Intensity
				</h3>

				{/* Progress bar */}
				<div className="w-full h-2 md:h-3 bg-gray-100 rounded-full overflow-hidden mb-4 md:mb-6">
					<div className="h-full bg-green-800" style={{ width: '88%' }}></div>
				</div>

				{/* Labels */}
				<div className="flex justify-between text-[10px] md:text-xs font-medium text-brand-primary mb-6 md:mb-8">
					<span>BEARISH</span>
					<span>NEUTRAL</span>
					<span>OVERBOUGHT</span>
				</div>
			</div>

			<div className="text-right">
				<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
					88%
				</div>
			</div>
		</div>
	);
}
