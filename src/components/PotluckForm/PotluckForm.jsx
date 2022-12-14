import styles from './PotluckForm.module.css'

const PotluckForm = (props) => {
  return (
    <main className={styles.container}>
      <h1>Create a Potluck</h1>
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name-input" className="form-label">
            Potluck Name
          </label>
          <input 
            type="text"
            id="name-input"
            name="name"
            value={props.potluckForm.name}
            onChange={props.handleChange}
            placeholder="Friendsgiving"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="start-input" className="form-label">
            Begins
          </label>
          <input 
            type="datetime-local"
            id="start-input"
            name="start"
            value={props.potluckForm.start}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name-input" className="form-label">
            Ends
          </label>
          <input 
            type="datetime-local"
            id="end-input"
            name="end"
            value={props.potluckForm.end}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location-input" className="form-label">
            Location
          </label>
          <input 
            type="text"
            id="location-input"
            name="location"
            value={props.potluckForm.location}
            onChange={props.handleChange}
            placeholder="123 First St."
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description-input" className="form-label">
            Description
          </label>
          <input 
            type="text"
            id="description-input"
            name="description"
            value={props.potluckForm.description}
            onChange={props.handleChange}
            placeholder="Optional"
          />
        </div>
        <button
          type="submit"
          className="btn btn-light btn-fluid"
        >
          Add Potluck
        </button>
      </form>
    </main>
  )
}

export default PotluckForm;