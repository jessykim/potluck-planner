import styles from './PotluckList.module.css'
import PotluckCard from "../../components/PotluckCard/PotluckCard"

const PotluckList = (props) => {
  console.log(props.potlucks)
  return (
    <main className={styles.container}>
      {props.potlucks.map((potluck) => (
        <PotluckCard key={potluck._id} potluck={potluck} />
      ))}
    </main>
  )
}

export default PotluckList