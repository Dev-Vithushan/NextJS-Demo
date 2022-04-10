import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello world!! </h1>
      <h2> This is vithushan </h2>
      <h3> This is the best outfit </h3>
    </div>
  )
}
