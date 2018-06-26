import './canvas.scss'

import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className='container'>
        <Header title='Canvas'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
            { Taro.getEnv() == ENV_TYPE.WEAPP ? <Text>暂未支持，敬请期待</Text> : <Text>可直接使用微信小程序的Canvas</Text>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
