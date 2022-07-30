import Head from 'next/head'
import styles from '../../../styles/container/profile-page-css/profile.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Basic_Profile from './component/Basic_Profile'

export default function Profile() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Profile</title>
      </Head>
      <Navbar/>
      <Filter/>
      <main className={styles.profile}>
        <div className={styles.basic_profile}>
          <Basic_Profile/>
        </div>
        <div className={styles.detailed_profile}><p>123</p></div>
        <div className={styles.adds_section}><p>123</p></div>
      </main>
      <Footer/>
    </>
  )
}