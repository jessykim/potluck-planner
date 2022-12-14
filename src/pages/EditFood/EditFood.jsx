import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styles from './EditFood.module.css'

import * as potluckService from '../../services/potluckService'

const EditFood = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { potluckId, foodId } = useParams()
  const [foodForm, setFoodForm] = useState(state)

  const handleChange = ({ target }) => {
    setFoodForm({ ...foodForm, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await potluckService.updateFood(potluckId, foodId, foodForm)
    navigate(`/potlucks/${potluckId}`)
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.editForm}>
          <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input 
              type="text" 
              id="name-input"
              name="name"
              value={foodForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="type-input" className="form-label">
              Type
            </label>
            <select 
              name="type" 
              id="type-input"
              value={foodForm.type}
              onChange={handleChange}
              required
            >
              <option value="Main">Main</option>
              <option value="Side">Side</option>
              <option value="Dessert">Dessert</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="notes-input" className="form-label">
              Additional Notes
            </label>
            <textarea
              type="text"
              name="notes"
              id="notes-input"
              value={foodForm.notes}
              placeholder="Optional"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-light btn-fluid">Submit</button>
        </form>
      </main>
    </>
  )
}

export default EditFood