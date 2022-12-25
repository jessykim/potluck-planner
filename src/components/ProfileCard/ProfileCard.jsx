import { Link } from "react-router-dom"
import styles from './ProfileCard.module.css'
import { CiUser } from 'react-icons/ci'

const ProfileCard = ({ profile }) => {
  return (
    <>
      <Link to={`/profiles/${profile._id}`}>
        <article className={styles.container}>
          {profile.photo ? <img src={profile.photo} alt="profile" /> : <div><CiUser /></div>}
            <h1 className={styles.username}>{profile.name}</h1>    
        </article>
      </Link>
    </>
  )
}

export default ProfileCard