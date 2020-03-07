import axios from 'axios'
export function request(config){
  return new Promise((resolve,reject)=>{
    const instance=axios.create({
      // baseURL:'http://123.207.32.32:8000/api/wh'
      baseURL:'http://106.54.54.237:8000/api/wh'
    })
    instance.interceptors.request.use(config=>{
      return config
    },err=>{
      return err
    })
    instance.interceptors.response.use(res=>{
      return res.data
    },err=>{
      return err
    })
    instance(config).then(res=>{
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}
