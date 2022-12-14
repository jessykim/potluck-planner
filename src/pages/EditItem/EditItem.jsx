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
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>{props.user.name}</h1>
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EditItem