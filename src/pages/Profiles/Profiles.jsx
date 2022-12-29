import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

import { RiUserSmileLine } from 'react-icons/ri'
import { GiThreeFriends } from 'react-icons/gi'
import { BiHomeHeart } from 'react-icons/bi'

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
        <div className={styles.icons}>
          <RiUserSmileLine />
          <GiThreeFriends />
          <BiHomeHeart />
        </div>
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