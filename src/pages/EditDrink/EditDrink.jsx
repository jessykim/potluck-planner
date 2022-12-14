import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styles from './EditDrink.module.css'

import * as potluckService from '../../services/potluckService'

const EditDrink = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { potluckId, drinkId } = useParams()
  const [drinkForm, setDrinkForm] = useState(state)

  console.log(state.alcoholic)
  console.log(drinkForm.alcoholic)

  const handleChange = ({ target }) => {
    if (target.name === 'alcoholic') {
      if (target.checked) {
        setDrinkForm({ ...drinkForm, alcoholic: true })
      } else {
        setDrinkForm({ ...drinkForm, alcoholic: false })
      }
    } else {
      setDrinkForm({ ...drinkForm, [target.name]: target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await potluckService.updateDrink(potluckId, drinkId, drinkForm)
    navigate(`/potlucks/${potluckId}`)
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
          value={drinkForm.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="alcoholic-input" className="form-label">
          Alcoholic
        </label>
        <input 
          type="checkbox" 
          id="alcoholic-input"
          name="alcoholic"
          value={drinkForm.alcoholic}
          onChange={handleChange}
          checked={drinkForm.alcoholic}
        />
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EditDrink