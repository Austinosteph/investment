'use client';
import Link from 'next/link';
import { useState } from 'react';

export const PublicNavbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-50 flex flex-row sm:px-8 lg:px-36 items-center bg-brand-navdark justify-between p-3 sm:p-4 border-b border-brand-light-green">
			{/* Hamburger Menu - Mobile/Tablet Only */}
			<button
				onClick={toggleMobileMenu}
				className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
				aria-label="Toggle mobile menu"
			>
				<span
					className={`block w-5 h-0.5 bg-brand-light-green transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
				></span>
				<span
					className={`block w-5 h-0.5 bg-brand-light-green transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
				></span>
				<span
					className={`block w-5 h-0.5 bg-brand-light-green transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
				></span>
			</button>

			{/* Logo */}
			<Link
				href="/"
				className="text-brand-dark-green font-bold text-sm sm:text-base lg:text-xl xl:text-2xl"
			>
				VENTORIX CAPITAL
			</Link>

			{/* Desktop Navigation - Hidden on Tablet/Mobile */}
			<div className="hidden lg:flex gap-6 text-brand-light-green text-sm xl:text-base">
				<Link className="hover:text-white hover:font-bold" href="/home">
					Home
				</Link>
				<Link className="hover:text-white hover:font-bold " href="/invest">
					Invest
				</Link>
				<Link className="hover:text-white hover:font-bold" href="/market">
					Market
				</Link>
				<Link className="hover:text-white hover:font-bold" href="/about">
					About
				</Link>
			</div>

			{/* CTA */}
			<div className="flex gap-2 sm:gap-4 text-brand-light-green text-sm sm:text-base items-center">
				<Link
					className="hidden md:block transition-all hover:scale-105"
					href="/login"
				>
					Login
				</Link>
				<Link
					className="bg-brand-dark-green transition-all hover:scale-105 text-brand-text-green/85 text-xs sm:text-base px-2 sm:px-3 py-1 sm:py-1.5 border border-brand-dark-green font-bold rounded-lg"
					href="/signup"
				>
					Signup
				</Link>
			</div>

			{/* Mobile/Tablet Dropdown Menu */}
			{isMobileMenuOpen && (
				<div className="absolute top-full left-0 w-full bg-brand-navdark border-b border-brand-light-green lg:hidden">
					<div className="flex flex-col p-4 space-y-2 sm:space-y-3">
						<Link
							className="text-brand-light-green hover:text-white hover:font-bold py-2 text-sm sm:text-base"
							href="/home"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							className="text-brand-light-green hover:text-white hover:font-bold py-2 text-sm sm:text-base"
							href="/invest"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Invest
						</Link>
						<Link
							className="text-brand-light-green hover:text-white hover:font-bold py-2 text-sm sm:text-base"
							href="/market"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Market
						</Link>
						<Link
							className="text-brand-light-green hover:text-white hover:font-bold py-2 text-sm sm:text-base"
							href="/about"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							About
						</Link>
						<Link
							className="text-brand-light-green hover:text-white hover:font-bold py-2 text-sm sm:text-base"
							href="/login"
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
