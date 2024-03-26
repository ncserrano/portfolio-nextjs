import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://www.naralyserrano.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/nari_italic_logo.png"
              alt="Naraly Serrano's Logo"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/placeholder.png"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
      </div>



      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tangy Frederick's Personal Site <span>-&gt;</span>
          </h2>
          <p>Designed a site that visually shares the clients professional story.</p>
        </a>

        <Link href="/proj_mitrealityhack" className={styles.card}>
        <h2>
          MIT Reality Hack <span>-&gt;</span>
        </h2>
        <p>Explored new technologies at the world premier AR/VR hackathon.</p>
       </Link>


        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            MCS Site Refresh <span>-&gt;</span>
          </h2>
          <p>Designed the UI to improve client's goals. </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          Portfolio Launch <span>-&gt;</span>
          </h2>
          <p>
            Designed, developed, and deployed a site showcasing my design and dev skills.  
          </p>
        </a>
      </div>
    </main>
  );
}
