import styles from './PotluckList.module.css'
import PotluckCard from "../../components/PotluckCard/PotluckCard"

import { GiPartyFlags } from 'react-icons/gi'
import { FaUtensils } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'

const PotluckList = ({ potlucks }) => {
  potlucks.sort(function(a, b) {
    return new Date(a.start) - new Date(b.start)
  })

  return (
    <>
      <header className={styles.potlucksHeader}>
        <div className={styles.icons}>
          <GiPartyFlags />
          <FaUtensils />
          <GiPartyPopper />
        </div>
        <h1>Potlucks</h1>
      </header>
      <main className={styles.container}>
        {potlucks.map((potluck) => (
          <PotluckCard key={potluck._id} potluck={potluck} />
        ))}
      </main>
    </>
  )
}

export default PotluckList