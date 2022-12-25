import { useState } from 'react'
import styles from './DrinkForm.module.css'

const DrinkForm = (props) => {
  const [drinkForm, setDrinkForm] = useState({
    name: '',
    alcoholic: false,
    quantity: '',
    notes: ''
  })
  const [checkbox, setCheckbox] = useState(false)

  const handleChange = ({ target }) => {
    setDrinkForm({ ...drinkForm, [target.name]: target.value })
  }

  const checkboxHandleChange = ({ target }) => {
    if (target.checked) {
      setDrinkForm({ ...drinkForm, alcoholic: true})
      setCheckbox(true)
    } else if (target.unchecked) {
      setDrinkForm({ ...drinkForm, alcoholic: false})
      setCheckbox(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddDrink(drinkForm)
    setCheckbox(false)
    setDrinkForm({
      name: '',
      alcoholic: false,
      quantity: '',
      notes: ''
    })
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-group mb-3">
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input 
              type="text" 
              id="name-input"
              name="name"
              value={drinkForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3" id={styles.checkbox}>
            <input 
              type="checkbox" 
              id="alcoholic-input"
              name="alcoholic"
              value={drinkForm.alcoholic}
              onChange={checkboxHandleChange}
              checked={checkbox}
            />
            <label htmlFor="alcoholic-input" className="form-label">
              Alcoholic
            </label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="quantity-input" className="form-label">
              Quantity
            </label>
            <textarea
              type="text"
              name="quantity"
              id="quantity-input"
              value={drinkForm.quantity}
              placeholder="Optional"
              onChange={handleChange}
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
              value={drinkForm.notes}
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

export default DrinkForm