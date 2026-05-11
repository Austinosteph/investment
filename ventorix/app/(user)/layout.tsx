import { Sidebar } from '@/components/navbars/Sidebar';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex bg-neutral-950 h-screen">
			{/* Sidebar - Hidden on mobile, visible on lg+ */}
			<div className="hidden md:block">
				<Sidebar />
			</div>

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col overflow-hidden">{children}</div>
		</div>
	);
}
