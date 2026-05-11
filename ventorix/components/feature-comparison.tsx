'use client';

import { Check, X } from 'lucide-react';

interface Feature {
	name: string;
	basic: string | boolean;
	standard: string | boolean;
	premium: string | boolean;
}

const features: Feature[] = [
	{
		name: 'Liquidity Profile',
		basic: 'T+3 Settlement',
		standard: 'T+2 Settlement',
		premium: 'Instant Liquidity',
	},
	{
		name: 'API Integration',
		basic: 'Read-Only',
		standard: 'REST Access',
		premium: 'Full Webhooks/Rest',
	},
	{
		name: 'Governance Rights',
		basic: 'No voting rights',
		standard: 'Proposal Voting',
		premium: 'Unrestricted Voting',
	},
	{
		name: 'Custody Layer',
		basic: 'Shared Vault',
		standard: 'Segregated Vault',
		premium: 'MPC Cold Storage',
	},
	{
		name: 'Management Fee',
		basic: '1.5% p.a.',
		standard: '0.8% p.a.',
		premium: '0.45% p.a.',
	},
];

const tierColors = {
	basic: 'text-brand-light-green',
	standard: 'text-brand-dark-green',
	premium: 'text-brand-light-blue',
};

export function FeatureComparison() {
	return (
		<div className="mt-16 sm:mt-20 overflow-x-auto">
			<div className="min-w-150">
				<table className="w-full">
					<thead>
						<tr className="border-b border-gray-700">
							<th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold uppercase tracking-widest text-brand-light-green">
								Parameters
							</th>
							<th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs font-bold uppercase tracking-widest text-brand-light-green">
								Basic
							</th>
							<th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs font-bold uppercase tracking-widest text-brand-light-green-green">
								Standard
							</th>
							<th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs font-bold uppercase tracking-widest text-brand-dark-green">
								Premium
							</th>
						</tr>
					</thead>
					<tbody>
						{features.map((feature, index) => (
							<tr
								key={index}
								className="border-b border-gray-700/50 hover:bg-gray-900/30 transition-colors"
							>
								<td className="px-4 sm:px-6 py-3 sm:py-4 text-brand-light-green text-sm sm:text-base font-medium">
									{feature.name}
								</td>
								<td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
									{typeof feature.basic === 'boolean' ? (
										feature.basic ? (
											<Check
												className={`inline ${tierColors.basic}`}
												size={18}
											/>
										) : (
											<X className="inline text-gray-600" size={18} />
										)
									) : (
										<span className="text-gray-300 text-xs sm:text-sm">
											{feature.basic}
										</span>
									)}
								</td>
								<td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
									{typeof feature.standard === 'boolean' ? (
										feature.standard ? (
											<Check
												className={`inline ${tierColors.standard}`}
												size={18}
											/>
										) : (
											<X className="inline text-gray-600" size={18} />
										)
									) : (
										<span className="text-gray-300 text-xs sm:text-sm">
											{feature.standard}
										</span>
									)}
								</td>
								<td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
									{typeof feature.premium === 'boolean' ? (
										feature.premium ? (
											<Check
												className={`inline ${tierColors.premium}`}
												size={18}
											/>
										) : (
											<X className="inline text-gray-600" size={18} />
										)
									) : (
										<span className="text-gray-300 text-xs sm:text-sm">
											{feature.premium}
										</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
