import AuthNavbar from '@/components/navbars/AuthNavbar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AuthNavbar />
			{children}
		</>
	);
}
