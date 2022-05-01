import axios from 'axios'

export default async function getData () {
  const response = await axios.get('https://my-json-server.typicode.com/linefmv/about-me-api/db')
    .then(response => response.data)
    .catch(error => error)
  return await response
}
