'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Edit2, MessageCircle, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

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

interface AdminUsersTableProps {
	users: User[];
	onEdit: (user: User) => void;
	onMessage: (user: User) => void;
	onDelete: (user: User) => void;
}

export function AdminUsersTable({
	users,
	onEdit,
	onMessage,
	onDelete,
}: AdminUsersTableProps) {
	// const { toast } = useToast();

	const getStatusIndicator = (status: string) => {
		switch (status) {
			case 'active':
				return 'bg-green-500';
			case 'suspended':
				return 'bg-red-500';
			case 'inactive':
				return 'bg-gray-400';
			default:
				return 'bg-gray-400';
		}
	};

	const getAccountTypeBadgeColor = (type: string) => {
		return type === 'institutional'
			? 'bg-blue-100 text-blue-800'
			: 'bg-purple-100 text-purple-800';
	};

	const handleDelete = (user: User) => {
		toast.success('User Deleted', {
			description: `${user.name} has been deleted from the system.`,
		});
		onDelete(user);
	};

	const handleMessage = (user: User) => {
		toast.success('Message Sent', {
			description: `Message window opened for ${user.name}.`,
		});
		onMessage(user);
	};

	const handleEdit = (user: User) => {
		toast('Edit User', {
			description: `Opening edit dialog for ${user.name}.`,
		});
		onEdit(user);
	};

	return (
		<div className="overflow-x-auto rounded-lg border border-border bg-card">
			<Table>
				<TableHeader>
					<TableRow className="border-border hover:bg-transparent">
						<TableHead className="text-xs font-semibold uppercase tracking-wider">
							User Name
						</TableHead>
						<TableHead className="text-xs font-semibold uppercase tracking-wider">
							Account Type
						</TableHead>
						<TableHead className="text-right text-xs font-semibold uppercase tracking-wider">
							Balance
						</TableHead>
						<TableHead className="text-xs font-semibold uppercase tracking-wider">
							Status
						</TableHead>
						<TableHead className="text-xs font-semibold uppercase tracking-wider">
							Last Login
						</TableHead>
						<TableHead className="text-xs font-semibold uppercase tracking-wider">
							Actions
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id} className="border-border hover:bg-muted/50">
							<TableCell className="py-4">
								<div className="flex items-center gap-3">
									<Avatar className="h-8 w-8">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback className="bg-muted text-foreground">
											{user.initials}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium text-foreground">{user.name}</p>
										<p className="text-xs text-muted-foreground">
											{user.email}
										</p>
									</div>
								</div>
							</TableCell>
							<TableCell>
								<Badge
									variant="outline"
									className={getAccountTypeBadgeColor(user.accountType)}
								>
									{user.accountType.charAt(0).toUpperCase() +
										user.accountType.slice(1)}
								</Badge>
							</TableCell>
							<TableCell className="text-right font-semibold text-foreground">
								$
								{user.balance.toLocaleString('en-US', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<span
										className={`h-2 w-2 rounded-full ${getStatusIndicator(user.status)}`}
									/>
									<span className="text-sm capitalize text-foreground">
										{user.status}
									</span>
								</div>
							</TableCell>
							<TableCell className="text-sm text-muted-foreground">
								{user.lastLogin}
							</TableCell>
							<TableCell>
								<div className="flex gap-2">
									<Button
										variant="ghost"
										size="sm"
										className="hover:bg-muted"
										onClick={() => handleEdit(user)}
										title="Edit user"
									>
										<Edit2 className="h-4 w-4 text-foreground" />
									</Button>

									<Button
										variant="ghost"
										size="sm"
										className="hover:bg-muted"
										onClick={() => handleDelete(user)}
										title="Delete user"
									>
										<Trash2 className="h-4 w-4 text-foreground" />
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
