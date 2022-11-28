const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/potlucks`

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function create(potluck) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(potluck)
  })
	return res.json()
}

export {
	create,
  getAll
}