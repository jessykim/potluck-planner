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
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>{props.user.name}</h1>
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EditRsvp