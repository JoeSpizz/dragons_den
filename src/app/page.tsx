import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.siteContainer}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Dragon’s Den Games</h1>
        </header>

        <div className={styles.spacer} />

        <div className={styles.cards}>
          <Link href="/tcg" className={`${styles.card} ${styles.cardLarge}`}>
            <Image src="/icons/tcg_logo.png" alt="TCG" width={80} height={80} />
            <span>Trading Card Games</span>
          </Link>
          <Link href="/minis" className={styles.card}>
            <Image src="/icons/mini_logo.png" alt="Minis" width={64} height={64} />
            <span>Tabletop Miniatures</span>
          </Link>
          <Link href="/plushies" className={styles.card}>
            <Image src="/icons/plushie_logo.png" alt="Plushies" width={64} height={64} />
            <span>Plushies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
