import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Herosection from './src/components/herosection';
import Featuresection from './src/components/features';
import Optionsection from './src/components/options';
import Frequently from './src/components/frequently';
import Downloadsection from './src/components/download';
import Footer from './src/components/Footer'
import 'antd/dist/antd.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QuadReal+</title>
        <meta name="description" content="quadreal+ website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      <Featuresection />
      <Optionsection />
      <Frequently />
      <Downloadsection />
      <Footer />
    </div>
  )
}
