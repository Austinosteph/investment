import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex items-center justify-center px-4 sm:px-6 py-24 sm:py-20">
			<SignUp signInUrl="/sign-in" />
		</div>
	);
}
