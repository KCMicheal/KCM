import { useRouter } from 'next/router'
import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import Layout from '@/components/layout';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <AnimatePresence mode="wait" initial="false">
        <Layout>
          <Sidebar currentPage={router.pathname} />
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
    )
  }