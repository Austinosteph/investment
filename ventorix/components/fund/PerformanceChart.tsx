'use client';

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ date: 'JAN 2024', actual: 100, projected: 100 },
	{ date: 'FEB', actual: 108, projected: 106 },
	{ date: 'MAR', actual: 115, projected: 112 },
	{ date: 'APR', actual: 128, projected: 118 },
	{ date: 'MAY', actual: 142, projected: 124 },
	{ date: 'JUN', actual: 157, projected: 130 },
	{ date: 'JUL', actual: 168, projected: 136 },
	{ date: 'AUG', actual: 172, projected: 142 },
	{ date: 'SEP', actual: 180, projected: 148 },
	{ date: 'OCT', actual: 189, projected: 154 },
];

export function PerformanceChart() {
	return (
		<div className="bg-brand-light-green/5 rounded-lg p-8 border border-brand-light-green">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
				<div>
					<h2 className="text-2xl font-bold text-white mb-1">
						Performance Trajectory
					</h2>
					<p className="text-gray-400 text-sm">
						Daily growth tracking relative to institutional benchmarks
					</p>
				</div>
				<div className="flex gap-2">
					<button className="px-3 py-1 rounded-md bg-brand-dark-green text-brand-text-green text-sm font-semibold">
						6M
					</button>
					<button className="px-3 py-1 rounded-md text-gray-300 text-sm font-semibold hover:bg-gray-800">
						3M
					</button>
					<button className="px-3 py-1 rounded-md text-gray-300 text-sm font-semibold hover:bg-gray-800">
						1Y
					</button>
					<button className="px-3 py-1 rounded-md text-gray-300 text-sm font-semibold hover:bg-gray-800">
						ALL
					</button>
				</div>
			</div>

			{/* Chart */}
			<div className="h-80 -mx-4 sm:-mx-8">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#D4FF00" stopOpacity={0.4} />
								<stop offset="95%" stopColor="#D4FF00" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#D4FF00" stopOpacity={0.1} />
								<stop offset="95%" stopColor="#D4FF00" stopOpacity={0} />
							</linearGradient>
						</defs>
						<CartesianGrid strokeDasharray="3 3" stroke="#333" />
						<XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
						<YAxis stroke="#666" style={{ fontSize: '12px' }} />
						<Tooltip
							contentStyle={{
								backgroundColor: '#1f2937',
								border: '1px solid #374151',
								borderRadius: '8px',
								color: '#fff',
							}}
							labelStyle={{ color: '#fff' }}
							formatter={(value) => [`${value}`, '']}
						/>
						<Area
							type="monotone"
							dataKey="actual"
							stroke="#D4FF00"
							strokeWidth={2}
							fillOpacity={1}
							fill="url(#colorActual)"
							name="Actual Progress"
						/>
						<Area
							type="monotone"
							dataKey="projected"
							stroke="#D4FF00"
							strokeWidth={2}
							strokeDasharray="5 5"
							fillOpacity={1}
							fill="url(#colorProjected)"
							name="Projected Return"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>

			{/* Legend */}
			<div className="flex gap-6 mt-6 text-sm">
				<div className="flex items-center gap-2">
					<div className="w-3 h-0.5 bg-brand-light-green" />
					<span className="text-gray-300">Actual Progress</span>
				</div>
				<div className="flex items-center gap-2">
					<div
						className="w-3 h-0.5 bg-brand-light-green"
						style={{
							backgroundImage:
								'linear-gradient(90deg, #D4FF00 50%, transparent 50%)',
						}}
					/>
					<span className="text-gray-300">Projected Return</span>
				</div>
			</div>

			{/* Current Progress Badge */}
			<div className="absolute right-8 top-64 bg-brand-dark-green text-brand-text-green px-3 py-1 rounded-md text-sm font-semibold">
				Current Progress
			</div>
		</div>
	);
}
