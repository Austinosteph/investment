import { LoginForm } from '@/components/auth/login-form';
import Image from 'next/image';

export default function LoginPage() {
	return (
		<div className="min-h-screen flex flex-col lg:flex-row">
			{/* Image - Full width on mobile/tablet, 50% on desktop */}
			<div className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-amber-900 relative">
				<Image
					src="/invest.jpg"
					alt="Investment illustration"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Login Card Container - Full width on mobile/tablet, 50% on desktop */}
			<div className="w-full lg:w-1/2 flex items-center justify-center min-h-[60vh] lg:min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="w-full max-w-md">
					<div className="text-center mb-6 sm:mb-8 lg:mb-8">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-brand-primary mb-3 sm:mb-4">
							Welcome Back
						</h2>
						<p className="text-sm sm:text-base lg:text-lg text-brand-primary tracking-wide max-w-sm mx-auto">
							Access your institutional-grade portfolio with Ventorix velocity
						</p>
					</div>

					<LoginForm />
				</div>
			</div>
		</div>
	);
}
