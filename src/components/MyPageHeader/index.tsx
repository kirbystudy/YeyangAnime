import Icon from '../Icon'
import style from './index.module.scss'

const MyPageHeader: React.FC = ({ children }) => {
  const backFn = () => {
    window.history.back()
  }
  return (
    <section className={style.header}>
      <div className={style.backBtn} onClick={backFn}>
        <Icon icon="left" />
        Back
      </div>
      <p className={style.pageTitle}>{children}</p>
    </section>
  )
}

export default MyPageHeader
