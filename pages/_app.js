import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
      <motion.div
        initial={{ opacity : 0 }}
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    )
}

export default MyApp
