'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CirclePlus, Users, LogOut } from 'lucide-react';

const menuItems = [
	{
		name: 'Users',
		href: '/admin/users',
		icon: Users,
	},
	{
		name: 'Transactions',
		href: '/admin/transactions',
		icon: CirclePlus,
	},
];

export function AdminSidebar() {
	const pathname = usePathname();

	return (
		<aside className="bg-brand-primary w-48 h-screen border-r border-brand-navdark p-4 flex flex-col">
			{/* Logo */}
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-brand-secondary">VENTORIX</h1>
			</div>

			{/* User Info */}
			<div className="mb-8 p-3 space-y-2 rounded-lg bg-brand-secondary/75">
				<div className="text-sm font-semibold text-black">Administration</div>
				<div className="text-xs text-brand-primary uppercase">PANEL</div>
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
							className={`flex items-center gap-3 px-3 py-4 rounded-lg transition-colors text-sm font-medium ${
								isActive
									? 'border border-brand-secondary text-brand-secondary hover:scale-105 transition-all'
									: 'text-brand-secondary hover:text-white hover:scale-110 transition-all'
							}`}
						>
							<Icon className="w-4 h-4" />
							{item.name}
						</Link>
					);
				})}
			</nav>

			{/* Footer - Always at bottom */}
			<div className="border-t border-neutral-800 pt-4 mt-auto text-xs text-brand-secondary hover:scale-105">
				<div className="text-center flex justify-center gap-4">
					<LogOut className="w-4 h-4" />
					<span>Sign Out</span>
				</div>
			</div>
		</aside>
	);
}
