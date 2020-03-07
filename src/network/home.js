import {request} from './request'
export function getHomedata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomegoods(type,page){
  return request({
    url:'/home/data',
    params:{type,page}
  })
}