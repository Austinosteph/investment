import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const AuthNavbar = () => {
	return (
		<div className="flex items-center justify-between px-6 p-4 md:px-36 md:p-4 bg-brand-nav">
			{/* Back Arrow + Logo */}
			<div className="flex items-center gap-4">
				<Link
					href="/"
					className="flex items-center text-brand-primary"
					aria-label="Back to home"
				>
					<ArrowLeft className="h-5 w-5 transition-all hover:scale-110" />
				</Link>
				<Link
					href="/"
					className="text-brand-dark-green font-bold text-sm sm:text-base lg:text-xl xl:text-2xl"
				>
					VENTORIX CAPITAL
				</Link>
			</div>

			<div className="text-xs md:text-sm text-brand-primary tracking-widest">
				SECURE TERMINAL v.2.4
			</div>
		</div>
	);
};

export default AuthNavbar;
