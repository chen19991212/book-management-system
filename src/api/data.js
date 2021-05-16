import request from '../utils/request';

export function getVisitsData(){
  return request({
    url: '/data/visits',
    method: 'get',
  })
}

export function getCategoryData(){
  return request({
    url: '/data/category',
    method: 'get',
  })
}

export function getRecordData(){
  return request({
    url: '/data/record',
    method: 'get',
  })
}