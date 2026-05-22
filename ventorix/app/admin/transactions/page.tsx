'use client';

import { useState } from 'react';
import { TransactionsHeader } from '@/components/transactions-header';
import { TransactionsFilters } from '@/components/transactions-filters';
import { TransactionsTable } from '@/components/transactions-table';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AdminNav } from '@/components/navbars/AdminNav';
import Footer from '@/components/footer';

export default function TransactionsPage() {
	const [filter, setFilter] = useState<'deposit' | 'withdrawal'>('deposit');
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 3;

	return (
		<>
			<AdminNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background text-brand-primary overflow-auto">
				<div className="max-w-7xl mx-auto mb-12 sm:mb-16">
					<div className="space-y-4 sm:space-y-6">
						{/* Header with metrics */}
						<TransactionsHeader />

						{/* Filters */}
						<TransactionsFilters
							activeFilter={filter}
							onFilterChange={setFilter}
						/>

						{/* Table */}
						<div className="rounded-lg border border-border bg-card p-3 sm:p-4 md:p-6 overflow-x-auto">
							<TransactionsTable filter={filter} />
						</div>

						{/* Pagination */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
							<p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
								Page {currentPage} of {totalPages}
							</p>
							<div className="flex gap-2 justify-center sm:justify-end">
								<Button
									onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
									disabled={currentPage === 1}
									variant="outline"
									size="sm"
									className="gap-1 text-xs sm:text-sm"
								>
									<ChevronLeft className="h-4 w-4" />
									<span className="hidden sm:inline">Previous</span>
									<span className="sm:hidden">Prev</span>
								</Button>
								<Button
									onClick={() =>
										setCurrentPage((p) => Math.min(totalPages, p + 1))
									}
									disabled={currentPage === totalPages}
									variant="outline"
									size="sm"
									className="gap-1 text-xs sm:text-sm"
								>
									Next
									<ChevronRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
