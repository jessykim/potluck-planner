import { useState } from 'react'
import styles from './FoodForm.module.css'

const FoodForm = (props) => {
  // console.log(props.user)
  const [foodForm, setFoodForm] = useState({
    name: '',
    type: 'Main',
    notes: ''
  })

  const handleChange = ({ target }) => {
    setFoodForm({ ...foodForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddFood(foodForm)
    setFoodForm({
      name: '',
      type: 'Main',
      notes: ''
    })
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>{props.user.name}</h1>
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FoodForm