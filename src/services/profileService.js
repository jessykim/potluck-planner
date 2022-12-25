import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// async function getProfile(userProfileId) {
//   const res = await fetch(`${BASE_URL}/${userProfileId}`, {
//     headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//   })
//   return await res.json()
// }

// async function getAllProfiles() {
//   const res = await fetch(BASE_URL, {
//     headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//   })
//   return await res.json()
// }

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

export { 
  // getProfile, 
  // getAllProfiles, 
  addPhoto,
  show,
  index
}