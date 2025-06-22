// custom imports
import Hero from '@/components/others/Hero';
import Navbar from '@/components/others/Navbar';
import styles from '@/src/page.module.css';

export default function Home() {
	return (
		<div className={styles.containerPage}>
			<Navbar />
			<Hero />
		</div>
	);
}
