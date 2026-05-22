import { AdminSidebar } from '@/components/navbars/AdminSidebar';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex bg-neutral-950 h-screen">
			{/* Sidebar - Hidden on mobile, visible on lg+ */}
			<div className="hidden md:block">
				<AdminSidebar />
			</div>

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col overflow-hidden">{children}</div>
		</div>
	);
}
