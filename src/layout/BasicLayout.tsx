import React, { useEffect } from 'react'
import BottomNav from '@/components/BottomNav'
import { Location } from 'umi'
import style from './BasicLayout.less'
import '@/static/icon/iconfont.css'

interface BasicLayoutProps {
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location } = props
  useEffect(() => {
  }, [])
  const { pathname } = location
  return (
    <div className={style.main}>
      <article>{ children }</article>
      <footer>
        <BottomNav pathname={pathname}/>
      </footer>
    </div>
  )
}
export default BasicLayout
