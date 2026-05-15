import { LiquidityCard } from '@/components/liquidity-card';
import { MarketSentimentCard } from '@/components/market-sentiment-card';
import { ArticleSection } from '@/components/article-section';
import { InvestmentVelocity } from '@/components/investment-velocity';
import { PortfolioTable } from '@/components/portfolio-table';

export default function Market() {
	return (
		<main className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-8 md:mb-12">
					<div>
						<p className="text-xs md:text-sm lg:text-base font-medium text-brand-primary uppercase tracking-widest mb-2">
							Intelligence Terminal
						</p>
						<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
							Market Insights
						</h1>
					</div>

					<div className="w-fit bg-brand-primary text-brand-secondary flex gap-2 items-center hover:bg-brand-primary/90 rounded-md px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
						<div className="rounded-full bg-green-600 w-2 h-2" />
						live feed 15/30 Aggregator
					</div>
				</div>

				{/* Top Section - Liquidity and Sentiment */}
				<div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
					<LiquidityCard />
					<MarketSentimentCard />
				</div>

				{/* Article and Investment Velocity Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
					<ArticleSection />
					<InvestmentVelocity />
				</div>

				{/* Portfolio Table */}
				<div>
					<PortfolioTable />
				</div>
			</div>
		</main>
	);
}
