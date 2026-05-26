export function LiquidityCard() {
	return (
		<div className="bg-brand-primary rounded-lg border border-brand-primary shadow-lg shadow-brand-primary p-4 md:p-6 lg:p-8 w-full md:w-1/3">
			<div className="text-xs md:text-sm text-brand-secondary font-medium tracking-wide mb-4 md:mb-6">
				LIQUIDITY INDEX
			</div>

			<div className="mb-6 md:mb-8">
				<div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
					94.8
				</div>
				<p className="text-xs md:text-sm text-brand-secondary">
					Market depth across major exchanges remains elevated, indicating
					strong buy-side absorption and stable order book conditions.
				</p>
			</div>
		</div>
	);
}
