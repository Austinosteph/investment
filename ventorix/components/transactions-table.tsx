'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Transaction {
	id: string;
	userName: string;
	initials: string;
	accountType: string;
	amount: number;
	asset: string;
	fiatAmount?: string;
	date: string;
	time: string;
	referenceId: string;
}

const mockTransactions: Transaction[] = [
	{
		id: '1',
		userName: 'Alexander Mercer',
		initials: 'AM',
		accountType: 'VIP Institutional',
		amount: 2.45,
		asset: 'BTC',
		fiatAmount: '$156,250.00 USD',
		date: 'Oct 24, 2023',
		time: '14:22 GMT',
		referenceId: 'NEX-7721-4952',
	},
	{
		id: '2',
		userName: 'Sarah Lundgren',
		initials: 'SL',
		accountType: 'Private Wealth',
		amount: 50000,
		asset: 'USDT',
		fiatAmount: 'Direct Network Deposit',
		date: 'Oct 24, 2023',
		time: '15:05 GMT',
		referenceId: 'NEX-0811-G221',
	},
	{
		id: '3',
		userName: 'Blackwood Capital',
		initials: 'BK',
		accountType: 'Entity Account',
		amount: 1200000,
		asset: 'USD',
		fiatAmount: 'Wire Transfer Pending',
		date: 'Oct 23, 2023',
		time: '09:12 GMT',
		referenceId: 'KJH-88322-BLCK',
	},
	{
		id: '4',
		userName: 'Julianne Dorsey',
		initials: 'JD',
		accountType: 'Accredited Investor',
		amount: 12500,
		asset: 'USDC',
		fiatAmount: 'Ethereum Network',
		date: 'Oct 24, 2023',
		time: '16:45 GMT',
		referenceId: 'NEX-4412-U950',
	},
];

interface TransactionsTableProps {
	filter?: 'deposit' | 'withdrawal';
}

export function TransactionsTable({
	filter = 'deposit',
}: TransactionsTableProps) {
	const [transactions, setTransactions] =
		useState<Transaction[]>(mockTransactions);
	const [processedIds, setProcessedIds] = useState<Set<string>>(new Set());

	const handleApprove = (id: string) => {
		setProcessedIds((prev) => new Set([...prev, id]));
		toast.success('Transaction approved');
	};

	const handleReject = (id: string) => {
		setProcessedIds((prev) => new Set([...prev, id]));
		toast.error('Transaction rejected');
	};

	const filteredTransactions =
		filter === 'deposit'
			? transactions.filter((t) => t.amount > 50000)
			: transactions;

	const visibleTransactions = filteredTransactions.filter(
		(t) => !processedIds.has(t.id),
	);

	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full min-w-150 text-xs sm:text-sm">
				<thead>
					<tr className="border-b border-border bg-muted/30">
						<th className="px-2 sm:px-3 md:px-4 py-3 text-left font-semibold text-muted-foreground whitespace-nowrap">
							USER NAME
						</th>
						<th className="px-2 sm:px-3 md:px-4 py-3 text-left font-semibold text-muted-foreground whitespace-nowrap">
							AMOUNT & ASSET
						</th>
						<th className="px-2 sm:px-3 md:px-4 py-3 text-left font-semibold text-muted-foreground whitespace-nowrap hidden sm:table-cell">
							DATE
						</th>
						<th className="px-2 sm:px-3 md:px-4 py-3 text-left font-semibold text-muted-foreground whitespace-nowrap hidden md:table-cell">
							REFERENCE ID
						</th>
					</tr>
				</thead>
				<tbody>
					{visibleTransactions.map((transaction) => (
						<tr
							key={transaction.id}
							className="border-b border-border hover:bg-muted/20 transition-colors"
						>
							<td className="px-2 sm:px-3 md:px-4 py-3 sm:py-4">
								<div className="flex items-center gap-2 sm:gap-3">
									<Avatar className="h-6 w-6 sm:h-8 sm:w-8">
										<AvatarFallback className="text-[10px] sm:text-xs font-semibold">
											{transaction.initials}
										</AvatarFallback>
									</Avatar>
									<div className="min-w-0">
										<p className="font-medium text-foreground truncate text-xs sm:text-sm">
											{transaction.userName}
										</p>
										<p className="text-[10px] sm:text-xs text-muted-foreground truncate">
											{transaction.accountType}
										</p>
									</div>
								</div>
							</td>
							<td className="px-2 sm:px-3 md:px-4 py-3 sm:py-4">
								<div className="min-w-0">
									<p className="font-semibold text-foreground truncate text-xs sm:text-sm">
										{transaction.amount.toLocaleString()} {transaction.asset}
									</p>
									<p className="text-[10px] sm:text-xs text-muted-foreground truncate">
										{transaction.fiatAmount}
									</p>
								</div>
							</td>
							<td className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 hidden sm:table-cell">
								<div>
									<p className="text-foreground text-xs sm:text-sm">
										{transaction.date}
									</p>
									<p className="text-[10px] sm:text-xs text-muted-foreground">
										{transaction.time}
									</p>
								</div>
							</td>
							<td className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 hidden md:table-cell">
								<Badge
									variant="secondary"
									className="font-mono text-[10px] sm:text-xs"
								>
									{transaction.referenceId}
								</Badge>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{visibleTransactions.length === 0 && (
				<div className="py-8 sm:py-12 text-center">
					<p className="text-muted-foreground text-sm">
						{processedIds.size > 0
							? 'All transactions have been processed'
							: 'No transactions found'}
					</p>
				</div>
			)}
		</div>
	);
}
