'use client';

import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate login request
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<div className="w-full max-w-md mx-auto px-4 sm:px-0">
			<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
				{/* Email Field */}
				<div className="space-y-2">
					<label
						htmlFor="email"
						className="block text-xs font-medium tracking-widest text-brand-light-green"
					>
						IDENTITY / EMAIL
					</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark-green" />
						<input
							id="email"
							type="email"
							placeholder="alex.rivers@ventorix.io"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full bg-input border border-brand-light-green rounded-lg py-2.5 sm:py-3 pl-10 pr-4 text-sm text-brand-light-green placeholder:text-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-light-green focus:border-brand-light-green"
							required
						/>
					</div>
				</div>

				{/* Password Field */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<label
							htmlFor="password"
							className="block text-xs font-semibold tracking-widest text-brand-light-green"
						>
							ACCESS KEY / PASSWORD
						</label>
						<a
							href="#"
							className="text-xs sm:text-sm text-brand-light-blue hover:text-brand-light-blue/80 transition-colors"
						>
							Forgot Password?
						</a>
					</div>
					<div className="relative">
						<Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark-green" />
						<input
							id="password"
							type={showPassword ? 'text' : 'password'}
							placeholder="••••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full bg-input border border-brand-light-green rounded-lg py-2.5 sm:py-3 pl-10 pr-10 text-sm text-brand-light-green placeholder:text-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-light-green focus:border-brand-light-green"
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
							aria-label={showPassword ? 'Hide password' : 'Show password'}
						>
							{showPassword ? (
								<EyeOff className="h-4 w-4" />
							) : (
								<Eye className="h-4 w-4" />
							)}
						</button>
					</div>
				</div>

				{/* Login Button */}
				<button
					type="submit"
					disabled={isLoading}
					className="w-full bg-brand-dark-green text-lg sm:text-2xl text-black font-semibold py-3 sm:py-4 px-4 rounded-lg hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 mt-6 sm:mt-8 transition-all hover:scale-105 min-h-11"
				>
					Login
					<ArrowRight className="h-4 w-4" />
				</button>
			</form>

			{/* Sign Up Link */}
			<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-brand-light-green text-center">
				<p className="text-xs text-brand-light-green mb-4 sm:mb-6">
					NEW ACCOUNT?
				</p>
				<a
					href="/signup"
					className="text-lg sm:text-2xl font-semibold text-brand-light-blue hover:text-brand-light-blue/80  w-full border border-brand-light-blue rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 min-h-11 flex items-center justify-center transition-all hover:scale-105"
				>
					Sign Up
				</a>
			</div>
		</div>
	);
}
