'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface UsersPaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
}

export function UsersPagination({
	currentPage,
	totalPages,
	totalItems,
	itemsPerPage,
	onPageChange,
}: UsersPaginationProps) {
	const startItem = (currentPage - 1) * itemsPerPage + 1;
	const endItem = Math.min(currentPage * itemsPerPage, totalItems);

	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		const maxPagesToShow = 5;
		const halfWindow = Math.floor(maxPagesToShow / 2);

		if (totalPages <= maxPagesToShow) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			const start = Math.max(1, currentPage - halfWindow);
			const end = Math.min(totalPages, currentPage + halfWindow);

			if (start > 1) {
				pages.push(1);
				if (start > 2) pages.push('...');
			}

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (end < totalPages) {
				if (end < totalPages - 1) pages.push('...');
				pages.push(totalPages);
			}
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-between border-t border-border pt-4">
			<p className="text-sm text-muted-foreground">
				Showing {startItem} of {totalItems.toLocaleString()} platform users
			</p>

			<div className="flex items-center gap-2">
				<Button
					variant="ghost"
					size="sm"
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="h-8 w-8 p-0"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				{getPageNumbers().map((page, idx) => (
					<div key={idx}>
						{page === '...' ? (
							<span className="px-2 text-muted-foreground">•••</span>
						) : (
							<Button
								variant={currentPage === page ? 'default' : 'ghost'}
								size="sm"
								onClick={() => onPageChange(page as number)}
								className={`h-8 w-8 p-0 ${
									currentPage === page
										? 'bg-accent text-accent-foreground hover:bg-accent'
										: ''
								}`}
							>
								{page}
							</Button>
						)}
					</div>
				))}

				<Button
					variant="ghost"
					size="sm"
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="h-8 w-8 p-0"
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}
