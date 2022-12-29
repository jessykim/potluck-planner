import { Link } from "react-router-dom"
import styles from './Landing.module.css'

import { GiCookingPot } from 'react-icons/gi'
import { GrPlan } from 'react-icons/gr'
import { FaUtensilSpoon } from 'react-icons/fa'

const Landing = ({user}) => {
  return (
    <>
      <main>
        <div className={styles.icons}>
          <GrPlan />
          <GiCookingPot />
          <FaUtensilSpoon />
        </div>
        {user ? 
        <>
          <h1 className="animate__animated animate__bounce">Welcome to Potluck Planner, {user.name}!</h1>
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
        </>
        :
        <>
          <h1 className="animate__animated animate__bounce">Welcome to Potluck Planner!</h1>
          <div className={styles.cards}>
            <Link to="/login">
              <img src="./profiles.jpg" alt="profile avatars" className={styles.cardImg} />
              <p>have an account? log in here!</p>
            </Link>
            <Link to="/signup">
              <img src="./potluckparty.jpg" alt="potluck party" className={styles.cardImg} />
              <p>sign up & get potluckin'!</p>
            </Link>
          </div>
        </>
        }
      </main>
    </>
  )
}

export default Landing