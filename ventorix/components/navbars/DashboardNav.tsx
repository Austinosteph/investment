'use client';

import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function DashboardNav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<nav className="bg-neutral-900 border-b border-neutral-800 px-4 sm:px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Left section - Logo */}
					<div className="text-base font-semibold text-lime-400">VENTORIX</div>

					{/* Desktop Navigation - Hidden on mobile */}
					<div className="hidden md:flex gap-8">
						<Link
							href="/dashboard"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
						>
							DASHBOARD
						</Link>
						<Link
							href="/invest"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
						>
							INVEST
						</Link>
						<Link
							href="/history"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
						>
							HISTORY
						</Link>
					</div>

					{/* Right section - User avatar and mobile menu */}
					<div className="flex items-center gap-4">
						{/* Desktop Avatar - Hidden on mobile */}
						<div className="hidden sm:block">
							<Avatar className="h-8 w-8">
								<AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
								<AvatarFallback>AR</AvatarFallback>
							</Avatar>
						</div>

						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden text-neutral-400 hover:text-white transition-colors"
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
				<div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 py-4">
					<div className="flex flex-col gap-4">
						<Link
							href="/dashboard"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							DASHBOARD
						</Link>
						<Link
							href="/invest"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							INVEST
						</Link>
						<Link
							href="/history"
							className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							HISTORY
						</Link>
						{/* Mobile Avatar */}
						<div className="sm:hidden pt-4 border-t border-neutral-800">
							<Avatar className="h-8 w-8">
								<AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
								<AvatarFallback>AR</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
