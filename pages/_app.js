import '../styles/globals.css'
import Navbar from 'components/layout/navbar';
import Provider from 'store/globalstate';
import Notify from 'components/layout/notify';
import StartUp from 'components/startup';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Note</title>
      </Head>
      <StartUp>
        <Navbar />
        <Notify />
        <Component {...pageProps} />
      </StartUp>
    </Provider>
  )
}

export default MyApp
