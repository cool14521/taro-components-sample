import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './index.scss'
import { diao } from '../../utils'
import dogPic from '../../asset/1.jpg'
import Tab from '../../components/tab/tab'

// const x = require('../../utils/x.json')

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      todos: [],
      githubList: [],
      inputTodoValue: '',
      imagesList: [
        'https://m.360buyimg.com/babel/jfs/t19189/259/982422064/89206/94ed5482/5ab4f6cbNd323ee06.jpg',
        'https://img1.360buyimg.com/da/jfs/t14950/329/2565843691/99347/46a6681f/5ab21540N21d5240c.jpg'
      ]
    }
  }

  addTodoClick = async () => {
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
    const res = await Taro.request(`https://api.github.com/search/repositories?q=${this.state.inputTodoValue}`)
    this.setState({
      githubList: res.items
    })
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.setState({
      todos
    })
  }

  setTodoValue = e => {
    this.changeTimer && clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      this.setState({
        inputTodoValue: e.target.value
      })
    }, 10)
  }

  deleteTodo (index, e) {
    e.preventDefault()
    const todos = this.state.todos.concat()
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  xxhanlder = () => {
    console.log('sdsddssd')
  }

  componentDidMount () {
    console.log('index mount')
    console.log(diao())
    if (process.env.NODE_ENV === 'development') {
      console.log('development')
    }
    console.log(WWW)
  }

  componentDidShow () {
    console.log('index show')
  }

  componentDidHide () {
    console.log('index hide')
  }

  componentWillUnmount () {
    console.log('index unmount')
  }

  navigate () {
    console.log(Taro)
    Taro.navigateTo({
      url: '/pages/about/about'
    })
  }

  render () {
    return (
      <View className='todo'>
        <Button className='navigate_btn' onClick={this.navigate}>跳转</Button>
        <View>
          <Image src={this.state.imagesList[0]} />
        </View>
        <Tab xx={this.xxhanlder} t={1} />
        <Tab xx={this.xxhanlder} t={2} />
        <View>
          <Image src={dogPic} />
        </View>
        <View className="title"><Text>TODO List</Text></View>
        <View className='todo_add'>
          <Input className='todo_add_input' type='text' onInput={this.setTodoValue} />
          <Button className='todo_add_btn' onClick={this.addTodoClick}>添加</Button>
        </View>
        <View className='list'>
          {this.state.todos.map((item, index) => {
            return <View className='list_item'>
              <Text className='list_item_title'>{item.title}</Text>
              <Button className='dele_btn' onClick={this.deleteTodo.bind(this, index)}>x</Button>
            </View>
          })}
        </View>
        <View className='github_list'>
          {this.state.githubList.map((result, index) => {
            return (
              <View class='result'>
                <View>
                  <Text>{result.full_name}</Text>
                  🌟<Text>{result.stargazers_count}</Text>
                </View>
                <Text>{result.description}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
