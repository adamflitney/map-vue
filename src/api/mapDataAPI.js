import axios from 'axios'

const endpointURI = 'https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json'

export function getMapData () {
  return axios.get(endpointURI)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}
