'use client';
import Link from 'next/link';
import { useState } from 'react';

export const PublicNavbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-50 flex flex-row sm:px-8 lg:px-36 items-center bg-brand-nav justify-between p-3 sm:p-4 border-b border-brand-primary">
			{/* Hamburger Menu - Mobile/Tablet Only */}
			<button
				onClick={toggleMobileMenu}
				className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
				aria-label="Toggle mobile menu"
			>
				<span
					className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
				></span>
				<span
					className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
				></span>
				<span
					className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
				></span>
			</button>

			{/* Logo */}
			<Link
				href="/"
				className="text-brand-primary font-bold text-sm sm:text-base lg:text-xl xl:text-2xl"
			>
				VENTORIX CAPITAL
			</Link>

			{/* Desktop Navigation - Hidden on Tablet/Mobile */}
			<div className="hidden font-bold lg:flex gap-12 text-brand-primary text-sm xl:text-base">
				<Link className=" hover:transition-all hover:scale-105" href="/plans">
					Plans
				</Link>
				<Link className=" hover:transition-all hover:scale-105" href="/market">
					Market
				</Link>
				<Link className=" hover:transition-all hover:scale-105" href="/about">
					About Us
				</Link>
			</div>

			{/* CTA */}
			<div className="flex gap-2 sm:gap-4 text-brand-primary text-sm sm:text-base items-center">
				<Link
					className="hidden font-bold md:block transition-all hover:scale-105"
					href="/sign-in"
				>
					Login
				</Link>
				<Link
					className="bg-brand-primary transition-all hover:scale-105 text-brand-secondary text-xs sm:text-base px-2 sm:px-3 py-1 sm:py-1.5 border border-brand-primary font-bold rounded-lg"
					href="/sign-up"
				>
					Signup
				</Link>
			</div>

			{/* Mobile/Tablet Dropdown Menu */}
			{isMobileMenuOpen && (
				<div className="absolute top-full left-0 w-full bg-brand-nav border-b border-brand-primary lg:hidden">
					<div className="flex flex-col p-4 space-y-2 sm:space-y-3">
						<Link
							className="text-brand-primary font-bold transition-all hover:scale-105 py-2 text-sm sm:text-base"
							href="/plans"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Plans
						</Link>
						<Link
							className="text-brand-primary font-bold transition-all hover:scale-105 py-2 text-sm sm:text-base"
							href="/market"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Market
						</Link>
						<Link
							className="text-brand-primary font-bold transition-all hover:scale-105 py-2 text-sm sm:text-base"
							href="/about"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							About Us
						</Link>
						<Link
							className="text-brand-primary font-bold transition-all hover:scale-105 py-2 text-sm sm:text-base"
							href="/sign-in"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Login
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};
