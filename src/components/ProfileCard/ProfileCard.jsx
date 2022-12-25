// import { Link } from "react-router-dom"
import styles from './ProfileCard.module.css'
import { CiUser } from 'react-icons/ci'

const ProfileCard = ({ profile }) => {
  return (
    <>
      <article className={styles.container}>
        {profile.photo ? <img src={profile.photo} alt="profile" /> : <CiUser />}
          <h1 className={styles.username}>{profile.name}</h1>    
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