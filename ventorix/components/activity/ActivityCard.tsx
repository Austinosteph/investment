interface ActivityCardProps {
	activity: {
		id: number;
		title: string;
		description: string;
		amount: number;
		status: string;
		accent: boolean;
	};
}

const STATUS_COLORS: Record<string, string> = {
	SUCCESS:
		'bg-brand-dark-green/20 text-brand-dark-green border-brand-dark-green/30',
	SETTLED:
		'bg-brand-light-green/20 text-brand-light-green border-brand-light-green/30',
	PENDING:
		'bg-brand-light-blue/20 text-brand-light-blue border-brand-light-blue/30',
	COMPLETED:
		'bg-brand-dark-green/20 text-brand-dark-green border-brand-dark-green/30',
};

export default function ActivityCard({ activity }: ActivityCardProps) {
	const isPositive = activity.amount > 0;
	const amountColor = isPositive ? 'text-cyan-400' : 'text-white';
	const formattedAmount = isPositive
		? `+$${activity.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
		: `-$${Math.abs(activity.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

	return (
		<div
			className={`flex-1 ml-4 sm:ml-6 py-3 sm:py-4 px-4 sm:px-6 rounded-lg border transition-all ${
				activity.accent
					? 'bg-neutral-900 border-l-4 border-l-brand-dark-green border-t border-t-neutral-800 border-r border-r-neutral-800 border-b border-b-neutral-800'
					: 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
			}`}
		>
			{/* Mobile Layout - Stacked */}
			<div className="flex flex-col sm:hidden gap-3">
				{/* Title and Description */}
				<div>
					<h3 className="font-semibold text-white text-base sm:text-lg">
						{activity.title}
					</h3>
					<p className="text-xs sm:text-sm text-gray-400 mt-1">
						{activity.description}
					</p>
				</div>

				{/* Amount and Status - Horizontal */}
				<div className="flex items-center justify-between gap-3">
					<span className={`text-lg sm:text-xl font-bold ${amountColor}`}>
						{formattedAmount}
					</span>
					<span
						className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border flex-shrink-0 ${
							STATUS_COLORS[activity.status] || STATUS_COLORS.PENDING
						}`}
					>
						{activity.status}
					</span>
				</div>
			</div>

			{/* Tablet & Desktop Layout - Horizontal */}
			<div className="hidden sm:flex items-start justify-between gap-4">
				{/* Title and Description */}
				<div className="flex-1 min-w-0">
					<h3 className="font-semibold text-white text-lg">{activity.title}</h3>
					<p className="text-sm text-gray-400 mt-1">{activity.description}</p>
				</div>

				{/* Amount and Status - Vertical */}
				<div className="text-right flex flex-col items-end gap-2 shrink-0">
					<span className={`text-xl sm:text-2xl font-bold ${amountColor}`}>
						{formattedAmount}
					</span>
					<span
						className={`text-xs font-semibold px-3 py-1 rounded-full border ${
							STATUS_COLORS[activity.status] || STATUS_COLORS.PENDING
						}`}
					>
						{activity.status}
					</span>
				</div>
			</div>
		</div>
	);
}
