'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	LayoutDashboard,
	TrendingUp,
	Activity,
	History,
	User,
} from 'lucide-react';

const menuItems = [
	{
		name: 'Dashboard',
		href: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		name: 'Invest',
		href: '/invest',
		icon: TrendingUp,
	},

	{
		name: 'Progress',
		href: '/progress',
		icon: Activity,
	},
	{
		name: 'Transactions',
		href: '/transactions',
		icon: History,
	},
	{
		name: 'Profile',
		href: '/profile',
		icon: User,
	},
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="bg-brand-navdark w-48 h-screen border-r border-brand-navdark p-4 flex flex-col">
			{/* Logo */}
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-white">VENTORIX</h1>
			</div>

			{/* User Info */}
			<div className="mb-8 p-3 bg-neutral-900 rounded-lg border border-neutral-800">
				<div className="text-sm font-semibold text-white">Alex Rivers</div>
				<div className="text-xs text-neutral-500 uppercase">INSTITUTIONAL</div>
				<div className="text-xs text-neutral-500 uppercase">TIER</div>
			</div>

			{/* Navigation Menu */}
			<nav className="flex-1 flex flex-col gap-2">
				{menuItems.map((item) => {
					const isActive = pathname === item.href;
					const Icon = item.icon;

					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
								isActive
									? 'bg-brand-dark-green text-brand-text-green'
									: 'text-brand-light-green hover:text-white hover:bg-brand-light-green/10'
							}`}
						>
							<Icon className="w-4 h-4" />
							{item.name}
						</Link>
					);
				})}
			</nav>

			{/* Footer - Always at bottom */}
			<div className="border-t border-neutral-800 pt-4 mt-auto text-xs text-neutral-500">
				<div className="text-center">
					<span>SEC REGULATED</span>
				</div>
			</div>
		</aside>
	);
}
