'use client';

import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';

export function DashboardNav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, isLoaded } = useUser();
	const { signOut } = useClerk();

	if (!isLoaded) return null;

	return (
		<>
			<nav className="bg-background/95  border-b-2 border-brand-primary px-4 sm:px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Left section - Logo */}
					<Link
						href="/dashboard"
						className="text-base font-semibold text-primary"
					>
						VENTORIX
					</Link>

					{/* Right section - User avatar and mobile menu */}
					<div className="flex items-center gap-4">
						<div className="">
							<Avatar className="w-6 h-6 sm:h-8 sm:w-8">
								<AvatarImage src={user?.imageUrl} />
								<AvatarFallback>AR</AvatarFallback>
							</Avatar>
						</div>

						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden text-brand-primary hover:scale-105 transition-colors"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-background/95 border-b border-neutral-800 px-4 py-4">
					<div className="flex flex-col gap-4">
						<Link
							href="/dashboard"
							className="text-brand-primary hover:scale-105 transition-all text-sm font-bold"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							DASHBOARD
						</Link>
						<Link
							href="/invest"
							className="text-brand-primary hover:scale-105 transition-all text-sm font-bold"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							INVEST
						</Link>
						<Link
							href="/progress"
							className="text-brand-primary hover:scale-105 transition-all text-sm font-bold"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							PROGRESS
						</Link>
						<Link
							href="/transactions"
							className="text-brand-primary hover:scale-105 transition-all text-sm font-bold"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							TRANSACTIONS
						</Link>
						<Link
							href="/profile"
							className="text-brand-primary hover:scale-105 transition-all text-sm font-bold"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							PROFILE
						</Link>

						{/* Mobile Avatar */}
						<div
							className="sm:hidden flex items-center gap-2 justify-between mt-4 border-t p-2"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<button
								onClick={() => signOut()}
								className="flex gap-2 items-center"
							>
								<LogOut className="w-4 h-4" />
								<span className="text-brand-primary hover:scale-105 transition-all text-sm font-bold p-2">
									SIGN OUT
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
