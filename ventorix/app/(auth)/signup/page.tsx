import { SignupForm } from '@/components/auth/signup-form';
import { ShieldCheck } from 'lucide-react';

export default function SignupPage() {
	return (
		<div
			className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col text-white"
			style={{ backgroundImage: "url('/authbg.jpg')" }}
		>
			{/* Main Content */}
			<main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 bg-brand-dark/90">
				<div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
					{/* Encrypted Session Badge */}
					<div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
						<div className="flex items-center gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-input border border-border rounded-full">
							<ShieldCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5 text-brand-dark-green" />
							<span className="text-xs font-medium tracking-widest text-muted-foreground">
								ENCRYPTED SESSION
							</span>
						</div>
					</div>

					{/* Signup Card */}
					<div className="bg-card border border-brand-light-green rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10">
						<div className="text-center mb-4 sm:mb-6 lg:mb-8">
							<h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-2">
								Create Account
							</h2>
							<p className="text-xs sm:text-sm lg:text-base text-brand-light-green tracking-wide">
								Enter your credentials to begin trading.
							</p>
						</div>

						<SignupForm />
					</div>
				</div>
			</main>
		</div>
	);
}
