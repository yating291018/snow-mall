import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { history } from 'umi'

const menu = [
  {
    title: '首页',
    link: '/',
    icon: 'home'
  },
  {
    title: '购物车',
    link: '/cart',
    icon: 'gouwuchekong'
  },
  {
    title: '订单列表',
    link: '/olist',
    icon: 'weibiaoti--'
  },
  {
    title: '我的',
    link: '/user',
    icon: 'daohanglan-05'
  }
]
interface BottomNavProps {
  pathname: string;
}
export default class BottomNav extends Component<BottomNavProps> {
  render() {
    const { pathname } = this.props
    return (
      <TabBar tintColor="red">
        {
          menu.map(({title, link, icon }) => (
            <TabBar.Item
              key={title}
              title={title}
              icon={<i className={'iconfont icon-' + icon}></i>}
              selectedIcon={<i className={'red iconfont icon-' + icon}></i>}
              selected={pathname === link}
              onPress={() => {
                history.push(link)
              }}
            />
          ))
        }
      </TabBar>
    )
  }
}
