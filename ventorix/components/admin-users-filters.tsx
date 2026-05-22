'use client';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

interface AdminUsersFiltersProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	accountType: string;
	onAccountTypeChange: (value: string) => void;
	status: string;
	onStatusChange: (value: string) => void;
}

export function AdminUsersFilters({
	searchQuery,
	onSearchChange,
	accountType,
	onAccountTypeChange,
	status,
	onStatusChange,
}: AdminUsersFiltersProps) {
	return (
		<div className="mb-8 grid gap-4 bg-brand-primary/15 rounded-lg border border-brand-primary shadow shadow-brand-primary bg-card p-4 md:grid-cols-3">
			<div className="flex flex-col gap-4">
				<label className="text-xs font-semibold uppercase tracking-wider text-black">
					Search Directory
				</label>
				<div className="relative">
					<Search className="absolute left-3 top-1.5 h-5 w-5 text-brand-primary" />
					<Input
						placeholder="Name, email, or user ID..."
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-9"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
					Account Type
				</label>
				<Select value={accountType} onValueChange={onAccountTypeChange}>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Types</SelectItem>
						<SelectItem value="institutional">Institutional</SelectItem>
						<SelectItem value="retail">Retail</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-4">
				<label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
					Status
				</label>
				<Select value={status} onValueChange={onStatusChange}>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Statuses</SelectItem>
						<SelectItem value="active">Active</SelectItem>
						<SelectItem value="suspended">Suspended</SelectItem>
						<SelectItem value="inactive">Inactive</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
