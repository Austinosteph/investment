'use client';

import Image from 'next/image';

export function CustodyArchitecture() {
	return (
		<div className="mt-16 sm:mt-20 md:mt-24 rounded-2xl border border-brand-primary bg-brand-primary/10 p-6 sm:p-8 md:p-12">
			<div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
				{/* Image Section - 50% */}
				<div className="flex-1 flex items-center justify-center">
					<Image
						src="/invest.jpg"
						alt="Custody Architecture"
						width={400}
						height={400}
						className="w-full h-auto max-w-lg lg:max-w-2xl object-contain rounded-lg"
					/>
				</div>

				{/* Content Section - 50% */}
				<div className="flex-1">
					<div className="mb-6 sm:mb-8 flex items-center gap-3">
						<h3 className="text-lg font-bold text-brand-primary sm:text-xl lg:text-2xl">
							Fortified Custody Architecture
						</h3>
					</div>

					<p className="mb-6 sm:mb-8 max-w-2xl text-brand-primary text-sm sm:text-base leading-relaxed">
						Ventorix Capital employs Multi-Custody AML Consortium (AMC)
						Technology to eliminate single points of failure. Our assets are
						protected by independent custodians and secure networks.
					</p>

					{/* Feature Cards */}
					<div className="mb-6 sm:mb-8 grid gap-4 sm:gap-6 md:grid-cols-2">
						<div className="space-y-2 bg-brand-primary/5 p-3 sm:p-4 rounded-lg border border-brand-primary/30">
							<p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
								Infrastructure
							</p>
							<p className="font-semibold text-black text-sm sm:text-base">
								Multi-Node Distribution
							</p>
							<p className="text-xs sm:text-sm text-brand-primary leading-relaxed">
								Geographically distributed infrastructure
							</p>
						</div>

						<div className="space-y-2 bg-brand-primary/5 p-3 sm:p-4 rounded-lg border border-brand-primary/30">
							<p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
								Compliance
							</p>
							<p className="font-semibold text-black text-sm sm:text-base">
								Full Regulatory Audit
							</p>
							<p className="text-xs sm:text-sm text-brand-primary leading-relaxed">
								Annual third-party compliance reviews
							</p>
						</div>
					</div>

					{/* Stats Section */}
					<div className="grid gap-6 sm:gap-8 md:grid-cols-2 border-t border-gray-700 pt-6 sm:pt-8">
						<div className="space-y-2">
							<p className="text-2xl sm:text-3xl font-bold text-brand-primary">
								$4.2B+
							</p>
							<p className="text-xs sm:text-sm text-brand-primary leading-relaxed">
								Protected across multiple custody networks annually
							</p>
						</div>

						<div className="space-y-2">
							<p className="text-2xl sm:text-3xl font-bold text-brand-primary">
								99.9%
							</p>
							<p className="text-xs sm:text-sm text-brand-primary leading-relaxed">
								Ensuring continuous access to your assets
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
