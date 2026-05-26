'use client';

import { useEffect, useRef } from 'react';

export function PortfolioTable() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		containerRef.current.innerHTML = '';

		const script = document.createElement('script');
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
		script.async = true;

		script.type = 'text/javascript';

		script.innerHTML = JSON.stringify({
			symbols: [
				{
					proName: 'BINANCE:BTCUSDT',
					title: 'BTC',
				},
				{
					proName: 'BINANCE:ETHUSDT',
					title: 'ETH',
				},
				{
					proName: 'BINANCE:BNBUSDT',
					title: 'BNB',
				},
				{
					proName: 'BINANCE:SOLUSDT',
					title: 'SOL',
				},
			],
			showSymbolLogo: true,
			isTransparent: false,
			displayMode: 'adaptive',
			colorTheme: 'light',
			locale: 'en',
		});

		containerRef.current.appendChild(script);
	}, []);

	return (
		<div className="w-full rounded-lg border border-brand-primary overflow-hidden shadow-lg shadow-brand-primary">
			{/* Header (your UI stays) */}
			<div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-brand-primary">
				<h3 className="text-base sm:text-lg font-semibold text-black">
					Global Portfolio Assets
				</h3>
				<p className="text-xs sm:text-sm text-brand-primary mt-1">
					Live Market Data (TradingView Feed)
				</p>
			</div>

			{/* TradingView Ticker */}
			<div className="w-full overflow-hidden">
				<div ref={containerRef} />
			</div>
		</div>
	);
}
