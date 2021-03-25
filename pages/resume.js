import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="overlay"></div>

      <main className={styles.main}>
        <motion.div>
          <motion.div
          animate={{ y: -100 }}>
            <Link href="/">
            <h1>Constance Ingram</h1>
            </Link>
          <h2>Austin, Texas</h2>
          <hr></hr>
          <h2>Education</h2>
          <p>Bachelor of Arts, History</p>
          <p><i>The University of Texas at Austin</i></p>
          <p><i>(2012 - 2015)</i></p>
          <br></br>
          <br></br>
          <h2>Experience</h2>
          <p>Intellectual Property Analyst</p>
          <p><i>Accenture @ Facebook (2019 - current)</i></p>
          
          <br></br>
          <p>Novelist and Freelance Writer</p>
          <p><i>Sterling Content LLC (2013 - 2019)</i></p>
          <br></br>
          </motion.div>
        </motion.div>
      </main>

    </div>
  )
}
