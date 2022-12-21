import { useState } from 'react'
import styles from './RsvpForm.module.css'

const RsvpForm = (props) => {
  const [rsvpForm, setRsvpForm] = useState({
    party: '',
    notes: '',
    rsvp: 'Yes'
  })

  const handleChange = ({ target }) => {
    setRsvpForm({ ...rsvpForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddRsvp(rsvpForm)
    setRsvpForm({
      party: '',
      notes: '',
      rsvp: 'Yes'
    })
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        {/* <h1>{props.user.name}</h1> */}
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
    </>
  )
}

export default RsvpForm