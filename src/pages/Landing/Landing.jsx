import { Link } from "react-router-dom"
import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <>
      <main>
        {user ? 
        <h1 className="animate__animated animate__bounce">Hello, {user.name}!</h1>
        :
        <h1 className="animate__animated animate__bounce">Welcome to Potluck Planner!</h1>
        }
        <div className={styles.cards}>
          <Link to="/potlucks/add">
            <img src="./planpotluck.jpg" alt="girl planning event" className={styles.cardImg} />
            <p>plan your next potluck</p>
          </Link>
          <Link to="/potlucks">
            <img src="./potlucks.jpg" alt="potluck event" className={styles.cardImg} />
            <p>your collection of potlucks</p>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Landing