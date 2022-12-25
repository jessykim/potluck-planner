import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <h1>Hi</h1>
  )
}

export default ProfileDetails