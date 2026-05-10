'use client';

import { DashboardNav } from '@/components/navbars/DashboardNav';

export default function Home() {
	return (
		<>
			<DashboardNav />
			<main className="flex-1 p-4 sm:p-6 lg:p-8 text-white">
				<h1 className="text-2xl sm:text-3xl font-bold mb-4">
					Welcome back, Alex.
				</h1>
				<p className="text-neutral-400">
					Your portfolio performance is up 12.4% this quarter.
				</p>
			</main>
		</>
	);
}
