'use client';

import Link from 'next/link';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function AdminNav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
					</div>
				</div>
			)}
		</>
	);
}
