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
      <section className={styles.diet}>
        <div>
          <h5>Allergies</h5> 
          {profile.allergies ? <li>{profile.allergies}</li> : <li>None</li>}
        </div>
        <div>
          <h5>Dietary Preferences/Restrictions</h5>
          {profile.dietpref ? <li>{profile.dietpref}</li> : <li>None</li>}
        </div>
      </section>
    </main>
  )
}

export default ProfileDetails