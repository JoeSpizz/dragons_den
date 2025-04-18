import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.siteContainer}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <header className={styles.header}>
        <h1 className={styles.headerTitle}>
  Dragon’s Den
  {"\n"}
  Games
</h1>
        </header>



        <div className={styles.cards}>
          <Link href="/tcg" className={`${styles.card} ${styles.cardLarge}`}>
            <Image src="/icons/tcg_icon.png" alt="TCG" width={150} height={150} />
            <span>Trading Card Games</span>
          </Link>
          <Link href="/minis" className={`${styles.card} ${styles.cardSmall}`} >
            <Image src="/icons/mini_icon.png" alt="Minis" width={135} height={135} />
            <span>Tabletop Miniatures</span>
          </Link>
          <Link href="/plushies" className={`${styles.card} ${styles.cardSmall}`}>
            <Image src="/icons/plushie_icon.png" alt="Plushies" width={135} height={135} />
            <span>Plushies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
