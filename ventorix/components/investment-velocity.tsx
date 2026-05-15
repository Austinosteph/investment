'use client';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Cell,
} from 'recharts';

interface VelocityItem {
	name: string;
	value: number;
	label: string;
}

const data: VelocityItem[] = [
	{ name: 'Modern Markets', value: 12.6, label: '+12.6%' },
	{ name: 'Asia Pacific Rate', value: 108.2, label: '+108.2%' },
	{ name: 'Institutional OTC', value: 15.9, label: '+15.9%' },
];

export function InvestmentVelocity() {
	return (
		<div className="bg-brand-primary rounded-lg p-8 w-full">
			<div className="mb-6">
				<h3 className="text-xl font-semibold text-white mb-2">
					Investment Velocity
				</h3>
				<p className="text-sm text-brand-secondary">
					Visualizing global allocation speed across decentralized networks over
					the last 24H
				</p>
			</div>

			<div className="h-64 mb-8">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#333" />
						<XAxis
							dataKey="name"
							stroke="#666"
							style={{ fontSize: '12px' }}
							tick={{ fill: '#999' }}
						/>
						<YAxis
							stroke="#666"
							style={{ fontSize: '12px' }}
							tick={{ fill: '#999' }}
						/>
						<Bar dataKey="value" radius={[8, 8, 0, 0]}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill="#d4fc79" />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{data.map((item, i) => (
					<div key={i} className="border-l-2 border-lime-400 pl-4">
						<div className="text-xs text-brand-secondary font-medium mb-1">
							{item.name}
						</div>
						<div className="text-lg font-semibold text-lime-400">
							{item.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
