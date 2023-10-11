import { Image } from 'antd'
import style from './index.module.scss'
import { Link } from 'react-router-dom'

const AnimeCard: React.FC = ({ animeInfo }) => {
  return (
    <>
      {animeInfo.item.map((item, index) => (
        <Link to={`/anime/detail/${item.id}`} draggable="false">
          <div className={style.animeCard} key={index}>
            <div className={style.card}>
              <img
                src={item.poster}
                referrerPolicy="no-referrer"
                className={style.img}
                draggable="false"
              />
              <div className={style.info}>
                <p className={style.title}>{item.fanName}</p>
                <div className={style.rating}>
                  <p className={style.episodes}>
                    {item.total ? `第${item.total}集` : '待更新'}
                  </p>
                  <p className={style.tags}>{item.tag}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default AnimeCard
