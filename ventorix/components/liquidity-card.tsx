import { CheckCircle2 } from 'lucide-react';

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
					Deep-maker depth is increased
				</p>
			</div>

			<div className="flex items-center gap-2 md:gap-3">
				<CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary shrink-0" />
				<span className="text-xs md:text-sm text-brand-secondary">
					Institutional flows currently stable
				</span>
			</div>
		</div>
	);
}
