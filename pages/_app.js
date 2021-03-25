import '../styles/globals.css'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <motion.div
        initial={{ opacity : 0 }}
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimateSharedLayout>

    )
}

export default MyApp
