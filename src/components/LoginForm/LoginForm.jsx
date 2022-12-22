import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <>
      <main className={styles.container}>
        <h1>LOG IN</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="email-input" className="form-label">
              Email
            </label>
            <input
              type="text"
              autoComplete="off"
              id="email-input"
              value={formData.email}
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
              value={formData.pw}
              name="pw"
              onChange={handleChange}
              // placeholder=""
            />
          </div>
          <button className="btn btn-light btn-fluid">Login</button>
          {/* <Link to="/">
            <button className="btn btn-light btn-fluid">Cancel</button>
          </Link> */}
        </form>
      </main>
    </>
  )
}

export default LoginForm
