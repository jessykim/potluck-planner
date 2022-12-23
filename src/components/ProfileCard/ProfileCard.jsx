// import { Link } from "react-router-dom"
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  // const start = new Date(potluck.start).toLocaleDateString()
  // const starttime = new Date(potluck.start).toLocaleTimeString()
  console.log(profile)
  return (
    <>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{profile.name}</h1>
          </span>
        </header>
      </article>
    </>
    // <Link to={`/potlucks/${potluck._id}`}>
      // <article className={styles.container}>
      //   <header>
      //     <span>
      //       <h1>{potluck.name}</h1>
      //     </span>
      //   </header>
      //   <p>{start} at {starttime}</p>
      //   <p>{potluck.location}</p>
      // </article>
    // </Link>
  )
}

export default ProfileCard