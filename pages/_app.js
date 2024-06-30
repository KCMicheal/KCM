import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  Sidebar from '../components/sidebar.js';
import '../styles/globals.css';
import Layout from '../components/layout.js';
import { AnimatePresence } from 'framer-motion';
import NextTopLoader from 'nextjs-toploader';
import { MultiStepLoader as Loader, loadingStates } from '../components/multi-step-loader.tsx';
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [10000]);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return ( 
    <>
    <ThemeProvider attribute='class'>
      <Loader loadingStates={loadingStates} loading={loading} duration={900} loop={false} />
    </ThemeProvider>
    </>
    )
  }

  return (
    <>
      <ThemeProvider attribute='class'>
        <AnimatePresence mode="wait" initial="false">
          <Layout>
            <Sidebar currentPage={router.pathname} />
            <NextTopLoader color="#fe4500"
              initialPosition={0.08}
              crawlSpeed={200}
              height={5}
              crawl={false}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
    <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false} />
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </>
    )
  }