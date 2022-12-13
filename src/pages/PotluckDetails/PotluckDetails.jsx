import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Components
import Loading from '../Loading/Loading'
import RsvpForm from '../../components/RsvpForm/RsvpForm'
import RsvpList from "../../components/RsvpList/RsvpList"
import FoodForm from "../../components/FoodForm/FoodForm"
import FoodList from "../../components/FoodList/FoodList"

// Services
import * as potluckService from '../../services/potluckService'

const PotluckDetails = (props) => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const [potluck, setPotluck] = useState(null)
  const [foods, setFoods] = useState([])

  const handleAddRsvp = async (rsvpData) => {
    const newRsvp = await potluckService.createRsvp(id, rsvpData)
    setPotluck({ ...potluck, rsvps: [...potluck.rsvps, newRsvp]})
  }

  const handleAddFood = async (foodData) => {
    const newFood = await potluckService.createFood(id, foodData)
    setFoods([newFood, ...foods])
  }
  
  useEffect(() => {
    const fetchPotluck = async () => {
      const data = await potluckService.show(id)
      setPotluck(data)
    }
    fetchPotluck()
  }, [id])
  
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
        <RsvpList rsvps={potluck.rsvps} user={props.user} potluckId={id} />
      </section>
      <section>
        <h1>Food List</h1>
        <FoodForm handleAddFood={handleAddFood} user={props.user} />
        <FoodList foods={foods} user={props.user} />
      </section>
    </main>
  )
}

export default PotluckDetails