'use client';

import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PricingCardProps {
	tier: string;
	apy: string;
	description: string;
	features: string[];
	buttonText: string;
	highlighted?: boolean;
	accentColor: 'green' | 'yellow' | 'cyan';
}

const brandColorMap = {
	green: {
		text: 'text-brand-light-green',
		bg: 'bg-brand-light-green',
		border: 'border-brand-primary',
		bgLight: 'bg-brand-primary/10',
		bgDark: 'bg-brand-primary',
		textDark: 'text-brand-secondary',
	},
	yellow: {
		text: 'text-brand-primary',
		bg: 'bg-brand-primary',
		border: 'border-brand-primary',
		bgLight: 'bg-brand-primary/10',
		bgDark: 'bg-brand-primary',
		textDark: 'text-brand-secondary',
	},
	cyan: {
		text: 'text-brand-accent',
		bg: 'bg-brand-accent',
		border: 'border-brand-accent',
		bgLight: 'bg-brand-accent/10',
		bgDark: 'bg-brand-accent',
		textDark: 'text-brand-secondary',
	},
};

export function PricingCard({
	tier,
	apy,
	description,
	features,
	buttonText,
	highlighted = false,
	accentColor,
}: PricingCardProps) {
	const colors = brandColorMap[accentColor];
	const router = useRouter();

	return (
		<div
			className={`relative flex flex-col rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
				highlighted
					? `${colors.border} bg-brand-primary/10 shadow-2xl scale-105`
					: 'border-brand-primary bg-brand-primary/10'
			}`}
		>
			{highlighted && (
				<div className="mb-4 inline-block">
					<span
						className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.bg} ${colors.textDark}`}
					>
						Recommended
					</span>
				</div>
			)}

			<h3 className="text-xl font-bold text-brand-primary sm:text-2xl">
				{tier}
			</h3>

			<div className="mt-4 sm:mt-6 flex items-baseline gap-1">
				<span className={`text-4xl font-bold sm:text-5xl ${colors.text}`}>
					{apy}
				</span>
				<span className="text-yellow-500 text-sm sm:text-lg">EST APY</span>
			</div>

			<p className="mt-2 sm:mt-3 text-brand-primary text-xs sm:text-sm">
				{description}
			</p>

			<button
				onClick={() => {
					router.push('/sign-in');
				}}
				className={`mt-6 sm:mt-8 w-full rounded-full border-2 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
					accentColor === 'yellow'
						? `${colors.bg} ${colors.textDark} hover:${colors.bg}/90`
						: `${colors.border} ${colors.text} hover:${colors.bgLight}`
				}`}
			>
				{buttonText}
			</button>

			<div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 border-t border-gray-700 pt-6 sm:pt-8">
				{features.map((feature, index) => (
					<div key={index} className="flex items-start gap-3">
						<Check className={`mt-0.5 shrink-0 ${colors.text}`} size={18} />
						<span className="text-brand-primary text-xs sm:text-sm leading-relaxed">
							{feature}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
