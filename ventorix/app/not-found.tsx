import { PublicNavbar } from '@/components/navbars/PublicNavbar';
import React from 'react';
const Notfound = () => {
	return (
		<div className="bg-background min-h-screen">
			<PublicNavbar />
			<main className="text-brand-primary font-bold m-auto text-center py-44 text-base md:text-lg lg:text-2xl">
				Page not found
			</main>
		</div>
	);
};

export default Notfound;
