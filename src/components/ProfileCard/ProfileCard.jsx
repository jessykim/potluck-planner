import { Link } from "react-router-dom"
import styles from './ProfileCard.module.css'
import { CiUser } from 'react-icons/ci'

const ProfileCard = ({ profile }) => {
  return (
    <>
      <Link to={`/profiles/${profile._id}`}>
        <article className={styles.container}>
          {profile.photo ? <div><img src={profile.photo} alt="profile" id={styles.profileImg} /></div> : <div><CiUser /></div>}
            <h2 className={styles.username}>{profile.name}</h2>    
        </article>
      </Link>
    </>
  )
}

export default ProfileCard