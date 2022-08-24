import type { NextPage } from 'next'
import IconWrapper from '../components/IconWrapper'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <IconWrapper />
      <div className={styles.landing_wrapper}>
        <h1 className={styles.heading}>Celebrate your biggest achievements On-Chain</h1>
      </div>
    </div>
  )
}

export default Home
