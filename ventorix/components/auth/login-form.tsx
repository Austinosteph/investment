'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate login request
		setTimeout(() => {
			setIsLoading(false);
			// Redirect to dashboard after successful login
			router.push('/dashboard');
		}, 1000);
	};

	return (
		<div className="w-full max-w-md mx-auto px-4 sm:px-0 lg:px-0">
			<form
				onSubmit={handleSubmit}
				className="space-y-2 sm:space-y-3 lg:space-y-4"
			>
				{/* Email Field */}
				<div className="space-y-2">
					<label
						htmlFor="email"
						className="block text-xs font-semibold tracking-widest text-brand-primary"
					>
						IDENTITY / EMAIL
					</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-brand-primary transition-all hover:scale-105 font-bold" />
						<input
							id="email"
							type="email"
							placeholder="alex.rivers@ventorix.io"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full bg-input border-2 border-brand-primary rounded-lg py-2.5 sm:py-3 pl-10 pr-4 text-sm text-brand-primary placeholder:text-brand-primary/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
							required
						/>
					</div>
				</div>

				{/* Password Field */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<label
							htmlFor="password"
							className="block text-xs sm:text-xs lg:text-xs font-semibold tracking-widest text-brand-primary"
						>
							ACCESS KEY / PASSWORD
						</label>
						<a
							href="#"
							className="text-xs sm:text-xs lg:text-sm text-brand-accent hover:scale-105 transition-all"
						>
							Forgot Password?
						</a>
					</div>
					<div className="relative">
						<Lock className="absolute left-3 top-1/2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-brand-primary transition-all hover:scale-105 font-bold" />
						<input
							id="password"
							type={showPassword ? 'text' : 'password'}
							placeholder="••••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full bg-input border-2 border-brand-primary rounded-lg py-2.5 sm:py-3 pl-10 pr-4 text-sm text-brand-primary placeholder:text-brand-primary/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-2 sm:right-3 lg:right-3 top-1/2 -translate-y-1/2 text-brand-primary hover:text-foreground transition-all hover:scale-110"
							aria-label={showPassword ? 'Hide password' : 'Show password'}
						>
							{showPassword ? (
								<EyeOff className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4" />
							) : (
								<Eye className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4" />
							)}
						</button>
					</div>
				</div>

				{/* Login Button */}
				<button
					type="submit"
					disabled={isLoading}
					className="w-full bg-brand-primary text-base sm:text-lg lg:text-xl text-brand-secondary font-semibold py-2.5 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-4 rounded-lg hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 mt-4 sm:mt-6 lg:mt-8 transition-all hover:scale-105 min-h-10 sm:min-h-11 lg:min-h-12"
				>
					{isLoading ? (
						<div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
					) : (
						<>
							Login
							<ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4" />
						</>
					)}
				</button>
			</form>

			{/* Sign Up Link */}
			<div className="mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 border-t border-gray-400 text-center">
				<p className="text-xs sm:text-xs lg:text-xs text-brand-primary mb-3 sm:mb-4 lg:mb-6">
					NEW ACCOUNT?
				</p>
				<a
					href="/signup"
					className="text-base sm:text-lg lg:text-xl font-semibold text-brand-accent w-full border-2 border-brand-accent rounded-lg px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 min-h-10 sm:min-h-11 lg:min-h-12 flex items-center justify-center transition-all hover:scale-105"
				>
					Sign Up
				</a>
			</div>
		</div>
	);
}
