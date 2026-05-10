import Link from 'next/link';

const FooterAuth = () => {
	return (
		<footer className="w-full bg-brand-navdark">
			<div className="w-full px-4 sm:px-8 lg:px-36 py-4 sm:py-6">
				{/* Mobile Layout - Stacked */}
				<div className="flex flex-col sm:hidden gap-4 text-center">
					<div>
						<span className="text-xs text-brand-light-green block mt-1">
							© 2026 VENTORIX CAPITAL GROUP. All rights reserved.
						</span>
						<span className="text-xs text-brand-light-green block">
							SEC Regulated Platform.
						</span>
					</div>
					<div className="flex flex-col gap-2 text-brand-light-green text-xs">
						<Link
							className="hover:text-white transition-colors"
							href="/privacy"
						>
							Privacy Policy
						</Link>
						<Link className="hover:text-white transition-colors" href="/terms">
							Terms of Service
						</Link>
						<Link className="hover:text-white transition-colors" href="/risk">
							Risk Disclosure
						</Link>
					</div>
				</div>

				{/* Tablet Layout - Horizontal but centered */}
				<div className="hidden sm:flex lg:hidden flex-col gap-4 items-center text-center">
					<div>
						<span className="text-xs text-brand-light-green block mt-1">
							© 2026 VENTORIX CAPITAL GROUP. All rights reserved. SEC Regulated
							Platform.
						</span>
					</div>
					<div className="flex gap-4 sm:gap-6 text-brand-light-green text-xs">
						<Link
							className="hover:text-white transition-colors"
							href="/privacy"
						>
							Privacy Policy
						</Link>
						<Link className="hover:text-white transition-colors" href="/terms">
							Terms of Service
						</Link>
						<Link className="hover:text-white transition-colors" href="/risk">
							Risk Disclosure
						</Link>
					</div>
				</div>

				{/* Desktop Layout - Original side-by-side */}
				<div className="hidden lg:flex flex-row justify-between items-center">
					<div>
						<span className="text-xs text-brand-light-green block mt-1">
							© 2026 VENTORIX CAPITAL GROUP. All rights reserved. SEC Regulated
							Platform.
						</span>
					</div>
					<div className="flex gap-6 text-brand-light-green text-xs">
						<Link
							className="hover:text-white transition-colors"
							href="/privacy"
						>
							Privacy Policy
						</Link>
						<Link className="hover:text-white transition-colors" href="/terms">
							Terms of Service
						</Link>
						<Link className="hover:text-white transition-colors" href="/risk">
							Risk Disclosure
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterAuth;
