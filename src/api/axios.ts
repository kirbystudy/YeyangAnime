import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css';

const request = axios.create({
  timeout: 1 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use((config) => {
  nProgress.start()
  return config
})

request.interceptors.response.use(
  ({ data }) => {
    nProgress.done()
    if (data.error) {
      throw new Error(data.error)
    }
    return data
  },
  (err) => {
    nProgress.done()
    if (axios.isCancel(err)) {
      return 'isCancel'
    }
  }
)

export default request
