import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styles from './EditItem.module.css'

import * as potluckService from '../../services/potluckService'

const EditItem = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { potluckId, itemId } = useParams()
  const [itemForm, setItemForm] = useState(state)

  const handleChange = ({ target }) => {
    setItemForm({ ...itemForm, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await potluckService.updateItem(potluckId, itemId, itemForm)
    navigate(`/potlucks/${potluckId}`)
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.editForm}>
          <div className="form-group mb-3">  
            <label htmlFor="name-input" className="form-label">
              Item
            </label>
            <input 
              type="text" 
              id="name-input"
              name="name"
              value={itemForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">

            <label htmlFor="category-input" className="form-label">
              Category
            </label>
            <select 
              name="category" 
              id="category-input"
              value={itemForm.category}
              onChange={handleChange}
              required
            >
              <option value="Bowls/Plates">Bowls/Plates</option>
              <option value="Cups">Cups</option>
              <option value="Decorations">Decorations</option>
              <option value="Utensils">Utensils</option>
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
              value={itemForm.notes}
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

export default EditItem