import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Constance Ingram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="overlay"></div>
      <motion.main 
      className={styles.main}
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        <div id="headers">
          <h1>Constance Ingram</h1>
          <h2>web developer in Austin, Texas</h2>
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
      </motion.main>
      </div>
  )
}
