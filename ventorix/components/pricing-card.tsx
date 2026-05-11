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
		border: 'border-brand-light-green',
		bgLight: 'bg-brand-light-green/10',
		bgDark: 'bg-brand-dark-green',
		textDark: 'text-brand-text-green',
	},
	yellow: {
		text: 'text-brand-light-green',
		bg: 'bg-brand-dark-green',
		border: 'border-brand-light-green',
		bgLight: 'bg-brand-light-green/10',
		bgDark: 'bg-brand-dark-green',
		textDark: 'text-brand-text-green',
	},
	cyan: {
		text: 'text-brand-light-blue',
		bg: 'bg-brand-light-blue',
		border: 'border-brand-light-blue',
		bgLight: 'bg-brand-light-blue/10',
		bgDark: 'bg-brand-light-blue',
		textDark: 'text-black',
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
					? `${colors.border} bg-black/40 shadow-2xl scale-105`
					: 'border-gray-700 bg-gray-900/30'
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

			<h3 className="text-xl font-bold text-white sm:text-2xl">{tier}</h3>

			<div className="mt-4 sm:mt-6 flex items-baseline gap-1">
				<span className={`text-4xl font-bold sm:text-5xl ${colors.text}`}>
					{apy}
				</span>
				<span className="text-gray-400 text-sm sm:text-lg">EST APY</span>
			</div>

			<p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm">
				{description}
			</p>

			<button
				onClick={() => {
					router.push('/login');
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
						<span className="text-gray-200 text-xs sm:text-sm leading-relaxed">
							{feature}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
