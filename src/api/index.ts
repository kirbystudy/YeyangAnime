import request from './axios'
import { publicURL } from '../../config'

// 获取动漫新番banner
export const getBannerList = async (date = '') => {
  return await request({
    url: `${publicURL}/banner?search=${date}`,
    method: 'GET',
  })
}

// 获取动漫番剧归类
export const getArchiveList = async () => {
  return await request({
    url: `${publicURL}/years`,
    method: 'GET',
  })
}

// 获取声优库列表
export const getCVList = async () => {
  return await request({
    url: `${publicURL}/cvlist`,
    method: 'GET',
  })
}

// 根据编号获取声优关系图
export const getCVTree = async (code = 'RB1684') => {
  return await request({
    url: `${publicURL}/tree?orderId=${code}`,
    method: 'GET',
  })
}

// 获取本周所有番剧
export const getCalendar = async () => {
  return await request({
    url: `/api/mikan/xinfan/weekall`,
    method: 'GET',
    headers: {
      uid: 'f0a7a293db396df6e8875df383fc3fa2',
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMGE3YTI5M2RiMzk2ZGY2ZTg4NzVkZjM4M2ZjM2ZhMiIsImlhdCI6MTY5NDA5MDQwNiwic3ViIjoie1widUlkXCI6XCJmMGE3YTI5M2RiMzk2ZGY2ZTg4NzVkZjM4M2ZjM2ZhMlwiLFwidXNlcm5hbWVcIjpcInhpYW9tYWlcIn0ifQ.mHtFnLNtvdQWjC6ZWdBdEH_1lJjETw6nlCSN-lnSRnE',
      loginType: '0',
    },
  })
}