import styles from './Login.module.css'

export default function login() {
    return (
      <div  className={styles.container} >
        <h1> Login Page </h1>
        <label> Name </label>

        <input type="name"/> <br/>
        <label> Email </label>
        <input type="email"/> <br/>

        <label> Password </label>
        <input type="password"/> <br/>

        <button> Submit </button>
      </div>
    )
  }