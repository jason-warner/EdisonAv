import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{minHeight: "100vh", minWidth: "100vw"}}>
        <header>
          <h1 className={styles.logo}>Edison Av</h1>
        </header>
        <nav>
          <ul  style={{textAlign: "right"}}>
              <li style={{float: "left"}} className={styles.logo}>Edison Av</li>
              <li key="1">nav 1 </li>
              <li key="2">nav 2</li>
              <li key="3">nav 3</li>
            </ul>
        </nav>
        <main>
          <button>Diza button</button> 
        </main>
        <footer>
          Made by Jason W.
        </footer>
      </section>
    </div>
  )
}
