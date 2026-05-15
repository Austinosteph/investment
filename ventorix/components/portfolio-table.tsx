interface AssetItem {
	symbol: string;
	pair: string;
	price: string;
	change: string;
	isPositive: boolean;
}

const assets: AssetItem[] = [
	{
		symbol: 'BTC',
		pair: 'BTC/USD',
		price: '$64,289.42',
		change: '+2.61%',
		isPositive: true,
	},
	{
		symbol: 'ETH',
		pair: 'ETH/USD',
		price: '$3,412.18',
		change: '+8.5%',
		isPositive: true,
	},
	{
		symbol: 'SOL',
		pair: 'SOL/USD',
		price: '$148.92',
		change: '+9.12%',
		isPositive: true,
	},
	{
		symbol: 'NXTO',
		pair: 'NXTO/USD',
		price: '$1,024.12',
		change: '+3.78%',
		isPositive: true,
	},
];

export function PortfolioTable() {
	return (
		<div className=" rounded-lg border border-brand-primary shadow-md shadow-brand-primary overflow-hidden">
			<div className="px-8 py-6 border-b border-gray-300">
				<h3 className="text-lg font-semibold text-black">
					Global Portfolio Assets
				</h3>
				<p className="text-sm text-brand-primary mt-1">Modified 2 min ago</p>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-gray-200 bg-brand-primary/15">
							<th className="px-8 py-4 text-left text-xs font-semibold text-black uppercase tracking-wide">
								Asset Name
							</th>
							<th className="px-8 py-4 text-left text-xs font-semibold text-black uppercase tracking-wide">
								Identifier
							</th>
							<th className="px-8 py-4 text-left text-xs font-semibold text-black uppercase tracking-wide">
								Market Price
							</th>
							<th className="px-8 py-4 text-left text-xs font-semibold text-black uppercase tracking-wide">
								24H Performance
							</th>
						</tr>
					</thead>
					<tbody>
						{assets.map((asset, i) => (
							<tr
								key={i}
								className={i % 2 === 0 ? 'bg-white' : 'bg-brand-primary/15'}
							>
								<td className="px-8 py-4">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
											{asset.symbol[0]}
										</div>
										<span className="font-medium text-brand-primary">
											{asset.symbol}
										</span>
									</div>
								</td>
								<td className="px-8 py-4 text-brand-primary">{asset.pair}</td>
								<td className="px-8 py-4 font-semibold text-black">
									{asset.price}
								</td>
								<td className="px-8 py-4">
									<span className="text-green-700 font-semibold">
										{asset.change}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
