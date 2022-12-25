import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  console.log(profile)

  return (
    <main className={styles.container}>
      <article>
        <header>
          {profile.photo ? <img src={profile.photo} alt="profile" /> : <div><CiUser /></div>}
          <h1>{profile.name}</h1>
          {/* <span>
            Hosted by {potluck.host.name}
          </span> */}
        </header>
      </article>
    </main>
  )
}

export default ProfileDetails