
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 >Hello world!! </h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h2> This is vithushan </h2>
      <h3> This is the best outfit </h3>

      <button className="dark:md:hover:bg-fuchsia-600 ...">
        Save changes
      </button>

      <button className="bg-violet-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
    </div>
  )
}
