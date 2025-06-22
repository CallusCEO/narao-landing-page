// custom imports
import AboutScreen from '@/components/others/AboutScreen';
import Navbar from '@/components/others/Navbar';
import styles from '@/src/page.module.css';

export default function About() {
	return (
		<div className={styles.containerPage}>
			<Navbar />
			<AboutScreen />
		</div>
	);
}
