import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import styles from './ProfileDetails.module.css'

// Components
import Loading from '../Loading/Loading'

// Services
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {
  const [profile, setProfile] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])

  if (!profile) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header className={styles.profileHeader}>
          {profile.photo ? <img src={profile.photo} alt="profile" /> : <div><CiUser /></div>}
          <h1 className={styles.username}>{profile.name}</h1>
        </header>
      </article>
      {profile._id === props.user.profile &&
        <div className={styles.btns}>
          <Link to={`/profiles/${id}/edit`} state={profile}><button>Edit</button></Link>
          {/* <button onClick={() => props.handleDeleteProfile(id)}>Delete</button> */}
        </div>
      }
      <section>
        <p>Allergies: {profile.allergies}</p>
        <p>Dietary Preferences/Restrictions: {profile.dietpref}</p>
      </section>
    </main>
  )
}

export default ProfileDetails