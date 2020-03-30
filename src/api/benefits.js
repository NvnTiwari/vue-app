import axios from 'axios'

const api = axios.create({
  baseURL: 'https://levi-project.getsandbox.com'
})

function getBenefitsApi(cb) {
  api.get('/getBenefits')
    .then((response) => {
      console.log(response)
      cb(response.data.benefits)
    })
    .catch((error) => {
      console.log(error)
    })
}

// function saveDataApi (data, cb) {
//   api.post('blogs', data)
//   .then(function (response) {
//     cb(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

// function updateData (idblog, data, cb) {
//   api.put('blogs/' + idblog, data)
//   .then((response) => {
//     cb({ status: 201 })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

// function deleteData (idblog, cb) {
//   api.delete('blogs/' + idblog)
//   .then((response) => {
//     cb(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

export default {
  getBenefits: (cb) => getBenefitsApi(cb)
  //   saveBlog: (data, cb) => saveDataApi(data, cb),
  //   updateBlog: (idblog, data, cb) => updateData(idblog, data, cb),
  //   deleteBlog: (idblog, cb) => deleteData(idblog, cb)
}
