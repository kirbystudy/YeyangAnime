import style from './index.module.scss'
import logo from '@/assets/imgs/每日番剧-logo.png'
import { useEffect, useRef, useState } from 'react'
import { useGetAnime } from '@/utils/hooks'
import AnimeCard from '../AnimeCard'

const Bangumimini: React.FC = () => {
  const [nowDay, setNowDay] = useState<number>(1)
  const myRefs = useRef<Array<HTMLElement | null>>([])
  const { anime, updateAnime } = useGetAnime()

  useEffect(() => {
    updateAnime()
  }, [])

  const changeDay = (id: number) => {
    setNowDay(id)
  }

  return (
    <div className={style.bangumi}>
      <div className={style.cardHeader}>
        <div className={style.animeLogo}>
          <img src={logo} />
        </div>
        <ul className={style.week}>
          {anime?.data?.map((week, index) => (
            <li
              key={index}
              onClick={() => changeDay(week.weekday.id)}
              className={
                week.weekday.id === nowDay ? `${style.active}` : ''
              }
            >
              {week.weekday.cn}
              <span>{week.weekday.en}</span>
            </li>
          ))}
        </ul>
      </div>
      {anime?.data?.map((item, index) => (
        <div key={index}>
          {item.weekday.id === nowDay && (
            <section
              className={`${style.tabInner} scrollbar`}
              ref={(el) => {
                myRefs.current[index] = el
              }}
            >
              <AnimeCard animeInfo={item}></AnimeCard>
            </section>
          )}
        </div>
      ))}
    </div>
  )
}

export default Bangumimini
