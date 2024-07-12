/**
 * @author        guang <531311582@qq.com>
 * @date          2024-07-12 22:53:51
 * Copyright © YourCompanyName All rights reserved
 */

// mock数据
import Mock from 'mockjs'
const obj = Mock.mock({
  'list|5': [
    {
      id: '@id',
      name: '@cname',
      title: '@ctitle(6,10)',
    },
  ],
})

export default [
  {
    url: '/api/stations',
    type: 'get',
    response: () => {
      return obj.list
    },
  },
  {
    url: '/api/user',
    type: 'get',
    response: () => {
      return obj.list
    },
  },
]
