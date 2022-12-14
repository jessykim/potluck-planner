import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Components
import Loading from '../Loading/Loading'
import RsvpForm from '../../components/RsvpForm/RsvpForm'
import RsvpList from "../../components/RsvpList/RsvpList"
import FoodForm from "../../components/FoodForm/FoodForm"
import FoodList from "../../components/FoodList/FoodList"
import DrinkForm from "../../components/DrinkForm/DrinkForm"
import DrinkList from "../../components/DrinkList/DrinkList"

// Services
import * as potluckService from '../../services/potluckService'

const PotluckDetails = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [potluck, setPotluck] = useState(null)
  const [foods, setFoods] = useState([])
  const [drinks, setDrinks] = useState([])
  
  const handleAddRsvp = async (rsvpData) => {
    const newRsvp = await potluckService.createRsvp(id, rsvpData)
    setPotluck({ ...potluck, rsvps: [...potluck.rsvps, newRsvp]})
  }

  const handleDeleteRsvp = async (potluckId, rsvpId) => {
    await potluckService.deleteRsvp(potluckId, rsvpId)
    setPotluck({ ...potluck, rsvps: potluck.rsvps.filter((rsvp) => rsvp._id !== rsvpId)})
  }

  const handleAddFood = async (foodData) => {
    const newFood = await potluckService.createFood(id, foodData)
    setFoods([newFood, ...foods])
  }

  const handleAddDrink = async (drinkData) => {
    const newDrink = await potluckService.createDrink(id, drinkData)
    setDrinks([newDrink, ...drinks])
  }

  const handleDeleteFood = async (potluckId, foodId) => {
    const deletedFood = await potluckService.deleteFood(potluckId, foodId)
    setFoods(foods.filter((food) => food._id !== deletedFood._id))
    navigate(`/potlucks/${potluckId}`)
  }
  
  useEffect(() => {
    const fetchPotluck = async () => {
      const data = await potluckService.show(id)
      setPotluck(data)
      const foodData = await potluckService.foodIndex(id)
      setFoods(foodData)
      const drinkData = await potluckService.drinkIndex(id)
      setDrinks(drinkData)
    }
    fetchPotluck()
  }, [id, setFoods, setDrinks])
  
  if (!potluck) return <Loading />

  const start = new Date(potluck.start).toLocaleDateString()
  const starttime = new Date(potluck.start).toLocaleTimeString()
  const end = new Date(potluck.end).toLocaleDateString()
  const endtime = new Date(potluck.end).toLocaleTimeString()

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{potluck.name}</h1>
          <span>
            {potluck.host.name}
          </span>
        </header>
        <p>Begins: {start} at {starttime}</p>
        <p>Ends: {end} at  {endtime}</p>
        <p>{potluck.description}</p>
      </article>
      <span>
        {potluck.host._id === props.user.profile &&
          <>
            <Link to={`/potlucks/${id}/edit`} state={potluck}>Edit</Link>
            <button onClick={() => props.handleDeletePotluck(id)}>Delete</button>
          </>
        }
      </span>
      <section>
        <h1>Guest List</h1>
        <RsvpForm handleAddRsvp={handleAddRsvp} potluck={potluck} user={props.user} />
        <RsvpList rsvps={potluck.rsvps} user={props.user} potluckId={id} handleDeleteRsvp={handleDeleteRsvp} />
      </section>
      <section>
        <h1>Food List</h1>
        <FoodForm handleAddFood={handleAddFood} user={props.user} />
        <FoodList foods={foods} user={props.user} potluckId={id} handleDeleteFood={handleDeleteFood} />
      </section>
      <section>
        <h1>Drink List</h1>
        <DrinkForm handleAddDrink={handleAddDrink} user={props.user} />
        <DrinkList drinks={drinks} user={props.user} potluckId={id} />
      </section>
    </main>
  )
}

export default PotluckDetails