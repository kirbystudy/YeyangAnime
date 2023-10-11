import { getNavList } from './config'
import classNames from 'classnames'
import style from './index.module.scss'
import { Fragment, useEffect, useState } from 'react'
import { useEventListener } from '@/utils/hooks'
import { throttle } from '@/utils/common'
import Icon from '@/components/Icon'
import { NavLink, useNavigate } from 'react-router-dom'
import { Drawer, Menu } from 'antd'

interface navProps {
  navShow?: boolean
  setNavShow?: Function
  mode?: number
  setMode?: Function
}

interface MenuItemProps {
  name: string
  to: string
  icon: string
}

interface Params {
  key: string;
}

const navArr = getNavList()

const getItem = ({ name, to, icon }: MenuItemProps) => {
  return {
    label: name,
    key: to,
    icon: <Icon icon={icon} />,
  }
}

const items = navArr.map((item: MenuItemProps) => {
  return getItem(item)
})

const Header: React.FC<navProps> = () => {
  const navigate = useNavigate()
  const [navShow, setNavShow] = useState(true)
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(true)

  useEffect(() => {
    window.document.documentElement.setAttribute(
      'data-theme',
      mode ? 'light' : 'dark'
    )
  }, [mode])

  let pre = document.documentElement.scrollTop || document.body.scrollTop
  useEventListener(
    'scroll',
    throttle(() => {
      let now = document.documentElement.scrollTop || document.body.scrollTop
      let up = pre >= now
      pre = now
      setNavShow(up)
    }, 500)
  )

  const handleMenuClick = (params: Params) => {
    setOpen(false)
    navigate(params.key)
  }

  return (
    <>
      <nav className={classNames(style.navWrap, { [style.hidden]: !navShow })}>
        <h2 className={style.navTitle}>椰羊动漫</h2>
        <div className={style.webNav}>
          {navArr.map((item, index) => (
            <Fragment key={index}>
              <NavLink to={item.to} key={index} className={style.navItem}>
                <Icon icon={item.icon}/>
                <span>{item.name}</span>
              </NavLink>
            </Fragment>
          ))}
        </div>
        <div className={style.extendNav}>登录</div>
      </nav>
      <div className={style.mobileNav}>
        <h2 className={style.mobileNavTitle}>椰羊动漫</h2>
        <Icon
          icon="menu"
          className={style.icon}
          click={() => {
            setOpen(true)
          }}
        />
        <Drawer
          title='导航栏'
          bodyStyle={{ padding: 0 }}
          width={200}
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
          closeIcon={<Icon icon="guanbi" className={style.icon} />}
        >
          <Menu mode="inline" items={items} onClick={handleMenuClick}></Menu>
        </Drawer>
      </div>
    </>
  )
}

export default Header
