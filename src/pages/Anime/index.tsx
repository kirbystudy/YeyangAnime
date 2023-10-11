import style from './index.module.scss'
import SubTitle from '@/components/SubTitle'
import Bangumimini from '@/components/Bangumimini'

const Anime: React.FC = () => {
  return (
    <div className={style.anime}>
      <SubTitle title="看看新番" icon="bofang"></SubTitle>
      <section>
        <Bangumimini />
      </section>
    </div>
  )
}

export default Anime
