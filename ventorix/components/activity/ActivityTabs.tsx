interface ActivityTabsProps {
	activeTab: string;
	onTabChange: (tab: string) => void;
}

const TABS = ['all', 'investments', 'credits', 'pending'];

export default function ActivityTabs({
	activeTab,
	onTabChange,
}: ActivityTabsProps) {
	return (
		<div className="flex gap-1 sm:gap-2 flex-wrap">
			{TABS.map((tab) => (
				<button
					key={tab}
					onClick={() => onTabChange(tab)}
					className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all capitalize text-xs sm:text-sm ${
						activeTab === tab
							? 'bg-brand-primary text-brand-secondary'
							: 'bg-brand-secondary text-brand-primary border border-brand-primary font-bold hover:bg-brand-primary/90 hover:text-brand-secondary'
					}`}
				>
					{tab === 'all' ? 'All Activity' : tab}
				</button>
			))}
		</div>
	);
}
