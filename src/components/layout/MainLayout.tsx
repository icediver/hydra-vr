import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
