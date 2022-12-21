import { useState } from 'react'
import styles from './ItemForm.module.css'

const ItemForm = (props) => {
  const [itemForm, setItemForm] = useState({
    name: '',
    category: '',
    notes: ''
  })

  
  const handleChange = ({ target }) => {
    setItemForm({ ...itemForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddItem(itemForm)
    setItemForm({
      name: '',
      category: '',
      notes: ''
    })
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        {/* <h1>{props.user.name}</h1> */}
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
    </>
  )
}

export default ItemForm