// typescript gives an error if you try to use `import`
const axios = require('axios').default;
//import config from './config'

const instance  = axios.create({
  //baseURL: config.baseURL,
})

// other headers which you might need to set
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// instance.defaults.headers.common['X-Service-Name'] = config.xServiceName
// instance.defaults.headers.common['X-Service-Key'] = config.xServiceKey
// instance.defaults.headers.common['Accept-Version'] = 'v1'

instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Accept-Language'] = 'en'

// send cookies in requests automatically
instance.defaults.withCredentials = true

instance.all = axios.all
instance.spread = axios.spread



export default instance
