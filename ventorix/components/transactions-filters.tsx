'use client';

import { Button } from '@/components/ui/button';

interface TransactionsFiltersProps {
	activeFilter: 'deposit' | 'withdrawal';
	onFilterChange: (filter: 'deposit' | 'withdrawal') => void;
}

export function TransactionsFilters({
	activeFilter,
	onFilterChange,
}: TransactionsFiltersProps) {
	return (
		<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
			<div className="flex flex-wrap gap-2 sm:gap-3">
				<Button
					onClick={() => onFilterChange('deposit')}
					variant={activeFilter === 'deposit' ? 'default' : 'outline'}
					className="text-xs sm:text-sm"
					size="sm"
				>
					Deposits
				</Button>
				<Button
					onClick={() => onFilterChange('withdrawal')}
					variant={activeFilter === 'withdrawal' ? 'default' : 'outline'}
					className="text-xs sm:text-sm"
					size="sm"
				>
					Withdrawals
				</Button>
			</div>
		</div>
	);
}
