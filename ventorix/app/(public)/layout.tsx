import { PublicNavbar } from '@/components/navbars/PublicNavbar';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PublicNavbar />
			{children}
		</>
	);
}
