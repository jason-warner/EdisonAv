import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
// import homeStyles from '../styles/components/Home.module.css';
// import '../styles/scss/base.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="viewport" content="min-width=320" /> */}
      </Head>
      <Navbar />
      <section>
        <header>
          {/* <h1 className={homeStyles.logo}>Edison Av</h1> */}
        </header>
        <main>
          
        </main>
        <footer>
          {/* Made by Jason W. */}
        </footer>
      </section>
    </div>
  )
}
