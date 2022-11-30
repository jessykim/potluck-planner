import PotluckCard from "../../components/PotluckCard/PotluckCard"
import styles from './PotluckList.module.css'

const PotluckList = (props) => {
  // const potlucks = props.potlucks
  // console.log(potlucks)
  return (
    <main className={styles.container}>
      {props.potlucks.map((potluck) => (
        <PotluckCard key={potluck._id} potluck={potluck} />
      ))}
    </main>
  )
}

export default PotluckList