import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './EditProfileForm.module.css'
import * as profileService from '../../services/profileService'


const EditProfileForm = ({user, photoData, setPhotoData, handleChangePhoto}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    // password: '',
    // passwordConf: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await profileService.update( user.profile, formData, photoData.photo)
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  const { name, email
    // , password, passwordConf
  } = formData

  const isFormInvalid = () => {
    return !(name && email 
      // && password && password === passwordConf
    )
  }

  return (
    <>
      <main className={styles.container}>
      <h1>Edit Profile</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name-input"
              value={name}
              name="name"
              onChange={handleChange}
              // placeholder=""
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email-input" className="form-label">
              Email
            </label>
            <input
              type="text"
              autoComplete="off"
              id="email-input"
              value={email}
              name="email"
              onChange={handleChange}
              // placeholder=""
            />
          </div>
          {/* <div className="form-group mb-3">
            <label htmlFor="password-input" className="form-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="password-input"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="******"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirm-label" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="confirm-input"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
              placeholder="******"
            />
          </div> */}
          <div className="form-group mb-3">
            <label htmlFor="photo-upload" className="form-label">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={handleChangePhoto}
            />
          </div>
          <button disabled={isFormInvalid()} className="btn btn-light btn-fluid">
            Update Profile Information
          </button>
          <Link to="/">
            <button className="btn btn-light btn-fluid">Cancel</button>
          </Link>
        </form>
      </main>
    </>
  )
}


export default EditProfileForm