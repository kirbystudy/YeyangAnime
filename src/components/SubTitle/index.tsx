import React from 'react'
import style from './index.module.scss'
import Icon from '../Icon'

interface SubTitleProps {
  title: string
  icon: string
  extra?: React.ReactNode
}

const SubTitle: React.FC<SubTitleProps> = ({ title, icon, extra }) => {
  return (
    <div className={style.subTitle}>
      <div className={style.content}>
        <div>
          <Icon icon={icon} />
          <span>{title}</span>
        </div>
        <div className={style.extra}>{extra}</div>
      </div>
    </div>
  )
}

export default SubTitle
