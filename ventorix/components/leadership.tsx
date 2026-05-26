'use client';

import Image from 'next/image';

const team = [
	{
		name: 'Marcus Vance',
		title: 'Chief Managing Director',
		bio: 'Stanford, 20+ years in quantitative finance and digital assets.',
		image: '/managingdir.jpeg',
	},
	{
		name: 'Dr. Elena Bobkova',
		title: 'Chief Strategy Officer',
		bio: 'MIT, PhD in Computational Finance. Former Head of Trading.',
		image: '/strategy.jpeg',
	},
	{
		name: 'Susan Wojcicki',
		title: 'Head Brand Ambassador',
		bio: 'Specialized in brand promotion and audience engagment',
		image: '/complience.jpeg',
	},
	{
		name: 'John Colasanti',
		title: 'Chief Technology Officer',
		bio: 'Carnegie Mellon, 15 years building scalable crypto infrastructure.',
		image: '/tech.jpg',
	},
];

export function Leadership() {
	return (
		<section className="w-full mt-16 md:mt-20 lg:mt-24 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto space-y-8 md:space-y-10 lg:space-y-12">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center md:text-left">
					Executive Leadership
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
					{team.map((member, index) => (
						<div key={index} className="space-y-3 md:space-y-4">
							<div className="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full rounded-lg overflow-hidden">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-center"
								/>
								<div className="absolute inset-0 flex items-end justify-start p-3 md:p-4">
									<div className="space-y-1 bg-brand-primary p-2 md:p-3">
										<p className="text-xs sm:text-sm text-brand-secondary">
											{member.title}
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-1 md:space-y-2">
								<h3 className="font-semibold text-foreground text-base md:text-lg lg:text-xl">
									{member.name}
								</h3>

								<p className="text-xs sm:text-sm text-brand-primary leading-relaxed">
									{member.bio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
