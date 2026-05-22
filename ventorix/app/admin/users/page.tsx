'use client';

import { useState, useMemo } from 'react';
import { AdminUsersHeader } from '@/components/admin-users-header';
import { AdminUsersFilters } from '@/components/admin-users-filters';
import { AdminUsersTable } from '@/components/admin-users-table';
import { UsersPagination } from '@/components/users-pagination';
import { AdminNav } from '@/components/navbars/AdminNav';
import Footer from '@/components/footer';

interface User {
	id: string;
	name: string;
	email: string;
	avatar: string;
	initials: string;
	accountType: 'institutional' | 'retail';
	balance: number;
	status: 'active' | 'suspended' | 'inactive';
	lastLogin: string;
}

// Mock data for demonstration
const MOCK_USERS: User[] = [
	{
		id: '1',
		name: 'Alexander Thorne',
		email: 'alexander@nexus-cap.com',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander',
		initials: 'AT',
		accountType: 'institutional',
		balance: 1240500.0,
		status: 'active',
		lastLogin: '2 mins ago',
	},
	{
		id: '2',
		name: 'Sarah Jenkins',
		email: 'sarah@gmail.com',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
		initials: 'SJ',
		accountType: 'retail',
		balance: 45230.15,
		status: 'active',
		lastLogin: '3 hours ago',
	},
	{
		id: '3',
		name: 'Marcus Vane',
		email: 'mvane@wealth.org',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
		initials: 'MV',
		accountType: 'institutional',
		balance: 2890000.0,
		status: 'suspended',
		lastLogin: '14 days ago',
	},
	{
		id: '4',
		name: 'Elena Rodriguez',
		email: 'elena@trade-pro.io',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
		initials: 'ER',
		accountType: 'retail',
		balance: 12400.0,
		status: 'active',
		lastLogin: 'Yesterday',
	},
	{
		id: '5',
		name: 'David Chen',
		email: 'dchen@financorp.com',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
		initials: 'DC',
		accountType: 'institutional',
		balance: 5670000.5,
		status: 'active',
		lastLogin: '1 hour ago',
	},
	{
		id: '6',
		name: 'Jessica Lee',
		email: 'jlee@startups.io',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
		initials: 'JL',
		accountType: 'retail',
		balance: 89500.25,
		status: 'active',
		lastLogin: '5 hours ago',
	},
	{
		id: '7',
		name: 'Robert Thompson',
		email: 'rthompson@corporate.com',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
		initials: 'RT',
		accountType: 'institutional',
		balance: 3450000.0,
		status: 'inactive',
		lastLogin: '2 months ago',
	},
	{
		id: '8',
		name: 'Maria Garcia',
		email: 'mgarcia@investments.es',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
		initials: 'MG',
		accountType: 'retail',
		balance: 234500.75,
		status: 'active',
		lastLogin: '30 mins ago',
	},
];

const ITEMS_PER_PAGE = 4;

export default function AdminUsersPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [accountType, setAccountType] = useState('all');
	const [status, setStatus] = useState('all');
	const [currentPage, setCurrentPage] = useState(1);

	// Filter users based on search and filters
	const filteredUsers = useMemo(() => {
		return MOCK_USERS.filter((user) => {
			const matchesSearch =
				searchQuery === '' ||
				user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.id.includes(searchQuery);

			const matchesAccountType =
				accountType === 'all' || user.accountType === accountType;
			const matchesStatus = status === 'all' || user.status === status;

			return matchesSearch && matchesAccountType && matchesStatus;
		});
	}, [searchQuery, accountType, status]);

	// Calculate pagination
	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
	const paginatedUsers = filteredUsers.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	// Reset to page 1 when filters change
	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	const handleAccountTypeChange = (value: string) => {
		setAccountType(value);
		setCurrentPage(1);
	};

	const handleStatusChange = (value: string) => {
		setStatus(value);
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleEdit = (user: User) => {
		console.log('Edit user:', user);
	};

	const handleMessage = (user: User) => {
		console.log('Message user:', user);
	};

	const handleDelete = (user: User) => {
		// In a real app, this would make an API call
		console.log('Delete user:', user);
	};

	return (
		<>
			<AdminNav />
			<main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background text-brand-primary overflow-auto">
				<div className="max-w-7xl mx-auto mb-12 sm:mb-16">
					<AdminUsersHeader />

					<AdminUsersFilters
						searchQuery={searchQuery}
						onSearchChange={handleSearchChange}
						accountType={accountType}
						onAccountTypeChange={handleAccountTypeChange}
						status={status}
						onStatusChange={handleStatusChange}
					/>

					<div className="space-y-4">
						<AdminUsersTable
							users={paginatedUsers}
							onEdit={handleEdit}
							onMessage={handleMessage}
							onDelete={handleDelete}
						/>

						<UsersPagination
							currentPage={currentPage}
							totalPages={totalPages}
							totalItems={filteredUsers.length}
							itemsPerPage={ITEMS_PER_PAGE}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
