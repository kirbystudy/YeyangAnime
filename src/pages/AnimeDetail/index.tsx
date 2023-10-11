import style from './index.module.scss'
import MyPageHeader from '@/components/MyPageHeader'
import AnimeDetailHeader from '../AnimeDetailHeader'

const AnimeDetail: React.FC = () => {
  return (
    <article className={style.animeDtail}>
      <MyPageHeader>《123》</MyPageHeader>
      <section className={style.content}>
        <div className={style.headContent}>
          <AnimeDetailHeader />
        </div>
      </section>
    </article>
  )
}

export default AnimeDetail
