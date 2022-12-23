import styles from './PotluckList.module.css'
import PotluckCard from "../../components/PotluckCard/PotluckCard"

const PotluckList = ({ potlucks }) => {
  potlucks.sort(function(a, b) {
    return new Date(a.start) - new Date(b.start)
  })

  return (
    <main className={styles.container}>
      <h1>Potlucks</h1>
      {potlucks.map((potluck) => (
        <PotluckCard key={potluck._id} potluck={potluck} />
      ))}
    </main>
  )
}

export default PotluckList