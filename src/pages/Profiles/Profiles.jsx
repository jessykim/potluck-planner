import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    const fetchProfiles = async () => {
      const profileData = await profileService.index()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <main className={styles.container}>
        <h1>Potluckers</h1>
        {profiles.length ? 
          <>
            {profiles.map((profile) =>
              <ProfileCard key={profile._id} profile={profile} />
            )}
          </>
        :
          <p>No Profiles Added</p>
        }
      </main>
    </>
  )
}

export default Profiles