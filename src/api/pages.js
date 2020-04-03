import axios from 'axios'

const api = axios.create({
  baseURL: 'https://levi-project.getsandbox.com'
})

function getAllPages (cb) {
  api.get('/getBenefitsPages')
    .then((response) => {
      // console.log(response)
      cb(response.data.pages)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default {
  getAllPages: (cb) => getAllPages(cb)
}
