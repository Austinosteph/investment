import { Activity } from 'lucide-react';
import ActivityCard from './ActivityCard';

interface TimelineActivity {
	id: number;
	date: string;
	title: string;
	description: string;
	amount: number;
	status: string;
	icon: string;
	accent: boolean;
}

interface ActivityTimelineProps {
	activities: TimelineActivity[];
}

const ICON_MAPPING: Record<string, React.ReactNode> = {
	investment: (
		<Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-dark-green" />
	),
	growth: (
		<Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-light-blue" />
	),
	deposit: (
		<Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-light-green" />
	),
	verification: (
		<Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500" />
	),
};

export default function ActivityTimeline({
	activities,
}: ActivityTimelineProps) {
	let currentDate = '';

	return (
		<div className="space-y-0">
			{activities.map((activity, index) => {
				const showDateHeader = activity.date !== currentDate;
				if (showDateHeader) currentDate = activity.date;

				return (
					<div key={activity.id}>
						{showDateHeader && (
							<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6 ml-12 sm:ml-16">
								{activity.date}
							</div>
						)}
						<div className="flex gap-0 mb-4 sm:mb-6 relative">
							{/* Timeline line */}
							<div className="relative">
								<div className="w-8 sm:w-12 flex justify-center pt-2">
									<div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-neutral-700">
										{ICON_MAPPING[activity.icon] || ICON_MAPPING.investment}
									</div>
								</div>
								{index !== activities.length - 1 && (
									<div className="absolute left-1/2 top-8 sm:top-12 w-0.5 h-16 sm:h-20 bg-neutral-700 -translate-x-1/2" />
								)}
							</div>

							{/* Content */}
							<ActivityCard activity={activity} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
