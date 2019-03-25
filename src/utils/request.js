import axios from 'axios'
export default ({url, method='GET', data={}, params={}}) => {
  return axios({
    url,
    method,
    data,
    params
  })
  .then(result => result.data)
  .catch(error => error)
}