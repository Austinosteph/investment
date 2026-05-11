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
							? 'bg-brand-dark-green text-brand-text-green'
							: 'bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white'
					}`}
				>
					{tab === 'all' ? 'All Activity' : tab}
				</button>
			))}
		</div>
	);
}
