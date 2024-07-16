import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  Sidebar from '../components/sidebar.js';
import '../styles/globals.css';
import Layout from '../components/layout.js';
import { AnimatePresence } from 'framer-motion';
import NextTopLoader from 'nextjs-toploader';
import { MultiStepLoader as Loader, loadingStates } from '../components/multi-step-loader.tsx';
import { ThemeProvider } from "next-themes"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [11000]);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return ( 
    <>
    <ThemeProvider attribute='class' defaultTheme="system">
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} loop={false} />
    </ThemeProvider>
    </>
    )
  }

  return (
    <>
      <ThemeProvider attribute='class' defaultTheme="system">
        <AnimatePresence mode="wait" initial="false">
          <Layout>
            <Sidebar currentPage={router.pathname} />
            <NextTopLoader color="#E24329'"
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
            <Analytics />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </>
    )
  }