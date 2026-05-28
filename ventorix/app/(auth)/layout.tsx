import FooterAuth from '@/components/footerauth';
import AuthNavbar from '@/components/navbars/AuthNavbar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen flex flex-col">
			<AuthNavbar />
			<main className="flex-1">{children}</main>

			<FooterAuth />
		</div>
	);
}
