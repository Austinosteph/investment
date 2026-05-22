'use client';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

const chartData = [
	{ index: 1, value: 65 },
	{ index: 2, value: 59 },
	{ index: 3, value: 80 },
	{ index: 4, value: 81 },
	{ index: 5, value: 56 },
	{ index: 6, value: 89 },
	{ index: 7, value: 40 },
];

export function TransactionsHeader() {
	return (
		<div className="rounded-2xl bg-brand-primary p-4 sm:p-6 md:p-8 text-brand-secondary">
			<div className="mb-4 sm:mb-6">
				<p className="mb-2 text-xs sm:text-sm font-semibold opacity-90">
					TOTAL PENDING VOLUME
				</p>
				<h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
					$2,842,950.42
				</h1>
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-xs sm:text-sm">
					<div>
						<p className="opacity-75">14 Pending BTC</p>
					</div>
					<div>
						<p className="opacity-75">1,240,000 USDT</p>
					</div>
				</div>
			</div>

			<div className="h-16 sm:h-20 md:h-24 w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.2)" />
						<XAxis dataKey="index" hide />
						<YAxis hide />
						<Bar
							dataKey="value"
							fill="rgb(255,255,0.1)"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
