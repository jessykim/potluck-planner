import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditPotluck.module.css'

const EditPotluck = (props) => {
  const { state } = useLocation()
  const [potluckForm, setPotluckForm] = useState(state)

  const handleChange = ({ target }) => {
    setPotluckForm({ ...potluckForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdatePotluck(potluckForm)
  }

  return (
    <>
      <main className={styles.container}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Potluck Name
            </label>
            <input 
              type="text"
              id="name-input"
              name="name"
              value={potluckForm.name}
              onChange={handleChange}
              placeholder="Friendsgiving"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="start-input" className="form-label">
              Begins
            </label>
            <input 
              type="datetime-local"
              id="start-input"
              name="start"
              value={potluckForm.start}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Ends
            </label>
            <input 
              type="datetime-local"
              id="end-input"
              name="end"
              value={potluckForm.end}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="location-input" className="form-label">
              Location
            </label>
            <input 
              type="text"
              id="location-input"
              name="location"
              value={potluckForm.location}
              onChange={handleChange}
              placeholder="123 First St."
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description-input" className="form-label">
              Description
            </label>
            <input 
              type="text"
              id="description-input"
              name="description"
              value={potluckForm.description}
              onChange={handleChange}
            />
          </div>
          {/* <div className="d-grid"> */}
          <button
            type="submit"
            className="btn btn-light btn-fluid"
          >
            Save Changes
          </button>
          {/* </div> */}
        </form>
      </main>
    </>
  )
}

export default EditPotluck