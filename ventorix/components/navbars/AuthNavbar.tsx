import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const AuthNavbar = () => {
	return (
		<header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-brand-nav border-b border-white/10">
			{/* Left */}
			<div className="flex items-center gap-4">
				<Link href="/" aria-label="Back to home">
					<ArrowLeft className="h-5 w-5 text-brand-primary transition-transform hover:scale-110" />
				</Link>

				<Link
					href="/"
					className="text-brand-primary font-bold text-sm sm:text-base lg:text-xl"
				>
					VENTORIX CAPITAL
				</Link>
			</div>

			{/* Right */}
			<div className="text-xs sm:text-sm text-brand-primary tracking-widest">
				SECURE TERMINAL v.2.4
			</div>
		</header>
	);
};

export default AuthNavbar;
