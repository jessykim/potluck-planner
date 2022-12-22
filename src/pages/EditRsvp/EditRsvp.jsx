import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styles from './EditRsvp.module.css'

import * as potluckService from '../../services/potluckService'

const EditRsvp = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { potluckId, rsvpId } = useParams()
  const [rsvpForm, setRsvpForm] = useState(state)

  const handleChange = ({ target }) => {
    setRsvpForm({ ...rsvpForm, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await potluckService.updateRsvp(potluckId, rsvpId, rsvpForm)
    navigate(`/potlucks/${potluckId}`)
  }

  return (
    <>
      <main className={styles.container}>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.editForm}>
          <div className="form-group mb-3">
            <label htmlFor="party-input" className="form-label">
              Party of
            </label>
            <input 
              type="number" 
              id="party-input"
              name="party"
              value={rsvpForm.party}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="notes-input" className="form-label">
              Additional Notes
            </label>
            <textarea
              type="text"
              name="notes"
              id="notes-input"
              value={rsvpForm.notes}
              placeholder="Optional"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="rsvp-input" className="form-label">
              RSVP
            </label>
            <select 
              name="rsvp" 
              id="rsvp-input"
              value={rsvpForm.rsvp}
              onChange={handleChange}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
          </div>
          <button type="submit" className="btn btn-light btn-fluid">Submit</button>
        </form>
      </main>
    </>
  )
}

export default EditRsvp