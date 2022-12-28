import styles from './Logout.module.css'

const Logout = () => {
  return (
    <main className={styles.container}>
      <h1 className="animate__animated animate__bounce">Until next time!</h1>
      <img src="/goodbye.jpg" alt="people waving" id={styles.goodbyeImg} />
    </main>
  )
}

export default Logout