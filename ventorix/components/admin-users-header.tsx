'use client';

export function AdminUsersHeader() {
	return (
		<div className="mb-8 flex items-start justify-between">
			<div className="flex-1">
				<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black">
					Admin Users Management
				</h1>
				<p className="text-brand-primary text-xs sm:text-sm md:text-base mt-2">
					Monitor platform liquidity and oversight user accounts. Ensure
					institutional compliance and manage retail interactions across the{' '}
					<span className="font-semibold text-accent">Ventorix ecosystem</span>.
				</p>
			</div>
		</div>
	);
}
