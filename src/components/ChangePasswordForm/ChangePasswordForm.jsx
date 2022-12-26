import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import * as authService from '../../services/authService'

const ChangePasswordForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <>
      <main className={styles.container}>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="newPassword"
              value={newPw}
              name="newPw"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="newPasswordConf" className="form-label">
              Confirm New Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="newPasswordConf"
              value={newPwConf}
              name="newPwConf"
              onChange={handleChange}
            />
          </div>
          <button disabled={isFormInvalid()} className="btn btn-light btn-fluid">
            Change Password
          </button>
          <Link to="/">
            <button className="btn btn-light btn-fluid">Cancel</button>
          </Link>
        </form>
      </main>
    </>
  )
}

export default ChangePasswordForm
