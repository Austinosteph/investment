'use client';
import FooterAuth from '@/components/footerauth';
import { DashboardNav } from '@/components/navbars/DashboardNav';
import { ShieldCheck, Star, Gem, X, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PricingTier {
	name: string;
	category: string;
	roi: number;
	popular?: boolean;
	badge?: string;
	icon: React.ReactNode;
	duration: string;
	minimum: string;
	features: string[];
}

const tiers: PricingTier[] = [
	{
		name: 'Basic',
		category: 'SHORT TERM',
		roi: 10,
		icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
		duration: 'Duration: 7 Days',
		minimum: 'Min: $1,000',
		features: ['Daily Accruals'],
	},
	{
		name: 'Standard',
		category: 'BALANCED',
		roi: 15,
		popular: true,
		badge: 'POPULAR',
		icon: <Star className="w-6 h-6 text-brand-accent" />,
		duration: 'Duration: 14 Days',
		minimum: 'Min: $5,000',
		features: ['Capital Insurance'],
	},
	{
		name: 'Premium',
		category: 'WHALE TIER',
		roi: 25,
		icon: <Gem className="w-6 h-6 text-brand-primary" />,
		duration: 'Duration: 30 Days',
		minimum: 'Min: $25,000',
		features: ['Priority Liquidity'],
	},
];

interface InvestmentModalProps {
	isOpen: boolean;
	tier: PricingTier | null;
	onClose: () => void;
}

function generateRandomWalletAddress(crypto: string): string {
	const addresses: Record<string, string> = {
		bitcoin: '1A' + Math.random().toString(16).substring(2, 40),
		ethereum: '0x' + Math.random().toString(16).substring(2, 42),
		usdt: '0x' + Math.random().toString(16).substring(2, 42),
		usdc: '0x' + Math.random().toString(16).substring(2, 42),
	};
	return addresses[crypto] || addresses.ethereum;
}

function InvestmentModal({ isOpen, tier, onClose }: InvestmentModalProps) {
	const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
	const [copiedAddress, setCopiedAddress] = useState(false);

	if (!isOpen || !tier) return null;

	const cryptoOptions = [
		{ id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
		{ id: 'usdt', name: 'Tether (USDT)', symbol: 'USDT' },
	];

	const walletAddress = generateRandomWalletAddress(selectedCrypto);

	const handleCopyAddress = () => {
		navigator.clipboard.writeText(walletAddress);
		setCopiedAddress(true);
		setTimeout(() => setCopiedAddress(false), 2000);
	};

	return (
		<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
			<div className="border border-brand-primary rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
				{/* Modal Header */}
				<div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#333]">
					<div>
						<h2 className="text-xl sm:text-2xl font-bold text-white">
							{tier.name} Plan
						</h2>
						<p className="text-brand-secondary/75 text-xs sm:text-sm mt-1">
							Complete your investment
						</p>
					</div>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-brand-primary"
					>
						<X className="w-5 h-5 sm:w-6 sm:h-6" />
					</button>
				</div>

				{/* Modal Content */}
				<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
					{/* Plan Summary Cards */}
					<div className="grid grid-cols-2 gap-2 sm:gap-3">
						<div className="bg-brand-primary rounded-lg p-2 sm:p-3 border border-[#333]">
							<p className="text-brand-secondary text-xs mb-1">ROI</p>
							<p className="text-lg sm:text-2xl font-bold text-white">
								{tier.roi}%
							</p>
						</div>
						<div className=" rounded-lg p-2 sm:p-3 border border-brand-secondary">
							<p className="text-brand-secondary text-xs mb-1">Duration</p>
							<p className="text-xs sm:text-sm font-semibold text-white">
								{tier.duration.replace('Duration: ', '')}
							</p>
						</div>
						<div className=" rounded-lg p-2 sm:p-3 border border-brand-secondary">
							<p className="text-brand-secondary text-xs mb-1">Minimum</p>
							<p className="text-xs sm:text-sm font-semibold text-white">
								{tier.minimum.replace('Min: ', '')}
							</p>
						</div>
						<div className="bg-brand-primary rounded-lg p-2 sm:p-3 border border-[#333]">
							<p className="text-brand-secondary text-xs mb-1">Type</p>
							<p className="text-xs sm:text-sm font-semibold text-white">
								{tier.category}
							</p>
						</div>
					</div>

					{/* Crypto Selection */}
					<div>
						<label className="block text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
							Select Cryptocurrency
						</label>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
							{cryptoOptions.map((crypto) => (
								<button
									key={crypto.id}
									onClick={() => setSelectedCrypto(crypto.id)}
									className={`p-3 sm:p-3 rounded-lg border transition-all duration-200 text-left ${
										selectedCrypto === crypto.id
											? 'border-brand-tertiary bg-brand-tertiary/10'
											: 'border-brand-primary hover:border-brand-tertiary'
									}`}
								>
									<p className="font-semibold text-white text-xs sm:text-sm">
										{crypto.name}
									</p>
									<p className="text-xs text-brand-secondary">
										{crypto.symbol}
									</p>
								</button>
							))}
						</div>
					</div>

					{/* Wallet Address Section */}
					<div>
						<label className="block text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
							Send Cryptocurrency To
						</label>
						<div className="bg-brand-primary/15 border border-[#333] rounded-lg p-3 sm:p-4">
							<p className="text-brand-secondary text-xs mb-2">
								Wallet Address
							</p>
							<div className="flex items-start sm:items-center gap-2">
								<code className="flex-1 text-[#cdff00] text-xs font-mono break-all leading-relaxed">
									{walletAddress}
								</code>
								<button
									onClick={handleCopyAddress}
									className="shrink-0 p-1.5 sm:p-2 hover:bg-[#333] rounded transition-colors"
									title="Copy address"
								>
									{copiedAddress ? (
										<CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#cdff00]" />
									) : (
										<Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
									)}
								</button>
							</div>
						</div>
					</div>

					{/* Lockup Period */}
					<div className="bg-brand-primary/15 border border-[#333] rounded-lg p-3 sm:p-4">
						<p className="text-white text-xs sm:text-sm mb-2">Lockup Period</p>
						<p className="text-white font-semibold text-xs sm:text-sm">
							{tier.duration.replace('Duration: ', '')}
						</p>
						<p className="text-brand-secondary text-xs mt-2">
							Funds will be locked for the duration of your investment.
						</p>
					</div>

					{/* CTA Button */}
					<button className="w-full bg-brand-primary text-brand-secondary font-bold py-2.5 sm:py-3 px-4 rounded-lg hover:scale-105 transition-all duration-200 text-sm sm:text-base">
						Confirm Paid
					</button>
				</div>
			</div>
		</div>
	);
}

export default function InvestmentPlans() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

	const handleInvestClick = (tier: PricingTier) => {
		setSelectedTier(tier);
		setModalOpen(true);
	};

	return (
		<>
			<DashboardNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background overflow-auto">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
						<h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 sm:mb-3 lg:mb-4">
							Investment Plans
						</h1>
						<p className="text-brand-primary text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed">
							Deploy capital into our high-frequency algorithmic strategies.
							Each plan is engineered for specific liquidity requirements and
							risk parameters.
						</p>
					</div>

					{/* Pricing Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 b">
						{tiers.map((tier, index) => (
							<div
								key={index}
								className={`relative rounded-lg border  transition-all duration-300  bg-brand-primary/10 ${
									tier.popular
										? 'border-brand-primary shadow-lg shadow-brand-primary/75 lg:scale-105 xl:scale-105 hover:scale-110'
										: 'border-brand-primary shadow-md shadow-brand-primary/75 hover:border-brand-dark-green hover:shadow-md hover:scale-102'
								}`}
							>
								{/* Popular Badge */}
								{tier.popular && (
									<div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 sm:left-1/2 md:left-auto md:right-4 lg:right-6 md:transform-none z-10">
										<div className="bg-brand-primary shadow-lg shadow-brand-dark-green/20 text-brand-secondary px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
											{tier.badge}
										</div>
									</div>
								)}

								{/* Card Content */}
								<div className="p-4 sm:p-6 lg:p-8">
									{/* Header with icon and category */}
									<div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
										<span className="text-xs font-bold text-black tracking-widest uppercase">
											{tier.category}
										</span>
										<div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
											{tier.icon}
										</div>
									</div>

									{/* Plan Name */}
									<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-primary mb-2 sm:mb-3 lg:mb-4">
										{tier.name}
									</h2>

									{/* ROI */}
									<div className="mb-3 sm:mb-4 lg:mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-2">
										<div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-accent mb-1 sm:mb-0">
											{tier.roi}%
										</div>
										<div className="text-xs sm:text-sm text-gray-600">ROI</div>
									</div>

									{/* Details */}
									<div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8 pb-4 sm:pb-6 lg:pb-8 border-b border-[#333]">
										<div className="flex items-center gap-2">
											<span className="text-brand-primary text-xs sm:text-sm">
												●
											</span>
											<span className="text-xs sm:text-sm text-brand-primary">
												{tier.duration}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-brand-dark-green text-xs sm:text-sm">
												●
											</span>
											<span className="text-xs sm:text-sm text-brand-primary">
												{tier.minimum}
											</span>
										</div>
										{tier.features.map((feature, idx) => (
											<div key={idx} className="flex items-center gap-2">
												<span className="text-brand-dark-green text-xs sm:text-sm">
													●
												</span>
												<span className="text-xs sm:text-sm text-brand-primary">
													{feature}
												</span>
											</div>
										))}
									</div>

									{/* CTA Button */}
									<button
										onClick={() => handleInvestClick(tier)}
										className="w-full bg-brand-primary text-brand-secondary font-bold py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 rounded-lg hover:bg-brand-primary/85 transition-all duration-200 text-center text-xs sm:text-sm lg:text-base hover:scale-105"
									>
										Invest Now
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<FooterAuth />
				{/* Investment Modal */}
				<InvestmentModal
					isOpen={modalOpen}
					tier={selectedTier}
					onClose={() => setModalOpen(false)}
				/>
			</main>
		</>
	);
}
