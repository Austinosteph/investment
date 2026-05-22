'use client';

import { useEffect, useRef } from 'react';

declare global {
	interface Window {
		TradingView?: unknown;
	}
}

export default function BTCChart() {
	const chartRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!chartRef.current) return;

		chartRef.current.innerHTML = '';

		const script = document.createElement('script');

		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';

		script.type = 'text/javascript';

		script.async = true;

		script.innerHTML = JSON.stringify({
			autosize: true,

			symbol: 'BINANCE:BTCUSDT',

			interval: '15',

			timezone: 'Africa/Lagos',

			theme: 'light',

			style: '1',

			locale: 'en',

			enable_publishing: false,

			hide_top_toolbar: false,

			hide_side_toolbar: true,

			hide_legend: false,

			save_image: false,

			withdateranges: true,

			allow_symbol_change: true,

			container_id: 'tradingview_chart',

			overrides: {
				'paneProperties.background': '#ffffff',

				'paneProperties.vertGridProperties.color': '#f1f5f9',

				'paneProperties.horzGridProperties.color': '#f1f5f9',

				'symbolWatermarkProperties.transparency': 90,

				'mainSeriesProperties.candleStyle.upColor': '#22c55e',

				'mainSeriesProperties.candleStyle.downColor': '#ef4444',

				'mainSeriesProperties.candleStyle.borderUpColor': '#22c55e',

				'mainSeriesProperties.candleStyle.borderDownColor': '#ef4444',

				'mainSeriesProperties.candleStyle.wickUpColor': '#22c55e',

				'mainSeriesProperties.candleStyle.wickDownColor': '#ef4444',
			},
		});

		chartRef.current.appendChild(script);
	}, []);

	return (
		<div className="w-full h-125 rounded-2xl overflow-hidden bg-background">
			<div id="tradingview_chart" ref={chartRef} className="w-full h-full" />
		</div>
	);
}
