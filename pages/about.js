import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from "framer-motion"


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
        <motion.div id="headers"
          animate={{ y: -100 }}>
            <Link href="/">
            <h1>Constance Ingram</h1>
            </Link>
          <h2>Austin, Texas</h2>
          </motion.div>
          <div id="content">
            <p> Constance Ingram is a web developer from Austin, Texas.</p>
            <p>She holds a B. A. in History from The University of Texas at Austin (2015).</p>
            <p>She currently works as an Intellectual Property Analyst (Accenture @ Facebook).</p>
            <p>You can find her online here:</p>
          </div>
        </div>
      </main>

    </div>
  )
}
