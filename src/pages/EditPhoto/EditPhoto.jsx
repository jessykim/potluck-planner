// import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
// import styles from './EditProfile.module.css'

import * as profileService from '../../services/profileService'

const EditPhoto = (props) => {
  const navigate = useNavigate()
  // const { state } = useLocation()
  const { id } = useParams()

  // const [profileForm, setProfileForm] = useState({
  //   name: state.name,
  //   photo: state.photo || '',
  //   allergies: state.allergies || '',
  //   dietpref: state.dietpref || '',
  //   potlucks: state.potlucks || []
  // })

  // const handleChange = ({ target }) => {
  //   setProfileForm({ ...profileForm, [target.name]: target.value })
  // }

  // const handleUpdatePhoto = async (evt) => {
  //   setPhotoData({ photo: evt.target.files[0] })
  // }

  // const handleChangePhoto = ({ target }) => {
  //   setProfileForm({ ...profileForm}, [target.name]: target.value)
  //   console.log(...profileForm)
  // }
  // console.log(props.photoData, 'PHOTO DATA')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await profileService.updatePhoto(id, props.photoData)
    navigate(`/profiles/${id}`)
  }

  return (
    <>
      <main>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="photo-upload" className="form-label">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={props.handleUpdatePhoto}
            />
          </div>
          <button
            type="submit"
            className="btn btn-light btn-fluid"
          >
            Save Changes
          </button>
        </form>
      </main>
    </>
  )
}

export default EditPhoto