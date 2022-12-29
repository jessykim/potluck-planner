import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })
  // const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleChangePhoto = (evt) => {
  //   setPhotoData({ photo: evt.target.files[0] })
  // }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, props.photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf} = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <>
      <main className={styles.container}>
      <h1>SIGN UP</h1>
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
          <div className="form-group mb-3">
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
          </div>
          <div className="form-group mb-3">
            <label htmlFor="photo-upload" className="form-label">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={props.handleChangePhoto}
            />
          </div>
          <button disabled={isFormInvalid()} className="btn btn-light btn-fluid">
            Sign Up
          </button>
          <Link to="/">
            <button className="btn btn-light btn-fluid">Cancel</button>
          </Link>
        </form>
      </main>
    </>
  )
}


export default SignupForm