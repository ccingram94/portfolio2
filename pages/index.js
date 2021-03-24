import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="overlay"></div>

      <main className={styles.main}>
        <div>
          <h1>Constance Ingram</h1>
          <h2>is a web developer in Austin, Texas</h2>
          <div id="buttons">
            <button>Resume</button>
            <button>Projects</button>
            <button>About</button>
          </div>
        </div>
      </main>

    </div>
  )
}
