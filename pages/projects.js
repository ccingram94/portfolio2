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
        <motion.div
          animate={{ y: -100 }}>
            <Link href="/">
            <h1>Constance Ingram</h1>
            </Link>
          <h2>Austin, Texas</h2>
          <hr></hr>
          </motion.div>
          <div id="buttons">
            <Link href="/resume">
            <button>Resume</button>
            </Link>
            <Link href="/projects">
            <button>Projects</button>
            </Link>
            <Link href="/about">
            <button>About</button>
            </Link>
          </div>
        </div>
      </main>

    </div>
  )
}
