import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditProfile.module.css'

import * as profileService from '../../services/profileService'

const EditProfile = ({ user, photoData, setPhotoData }) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { id } = useParams()

  const [profileForm, setProfileForm] = useState({
    name: state.name,
    photo: state.photo || '',
    allergies: state.allergies || '',
    dietpref: state.dietpref || '',
    potlucks: state.potlucks || []
  })

  const handleChange = ({ target }) => {
    setProfileForm({ ...profileForm, [target.name]: target.value })
  }

  // const handleUpdatePhoto = async (evt) => {
  //   setPhotoData({ photo: evt.target.files[0] })
  //   console.log(photoData)
  // }

  // const handleChangePhoto = ({ target }) => {
  //   setProfileForm({ ...profileForm}, [target.name]: target.value)
  //   console.log(...profileForm)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await profileService.updatePhoto(id, photoData)
    await profileService.update(id, profileForm)
    navigate(`/profiles/${id}`)
  }

  return (
    <>
      <main className={styles.container}>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.editForm}>
          {/* <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input 
              type="text"
              id="name-input"
              name="name"
              value={profileForm.name}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group mb-3">
            <label htmlFor="allergies-input" className="form-label">
              Allergies
            </label>
            <input 
              type="text"
              id="allergies-input"
              name="allergies"
              value={profileForm.allergies}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="dietpref-input" className="form-label">
              Dietary Preferences/Restrictions
            </label>
            <select 
              type="text"
              id="dietpref-input"
              name="dietpref"
              value={profileForm.dietpref}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="Dairy-Free">Dairy-Free</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Lactose-Free">Lactose-Free</option>
              <option value="Nut-Free">Nut-Free</option>
              <option value="Soy-Free">Soy-Free</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* <div className="form-group mb-3">
            <label htmlFor="photo-upload" className="form-label">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={handleUpdatePhoto}
            />
          </div> */}
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

export default EditProfile